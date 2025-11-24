import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET() {
  try {
    await kv.set("messages", []);
    await kv.set("counters", { visits: 0 });

    return NextResponse.json({
      ok: true,
      message: "KV reset successful.",
    });
  } catch (err) {
    console.error("KV reset failed", err);
    return NextResponse.json(
      { ok: false, error: "KV reset failed" },
      { status: 500 }
    );
  }
}
