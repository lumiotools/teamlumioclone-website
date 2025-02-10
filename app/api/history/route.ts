import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export const POST = async (request: NextRequest) => {
  try {
    const { history, mode } = await request.json();

    console.log("Received conversation history:", history);
    console.log("Mode:", mode);

    return NextResponse.json({
      success: true,
      message: "Conversation history received",
      yourIp: (await headers()).get("x-forwarded-host"),
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: (error as Error).message,
    });
  }
};
