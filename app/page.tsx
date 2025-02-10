import { AboutUs } from "@/components/about-us";
import { Benefits } from "@/components/benefits";
import ChatBot from "@/components/chat-bot";
import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Newsletter } from "@/components/newsletter";
import { TechPlatforms } from "@/components/tech-platforms";
import { Testimonials } from "@/components/testimonials";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <Features />
      <AboutUs />
      <Benefits />
      <TechPlatforms />
      <HowItWorks />
      <Newsletter />
      <CTA />
      <ChatBot/>
    </>
  );
};

export default HomePage;
