"use client";
import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Correct the import

export function AboutUs() {
  const companies = [
    {
      name: "HP",
      logo: "/images/logos/hp.png",
    },
    {
      name: "Intuit",
      logo: "/images/logos/Intuit logo2.png",
    },
    {
      name: "Cisco",
      logo: "/images/logos/Cisco logo.png",
    },
    {
      name: "Microsoft",
      logo: "/images/logos/Microsoft-Logo.png",
    },
    {
      name: "Amazon",
      logo: "/images/logos/amazon.webp",
    },
    {
      name: "Cornell University",
      logo: "/images/logos/Cornell logo.png",
    },
    {
      name: "Wisconsil University",
      logo: "/images/logos/Wisconsil logo.png",
    },
    {
      name: "IIT",
      logo: "/images/logos/iit.png",
    },
    {
      name: "Cambridge",
      logo: "/images/logos/Cambridge logo.png",
    },
    {
      name: "Harvard",
      logo: "/images/logos/harvard.png",
    },
  ];

  const awards = [
    {
      name: "Forbes 30 Under 30",
      logo: "/images/logos/Forbes logo.png",
      className: "py-6",
    },
    {
      name: "CES Innovation Award",
      logo: "/images/logos/CSE logo.png",
    },
    {
      name: "Business Standard",
      logo: "/images/logos/business-standard.png",
    },
    {
      name: "Deccan Herald",
      logo: "/images/logos/Deccan Herald.png",
      className: "invert py-4",
    },
    {
      name: "Housing Wire",
      logo: "/images/logos/housing wire.svg",
    },
    {
      name: "New Atlas",
      logo: "/images/logos/new atlas.svg",
      className: "w-full h-[32px]",
    },
    {
      name: "Wowtale",
      logo: "/images/logos/wowtale.png",
      className: "",
    },
    {
      name: "Yahoo",
      logo: "/images/logos/yahoo.png",
    },
  ];

  const scrollCompanies = [...companies, ...companies];

  return (
    <section className="py-20 bg-accent/50" id="about">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Founded by Kush Jain and Ananth Subramanya, our team brings
              together expert engineers and strategists from top engineering
              institutions and leading tech giants such as Intuit, Cisco,
              Amazon, and Microsoft. We&apos;ve been recognized by Forbes 30
              Under 30 and CES Innovation Award for our groundbreaking AI
              solutions. Whether you need smarter operations, AI-powered
              customer interactions, or seamless integrations, we make AI
              accessible, practical, and built for growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Card className="bg-background mb-8">
              <CardContent className="p-8 overflow-hidden relative">
                <div className="rounded-xl absolute top-0 left-0 w-full h-full z-10 overflow-hidden flex justify-between">
                  <div className="w-32 h-full bg-gradient-to-r from-white to-transparent" />
                  <div className="w-32 h-full bg-gradient-to-l from-white to-transparent" />
                </div>
                <h3 className="text-lg font-semibold mb-8 text-center">
                  Our Team&apos;s Experience
                </h3>
                <div className="relative w-full">
                  <div
                    className="flex w-max animate-scroll"
                    style={{
                      animationDuration: "20s",
                      animationTimingFunction: "linear",
                      animationIterationCount: "infinite",
                    }}
                  >
                    {scrollCompanies.map((company, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 flex justify-center items-center px-8"
                        id={`a5w3y4_${index}`}
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-h-12 max-w-40 object-contain"
                          id={`bbjzhn_${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Card className="bg-background">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-6 text-center">
                  Recognition & Awards
                </h3>
                <div className="flex flex-wrap  gap-10 gap-y-4 items-center justify-center">
                  {awards.map((award, index) => (
                    <div
                      key={index}
                      // className="grayscale hover:grayscale-0 transition-all"
                      id={`bo6cjo_${index}`}
                    >
                      <img
                        src={award.logo}
                        alt={award.name}
                        className={cn(
                          "max-h-20 max-w-40 object-cover",
                          award.className
                        )}
                        id={`s9l5h6_${index}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
