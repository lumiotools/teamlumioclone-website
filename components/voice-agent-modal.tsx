"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MicIcon } from "lucide-react";

export function VoiceAgentModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRecording && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording, timeLeft]);

  const handleStartRecording = () => {
    setIsRecording(true);
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
            disabled={isRecording && timeLeft === 0}
          >
            <MicIcon className="h-12 w-12" />
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
