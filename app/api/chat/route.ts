import { CHAT_SYSTEM_PROMPT } from "@/constants/systemPrompts";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "edge"; // Use Vercel Edge runtime for low-latency streaming

const client = new OpenAI();

export const POST = async (request: NextRequest) => {
  try {
    const { messages } = await request.json();
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: CHAT_SYSTEM_PROMPT,
        },
        ...messages,
      ],
      stream: true,
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response as any) {
          const text = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new Response(stream);
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: (e as Error).message,
    });
  }
};
