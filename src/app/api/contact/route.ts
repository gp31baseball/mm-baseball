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

    // --- Basic validation ---
    if (!parentName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // --- Build new entry ---
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

    // --- Load existing messages or init empty ---
    const existing = (await kv.get("messages")) || [];

    // --- Add newest first ---
    existing.unshift(entry);

    // --- Save back to KV ---
    await kv.set("messages", existing);

    // --- Success response ---
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("KV contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
