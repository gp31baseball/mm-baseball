import { kv } from "@vercel/kv";

interface Message {
  id: string;
  ts: number;
  parentName: string;
  playerName: string;
  email: string;
  phone: string;
  age: string;
  team: string;
  message: string;
}

export default async function InboxPage() {
  // --- Load messages from KV ---
  const messages = (await kv.get<Message[]>("messages")) || [];

  // --- Load counters from KV ---
  const counters = (await kv.get<{ visits: number }>("counters")) || { visits: 0 };

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

        {messages.map((msg) => (
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
