import { Card, CardContent } from "@/components/ui/card";

export function AboutUs() {
  const companies = [
    {
      name: "HP",
      logo: "/images/logos/HP logo.png",
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
      logo: "/images/logos/Microsoft logo.png",
    },
    {
      name:"Cornell University",
      logo:"/images/logos/Cornell logo.png"
    },{
      name: "Wisconsil University",
      logo: "/images/logos/Wisconsil logo.png"
    },{
      name: "IIT",
      logo: "/images/logos/IIT logo.png"
    },{
      name:"Cambridge",
      logo:"/images/logos/Cambridge logo.png"
    }
  ];

  const awards = [
    {
      name: "Forbes 30 Under 30",
      logo: "/images/logos/Forbes logo.png",
    },
    {
      name: "CES Innovation Award",
      logo: "/images/logos/CSE logo.png",
    },
  ];

  return (
    <section className="py-20 bg-accent/50" id="about">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Founded by Kush Jain and Ananth Subramanya, our team brings
              together expert engineers and strategists from top engineering
              institutions and leading tech giants such as Intuit, Cisco,
              Amazon, and Microsoft. We've been recognized by Forbes 30 Under 30
              and the CES Innovation Award for our groundbreaking AI solutions.
              Whether you need smarter operations, AI-powered customer
              interactions, or seamless integrations, we make AI accessible,
              practical, and built for growth.
            </p>
          </div>

          <Card className="bg-background mb-8">
            <CardContent className="p-8">
              <h3
                className="text-lg font-semibold mb-12 text-center"
              >
                Our Team's Experience
              </h3>
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
              >
                {companies.map((company, index) => (
                  <div
                    key={index}
                    // className="grayscale hover:grayscale-0 transition-all"
                    id={`a5w3y4_${index}`}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-10 object-contain"
                      id={`bbjzhn_${index}`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardContent className="p-8">
              <h3
                className="text-lg font-semibold mb-12 text-center"
              >
                Recognition & Awards
              </h3>
              <div
                className="flex flex-col md:flex-row gap-20 items-center justify-center"
              >
                {awards.map((award, index) => (
                  <div
                    key={index}
                    // className="grayscale hover:grayscale-0 transition-all"
                    id={`bo6cjo_${index}`}
                  >
                    <img
                      src={award.logo}
                      alt={award.name}
                      className="max-h-20 max-w-72 object-cover"
                      id={`s9l5h6_${index}`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
