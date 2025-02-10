import { NextRequest, NextResponse } from "next/server";
export const POST = async (request: NextRequest) => {
  try {
    const { history, mode } = await request.json();

    console.log("Received conversation history:", history);
    console.log("Mode:", mode);

    return NextResponse.json({
      success: true,
      message: "Conversation history received",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: (error as Error).message,
    });
  }
};
