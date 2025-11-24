import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function POST() {
  await kv.set("messages", []);
  return NextResponse.json({ cleared: true });
}
