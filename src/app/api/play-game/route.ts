import { NextRequest, NextResponse } from "next/server";
import { pickCompMove } from "../../../../lib/pickCompMove";
import { playGame } from "../../../../lib/playGame";

export async function POST(request: NextRequest) {
  const body = await request.json()

  const compMove = pickCompMove()
  const result = playGame(body.playerMove, compMove)

  return NextResponse.json({ result }, {status: 200})
}

export async function GET(request: NextRequest) {
  

  return NextResponse.json({ result: 'HELLO FROM THE VERCEL WEB' }, {status: 200})
}