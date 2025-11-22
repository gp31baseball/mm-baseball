import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

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
    } = body as {
      playerName?: string;
      parentName?: string;
      email?: string;
      phone?: string;
      age?: string;
      team?: string;
      message?: string;
    };

    // Basic validation
    if (!parentName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Path to JSON message storage
    const filePath = path.join(process.cwd(), "data", "messages.json");

    // Load or initialize
    let existing = [];
    try {
      const raw = await fs.readFile(filePath, "utf8");
      existing = JSON.parse(raw || "[]");
    } catch (err) {
      // If file doesn't exist, create a fresh blank array
      existing = [];
    }

    // Build new entry
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

    // Prepend new message to the list
    existing.unshift(entry);

    // Save back to JSON
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

    // Return success
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
