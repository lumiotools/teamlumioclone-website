"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { VoiceAgentModal } from "@/components/home/voice-agent-modal";
import { motion } from "framer-motion";

export function Hero() {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden min-h-[calc(100vh-4rem)]"
    >
      <div className="container px-4 h-full flex items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col items-center text-center gap-12 max-w-4xl mx-auto">
          {/* <div
            className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <BoltIcon className="h-4 w-4" />
              <span className="font-medium">
                New Blog:
              </span>
            </span>
            <span className="ml-2">
              Transform Inbound with AI
            </span>
          </div> */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-primary">Custom AI Workers</span> for Small
            Businesses
          </h1>
          <p className="text-xl text-muted-foreground max-w-[42rem]">
            Experience what AI can do for your business. Our Custom Agents
            transform how work happens and we provide a guaranteed ROI on all
            deployments.
          </p>
          <div className="flex flex-col items-center gap-4 w-full">
            <Button size="lg" className="w-[200px]">
              Get A Free AI Audit
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Button>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Get a Free AI Audit
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Ask Our AI Any Questions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => setIsVoiceModalOpen(true)}
              >
                Try Our Voice Agent
              </Button>
            </div> */}
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex -space-x-2">
              {[
                "/images/Jeff Hammerberg.avif",
                "/images/Mosa.avif",
                "/images/Timesh Paloma.jpg",
                "/images/Real estate company in dubai.avif",
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="User"
                  className="h-8 w-8 rounded-full border-2 border-background"
                  id={`6vjmxw_${index}`}
                />
              ))}
            </div>
            <div className="text-left">
              <p className="font-medium">Join the dozens of businesses</p>
              <p className="text-muted-foreground">that trust Lumio AI</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        ></div>
      </div> */}
      <VoiceAgentModal
        isOpen={isVoiceModalOpen}
        setIsOpen={setIsVoiceModalOpen}
      />
    </motion.div>
  );
}
