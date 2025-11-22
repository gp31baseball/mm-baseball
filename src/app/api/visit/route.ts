import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function POST() {
  try {
    const filePath = path.join(process.cwd(), "data", "counter.json");

    let counters = { visits: 0 };

    try {
      const raw = await fs.readFile(filePath, "utf8");
      counters = JSON.parse(raw);
    } catch {
      counters = { visits: 0 };
    }

    counters.visits += 1;

    await fs.writeFile(filePath, JSON.stringify(counters, null, 2));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Visit counter error:", err);
    return NextResponse.json({ error: "fail" }, { status: 500 });
  }
}
