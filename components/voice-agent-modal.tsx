"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MicIcon } from "lucide-react";
import {
  startRealtimeSession,
  stopRealtimeSession,
} from "@/utils/openaiRealtimeVoice";

export function VoiceAgentModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRecording, setIsRecording] = useState(false);
  const connectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const conversationHistoryRef = useRef<object[]>([]); // New Ref for history

  useEffect(() => {
    fetch("/api/voice/trial-check").then(async (res) => {
      const data = await res.json();
      setTimeLeft(data.data.availableVoiceSeconds);
    });
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRecording && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleStopRecording();
    }
    return () => clearInterval(timer);
  }, [isRecording, timeLeft]);

  useEffect(() => {
    if (!isOpen && isRecording) {
      handleStopRecording();
    }
  }, [isOpen]);

  const handleStartRecording = async () => {
    if (connectionRef.current) {
      console.warn("Connection already exists. Restarting...");
      await handleStopRecording();
    }

    const newConnection = new RTCPeerConnection();
    connectionRef.current = newConnection;

    await startRealtimeSession(
      newConnection,
      dataChannelRef,
      conversationHistoryRef
    );
    setIsRecording(true);
  };

  const handleStopRecording = async () => {
    if (connectionRef.current) {
      await stopRealtimeSession(
        connectionRef.current,
        dataChannelRef,
        conversationHistoryRef,
        timeLeft
      );
      connectionRef.current = null;
      dataChannelRef.current = null;
    }
    setIsRecording(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Try Our Voice Agent</DialogTitle>
          <DialogDescription>
            Experience a short demo of our human-like voice agent. Such agents
            can make phone calls, receive phone calls and perform a variety of
            voice related business tasks.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-6">
          <Button
            size="lg"
            className="h-24 w-24 rounded-full"
            onClick={handleStartRecording}
            disabled={isRecording}
          >
            <MicIcon className="!size-8" />
          </Button>
          {isRecording && (
            <div className="text-center">
              <p className="text-lg font-medium">
                Trial ends in {Math.floor(timeLeft / 60)}:
                {(timeLeft % 60).toString().padStart(2, "0")}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Meet with us to experience the depth of our AI agents.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
