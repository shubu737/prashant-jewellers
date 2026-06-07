import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload: ContactPayload = await request.json();

  if (!payload.name || !payload.phone || !payload.message) {
    return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
  }

  console.log("Contact form submission:", payload);

  return NextResponse.json({ success: true });
}
