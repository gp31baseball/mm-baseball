"use client";

import { useState } from "react";

export default function CoachLogin() {
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/coach-auth", {
      method: "POST",
      body: JSON.stringify({ pwd }),
    });

    if (res.ok) {
      window.location.href = "/coach/inbox";
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <div className="min-h-screen bg-[#0A2351] flex flex-col items-center justify-center px-6 text-white">
      <h1 className="text-4xl font-bold mb-6">Coach Portal</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded-lg w-full max-w-sm shadow-lg"
      >
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-[#FDB827] text-[#0A2351] font-semibold py-2 rounded hover:opacity-90"
        >
          Login
        </button>

        {error && (
          <p className="text-red-600 text-center mt-4 text-sm">{error}</p>
        )}
      </form>
    </div>
  );
}
