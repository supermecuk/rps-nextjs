import { NextRequest, NextResponse } from "next/server";
import { playGame } from "../../../../lib/playGame";
import { pickCompMove } from "../../../../lib/pickCompMove";

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(request.headers)
  
  const compMove = pickCompMove()
  const result = playGame(body.playerMove, compMove)

  return NextResponse.json({ result, kaka: `${result}`})
}