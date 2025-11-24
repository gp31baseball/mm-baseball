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

    if (!parentName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

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

    // ---- FIX: Ensure existing is always an array ----
    let existing = await kv.get("messages");

    if (!Array.isArray(existing)) {
      existing = [];
    }

    // Add newest first
    existing.unshift(entry);

    await kv.set("messages", existing);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("KV contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
