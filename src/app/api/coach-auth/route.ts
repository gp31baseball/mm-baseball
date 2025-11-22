import { NextResponse } from "next/server";

// ⭐ LOCAL DEV PASSWORD — easy to remember
const DEV_PASSWORD = "Snell";

export async function POST(req: Request) {
  const { pwd } = await req.json();

  // ⭐ Use the LOCAL dev password until you're ready for Vercel env var
  if (pwd === DEV_PASSWORD) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
