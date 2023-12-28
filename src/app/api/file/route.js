import { NextRequest, NextResponse } from "next/server";
// @ts-ignore
export async function POST(req, res) {
  return NextResponse.json({ name: "File uploaded" });
}