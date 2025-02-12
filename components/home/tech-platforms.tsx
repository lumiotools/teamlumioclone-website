"use client"
import { cn } from '@/lib/utils';
import {motion} from 'framer-motion'
export function TechPlatforms() {
  const platforms = [
    {
      name: "OpenAI",
      logo: "/images/logos/Chatgpt.png",
    },
    {
      name: "AWS",
      logo: "/images/logos/aws.png",
    },
    {
      name: "Google Cloud",
      logo: "/images/logos/Cloud.png",
    },
    {
      name: "Azure",
      logo: "/images/logos/groq.png",
    },
    {
      name: "Langchain",
      logo: "/images/logos/Langchain.png",
    },
    {
      name: "LLama",
      logo: "/images/logos/LLaMA-Meta.png",
    },
    {
      name: "LLamaIndex",
      logo: "/images/logos/llamaindex2.png",
    },
    {
      name: "Together.ai",
      logo: "/images/logos/Together.ai.png",
    },
    {
      name:"Anthropic",
      logo:"/images/logos/anthropic.webp"
    },
    {
      name:"Anyscale",
      logo:"/images/logos/anyscale.png",
      className: 'px-2 w-32'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Industry Leading Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage only industry leading technology tools and
            infrastructure that work best for your specific use case.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center"
        >
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="hover:grayscale-0 transition-all"
              id={`ft3wx3_${index}`}
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className={cn("h-16 w-16 sm:h-24 sm:w-24 object-contain", platform.className)}
                id={`mmq6p2_${index}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
