"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      <article className="container px-4 py-20">
        {/* Back to Blogs Button */}
        <Button
          variant="ghost"
          className="mb-8 group hover:bg-transparent"
          // onClick={() => setSelectedBlogId(null)}
        >
          <ArrowLeftIcon
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          />
          <span
            className="text-sm font-medium transition-colors group-hover:text-primary"
          >
            Back to All Blogs
          </span>
        </Button>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-center"
          >
            Acumatica Summit AI: Revolutionizing ERP with Intelligent Solutions
          </h1>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] mb-12">
            <Image
              src="https://picsum.photos/seed/acumatica/1200/800"
              alt="Acumatica Summit AI"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Introduction */}
          <p className="text-lg text-muted-foreground mb-12">
            The business world is evolving, and the tools you use to manage your
            operations need to evolve with it. If you&apos;re attending or exploring
            insights from Acumatica Summit, it&apos;s time to discover how Artificial
            Intelligence (AI) can transform your ERP experience. Imagine
            streamlining your workflows, automating repetitive tasks, and making
            data-driven decisions faster than ever before. This is the future of
            business management—and it&apos;s already here.
          </p>

          {/* Main Content */}
          <section className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                What Can AI Do for Acumatica Users?
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Collections & AR Follow-Up AI:
                  </h3>
                  <p className="text-muted-foreground">
                    Tired of chasing overdue invoices? Our AI solution
                    integrates seamlessly with Acumatica&apos;s AR data to automate
                    reminders, schedule calls, adjust payment terms, and
                    escalate issues when needed. Spend less time on follow-ups
                    and more on growing your business.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Sales Pipeline & Lead Engagement:
                  </h3>
                  <p className="text-muted-foreground">
                    Let AI handle inbound leads. From qualifying prospects to
                    scheduling follow-up tasks, our AI-powered sales assistant
                    keeps your pipeline moving so your team can focus on closing
                    deals. Integration with Acumatica&apos;s CRM ensures no
                    opportunity slips through the cracks.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Invoice Processing Co-Pilot:
                  </h3>
                  <p className="text-muted-foreground">
                    Reduce manual data entry and error rates. Our AI co-pilot
                    scans, validates, and matches invoices to purchase orders
                    within Acumatica. It even flags inconsistencies for human
                    review and learns from each interaction to improve accuracy
                    over time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Proactive Inventory Management:
                  </h3>
                  <p className="text-muted-foreground">
                    Never worry about stockouts or overstock again. Our AI agent
                    monitors stock levels, demand trends, and supplier
                    performance to autonomously generate purchase orders or send
                    reorder alerts. Stay ahead with predictive inventory
                    insights.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <strong>Efficiency:</strong> Automate mundane
                  tasks and free up valuable time for strategic planning.
                </li>
                <li>
                  <strong>Accuracy:</strong> Eliminate errors and
                  make informed decisions with real-time data.
                </li>
                <li>
                  <strong>Scalability:</strong> Adapt quickly to
                  changing business needs with flexible AI solutions.
                </li>
                <li>
                  <strong>Cost Savings:</strong> Optimize processes
                  to reduce operational expenses and increase ROI.
                </li>
                <li>
                  <strong>Acumatica Summit AI:</strong> Your Key to
                  Future-Ready ERP.
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg mb-8">
                Whether you&apos;re attending Acumatica Summit 2025 or searching for
                innovative ways to enhance your ERP, AI solutions tailored for
                Acumatica can redefine how you work. From collections automation
                to proactive inventory management, we provide powerful tools to
                empower your business.
              </p>

              <div className="flex justify-center">
                <Button size="lg" className="rounded-full">
                  Book a Free Consultation
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
