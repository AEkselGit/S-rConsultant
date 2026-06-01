import { NextResponse } from "next/server";
import { createGuest } from "@/lib/guests";

export async function POST(request: Request) {
  const body = await request.json();

  const id = createGuest({
    name: body.name,
    company: body.company,
    email: body.email,
    phoneNumber: body.phoneNumber,
  });

  return NextResponse.json({ id });
}
