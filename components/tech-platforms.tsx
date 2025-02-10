import { Card, CardContent } from "@/components/ui/card";

export function TechPlatforms() {
  const platforms = [
    {
      name: "OpenAI",
      logo: "https://picsum.photos/seed/openai/120/40",
    },
    {
      name: "AWS",
      logo: "https://picsum.photos/seed/aws/120/40",
    },
    {
      name: "Google Cloud",
      logo: "https://picsum.photos/seed/google/120/40",
    },
    {
      name: "Azure",
      logo: "https://picsum.photos/seed/azure/120/40",
    },
    {
      name: "Anthropic",
      logo: "https://picsum.photos/seed/anthropic/120/40",
    },
    {
      name: "HuggingFace",
      logo: "https://picsum.photos/seed/huggingface/120/40",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Industry Leading Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage only industry leading technology tools and
            infrastructure that work best for your specific use case
          </p>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all"
              id={`ft3wx3_${index}`}
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-8 object-contain"
                id={`mmq6p2_${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
