import { getUserVoiceAvailableSeconds } from "@/utils/voiceChatTrial";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const userIP = (await request.headers).get("x-forwarded-for");
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
