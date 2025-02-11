"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 bg-accent/50" id="newsletter">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center gap-4">
            <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }} className="p-3 rounded-full bg-primary/10">
              <MailIcon className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }} className="text-3xl font-bold tracking-tight">
              Stay Updated with Lumio AI
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }} className="text-lg text-muted-foreground">
              Subscribe to our newsletter for the latest updates, AI insights,
              and exclusive content.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }} className="w-full max-w-md mt-4">
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />

                <Button type="submit" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
