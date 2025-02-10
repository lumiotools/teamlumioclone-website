import { VOICE_SYSTEM_PROMPT } from "@/constants/systemPrompts";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await (
      await fetch("https://api.openai.com/v1/realtime/sessions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-realtime-preview",
          modalities: ["audio", "text"],
          input_audio_transcription: {
            model: "whisper-1",
            language: "en",
          },
          instructions: VOICE_SYSTEM_PROMPT,
        }),
      })
    ).json();

    const clientSecret = response?.["client_secret"]?.["value"];

    if (!clientSecret) {
      console.log(response);
      throw new Error("Failed to create realtime session");
    }

    return NextResponse.json({
      success: true,
      data: { voiceToken: clientSecret },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: (error as Error).message,
    });
  }
};
