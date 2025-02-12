"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { LoaderCircle, MailIcon } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   

    setLoading(true);

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    if(!email){
      toast({
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const response = await (
      await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();

    if (!response.success) {
      toast({
        description: response.message,
        variant: "destructive",
      });
    } else {
      toast({
        description: response.message,
      });
      form.reset();
    }
    setLoading(false);
  };
  return (
    <section className="py-20 bg-accent/50" id="newsletter">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center gap-4">
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
              className="p-3 rounded-full bg-primary/10"
            >
              <MailIcon className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.h2
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
              className="text-3xl font-bold tracking-tight"
            >
              Stay Updated with Lumio AI
            </motion.h2>
            <motion.p
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
              className="text-lg text-muted-foreground"
            >
              Subscribe to our newsletter for the latest updates, AI insights,
              and exclusive content.
            </motion.p>
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
              className="w-full max-w-md mt-4"
            >
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={handleSubscribe}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />

                <Button
                  type="submit"
                  className="whitespace-nowrap w-32"
                  disabled={loading }
                >
                  {loading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
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
