import { NextResponse } from "next/server";

export async function POST(request: Request) {
  return NextResponse.json('scissors');
}

export async function GET(request: Request) {
  return NextResponse.json('scissors');
}
