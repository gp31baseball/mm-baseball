import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      playerName,
      parentName,
      email,
      phone,
      age,
      team,
      message,
    } = body;

    // Basic validation
    if (!parentName || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 200 });
    }

    // Load existing messages
    let existing: any = await kv.get("messages");

    // Normalize
    if (!Array.isArray(existing)) {
      existing = [];
    }

    // Build entry
    const entry = {
      id: crypto.randomUUID(),
      ts: Date.now(),
      playerName: playerName || "",
      parentName,
      email,
      phone: phone || "",
      age: age || "",
      team: team || "",
      message,
    };

    // Save
    existing.unshift(entry);
    await kv.set("messages", existing);

    // Always return success (old behavior)
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);

    // Even in failure, mimic old behavior (avoid frontend “Network error”)
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
