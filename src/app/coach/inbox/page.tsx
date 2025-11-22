import path from "path";
import { promises as fs } from "fs";

async function loadMessages() {
  const filePath = path.join(process.cwd(), "data", "messages.json");
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw || "[]");
  } catch {
    return [];
  }
}

async function loadCounters() {
  const filePath = path.join(process.cwd(), "data", "counter.json");
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw || "{ \"visits\": 0 }");
  } catch {
    return { visits: 0 };
  }
}

export default async function InboxPage() {
  const messages = await loadMessages();
  const counters = await loadCounters();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Inbox</h1>

      {/* ⭐ Site Visits Counter */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow border border-gray-300">
        <h2 className="text-xl font-bold mb-2">Site Visits</h2>
        <p className="text-3xl font-semibold text-[#0A2351]">
          {counters.visits}
        </p>
      </div>

      {/* ⭐ Messages */}
      <div className="space-y-4">
        {messages.length === 0 && (
          <p className="text-gray-600">No messages yet.</p>
        )}

        {messages.map((msg: any) => (
          <div
            key={msg.id}
            className="bg-white p-4 rounded-lg shadow border border-gray-300"
          >
            <p className="text-sm text-gray-600 mb-2">
              {new Date(msg.ts).toLocaleString()}
            </p>

            <p><strong>Parent:</strong> {msg.parentName}</p>
            <p><strong>Player:</strong> {msg.playerName || "-"}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Phone:</strong> {msg.phone || "-"}</p>
            <p><strong>Age:</strong> {msg.age || "-"}</p>
            <p><strong>Team:</strong> {msg.team || "-"}</p>

            <p className="mt-3 whitespace-pre-line">
              <strong>Message:</strong> {msg.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
