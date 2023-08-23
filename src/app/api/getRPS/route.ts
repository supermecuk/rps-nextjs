import { GetRPSResults } from "../../../../lib/getRPSResult";
import { NextResponse } from "next/server";

export async function POST(request: Request){
  return NextResponse.json(GetRPSResults)
}
