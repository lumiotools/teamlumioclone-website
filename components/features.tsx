"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  ChevronRight,
  Cpu,
  Headphones,
  LineChart,
  Users,
} from "lucide-react";
import { VoiceAgentModal } from "@/components/voice-agent-modal";

export function Features() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  const aiCapabilities = [
    {
      icon: Headphones,
      title: "Customer Interaction",
      examples: [
        "Handle support calls 24/7",
        "Process customer inquiries",
        "Manage email communications",
      ],
    },
    {
      icon: LineChart,
      title: "Business Operations",
      examples: [
        "Process invoices & documents",
        "Generate reports & analysis",
        "Manage compliance tasks",
      ],
    },
    {
      icon: Users,
      title: "Team Support",
      examples: [
        "Schedule meetings & follow-ups",
        "Handle HR processes",
        "Coordinate team activities",
      ],
    },
    {
      icon: Cpu,
      title: "Technical Tasks",
      examples: [
        "Data entry & validation",
        "System monitoring",
        "Technical support",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background" id="features">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Intelligent Automation
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Your Business Process,
            <span className="text-primary">
              {" "}
              Our AI Solution
            </span>
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Describe your company&apos;s unique workflows and challenges, and we&apos;ll
            develop a custom AI agent that perfectly matches your operational
            needs.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {aiCapabilities.map((capability, index) => (
            <Card
              key={index}
              className="transition-all cursor-pointer bg-gradient-to-br from-background to-primary/5"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              id={`ms4f1p_${index}`}
            >
              <CardContent className="p-6" id={`qj8l5m_${index}`}>
                <div
                  className="flex items-center gap-4 mb-4"
                  id={`j0djai_${index}`}
                >
                  <div
                    className="rounded-full p-3 bg-primary/10"
                    id={`nzx4bv_${index}`}
                  >
                    <capability.icon
                      className="h-6 w-6 text-primary"
                      id={`v03d0i_${index}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold" id={`mq28jw_${index}`}>
                    {capability.title}
                  </h3>
                  <ChevronRight
                    className={`ml-auto h-5 w-5 transition-transform ${
                      expandedIndex === index ? "rotate-90" : ""
                    }`}
                    id={`w2zd6v_${index}`}
                  />
                </div>
                <div
                  className={`grid transition-all ${
                    expandedIndex === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                  id={`ji0j47_${index}`}
                >
                  <div className="overflow-hidden" id={`7oip9j_${index}`}>
                    <ul
                      className="space-y-2 text-muted-foreground"
                      id={`gafjyt_${index}`}
                    >
                      {capability.examples.map((example, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2"
                          id={`msm9av_${index}`}
                        >
                          <Brain
                            className="h-4 w-4 text-primary"
                            id={`4tevvg_${index}`}
                          />

                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              Learn About What&apos;s Possible
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              onClick={() => setIsVoiceModalOpen(true)}
            >
              Try Our Voice Agent
            </Button>
          </div>
        </div>
      </div>
      <VoiceAgentModal
        isOpen={isVoiceModalOpen}
        setIsOpen={setIsVoiceModalOpen}
      />
    </section>
  );
}
