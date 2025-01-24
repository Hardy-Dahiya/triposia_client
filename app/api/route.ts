import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);

  return NextResponse.json({
    host: url.host, // e.g., "localhost:3000"
    hostname: url.hostname, // e.g., "localhost"
    protocol: url.protocol, // e.g., "http:"
    pathname: url.pathname, // e.g., "/api"
    search: url.search, // e.g., "?name=John&age=30"
    searchParams: Object.fromEntries(url.searchParams.entries()), // Parsed query params
  });
}
