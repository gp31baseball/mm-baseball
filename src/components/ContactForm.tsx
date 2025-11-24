"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      playerName: formData.get("playerName") as string | null,
      parentName: formData.get("parentName") as string | null,
      email: formData.get("email") as string | null,
      phone: formData.get("phone") as string | null,
      age: formData.get("age") as string | null,
      team: formData.get("team") as string | null,
      message: formData.get("message") as string | null,
    };

    // Basic required field validation
    if (!payload.parentName || !payload.email || !payload.message) {
      setStatus("error");
      setError("Please fill in parent name, email, and a message.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Always attempt JSON parsing so we can detect success
      const data = await res.json().catch(() => ({}));

      if (data.success === true) {
        setStatus("success");
        setError(null);   // ← IMPORTANT: clears stale red error
        (e.currentTarget as HTMLFormElement).reset();
        return;
      }

      // Backend returned error payload
      setStatus("error");
      setError(data.error || "Please fill out all required fields.");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="playerName"
          type="text"
          placeholder="Player Name (optional)"
          className="p-3 rounded-md border border-[#0A2351] text-sm"
        />
        <input
          name="parentName"
          type="text"
          placeholder="Parent Name *"
          className="p-3 rounded-md border border-[#0A2351] text-sm"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="email"
          type="email"
          placeholder="Parent Email *"
          className="p-3 rounded-md border border-[#0A2351] text-sm"
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Parent Phone (optional)"
          className="p-3 rounded-md border border-[#0A2351] text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="age"
          type="text"
          placeholder="Player Age"
          className="p-3 rounded-md border border-[#0A2351] text-sm"
        />
        <input
          name="team"
          type="text"
          placeholder="Current Team / Level"
          className="p-3 rounded-md border border-[#0A2351] text-sm"
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell Coach Matt a little about your player and what you’re looking for. *"
        rows={4}
        className="p-3 rounded-md border border-[#0A2351] text-sm"
        required
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-[#FDB827] text-[#0A2351] font-semibold py-3 rounded-md hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-xs text-green-700 mt-1">
          Message sent. Coach Matt will review and reach out if it’s a fit.
        </p>
      )}

     
    </form>
  );
}
