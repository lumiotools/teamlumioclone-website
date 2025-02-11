import { AboutUs } from "@/components/home/about-us";
import { Benefits } from "@/components/home/benefits";
import ChatBot from "@/components/home/chat-bot";
import { CTA } from "@/components/home/cta";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Newsletter } from "@/components/home/newsletter";
import { TechPlatforms } from "@/components/home/tech-platforms";
import { Testimonials } from "@/components/home/testimonials";
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
