import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { updateUserVoiceTrial } from "@/utils/voiceChatTrial";

export const POST = async (request: NextRequest) => {
  try {
    const { history, mode, availableVoiceSeconds } = await request.json();

    console.log("Received conversation history:", history);
    console.log("Mode:", mode);

    if (mode === "voice") {
      const userIP = (await headers()).get("x-forwarded-for");
      await updateUserVoiceTrial(
        userIP as string,
        availableVoiceSeconds !== undefined ? availableVoiceSeconds : 0
      );
    }

    return NextResponse.json({
      success: true,
      message: "Conversation history received",
      yourIp: (await headers()).get("x-forwarded-for"),
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: (error as Error).message,
    });
  }
};
