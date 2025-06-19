import { logs } from '@/app/logger/data';

let nextId = logs.length + 1;

export async function GET() {
  return new Response(JSON.stringify(logs), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const body = await req.json();
  const entry = { id: nextId++, ...body };
  logs.push(entry);
  return new Response(JSON.stringify(entry), {
    headers: { 'Content-Type': 'application/json' },
    status: 201,
  });
}
