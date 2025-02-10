import { getUserVoiceAvailableSeconds } from "@/utils/voiceChatTrial";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const userIP = (await headers()).get("x-forwarded-for");

    if (userIP?.split(".").length !== 4) {
      throw new Error("User IP not found");
    }
    const userVoiceAvailableSeconds = await getUserVoiceAvailableSeconds(
      userIP as string
    );

    return NextResponse.json({
      success: true,
      data: { availableVoiceSeconds: userVoiceAvailableSeconds },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: (error as Error).message,
    });
  }
};
