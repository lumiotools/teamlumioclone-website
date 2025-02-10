import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The Lumio team has been incredibly helpful. They took the time to go deep and understand our business requirements. Our project lead was clearly an expert in his domain and was incredibly professional and good at communicating. I'm happy to recommend Lumio to others!",
      author: "Abhiudai Mishra",
      position: "CEO",
      company: "Mosa",
      image: "/images/Mosa.avif",
    },
    {
      quote:
        "Our use case required a very nuanced and complex solution. We tried engaging with multiple vendors but were not able to get our desired results. We were very happy with Lumio because they were able to build upon the work of our previous vendors and get a comprehensive solution up and running on a relatively short timeline.",
      author: "",
      position: "",
      company: "A real estate company in Dubai",
      image: "/images/Real estate company in dubai.avif",
    },
    {
      quote:
        "It's difficult to find a reliable technology partner but Lumio is an exception. Ananth and his team were very proactive and fast. They delivered our solution in ~50 days which was ahead of schedule!",
      author: "Timesh P.",
      position: "Head of Sales",
      company: "Paloma Realty",
      image: "/images/Timesh Paloma.jpg",
    },
    {
      quote:
        "These guys are good - really sharp and understand complex business nuances, which is important in logistics. They are 100x engineers and know how to deliver silly good solutions fast.",
      author: "",
      position: "",
      company: "A shipping company based in California",
      image: "/images/Real estate company in dubai.avif",
    },
    {
      quote:
        "Kush was an absolute pleasure to work with. They were quick to respond, clear in their communication and demonstrated great technical ability. They went above and beyond with my project and delivered on all of their promises. I look forward to working with Lumio again.",
      author: "Jeff Hammerberg",
      position: "Founder & President",
      company: "Hammerberg & Associates, Inc.",
      image: "/images/Jeff Hammerberg.avif",
    },
    {
      quote:
        "They just get it done! Simple, easy to work with, and fast. They broke down complex AI terms into simple language and made us feel completely involved. They understood our problems instantly and quickly iterated on feedback we gave them. We've already begun our second project with Lumio!",
      author: "",
      position: "",
      company: "Financial Services Company in South Korea",
      image:  "/images/Real estate company in dubai.avif",
    },
  ];

  return (
    <section className="py-20 bg-accent/50" id="testimonials">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Trusted by Small to Medium Sized Businesses like Yours
          </h2>
          <p className="text-lg text-muted-foreground">
            See how businesses across industries are leveraging our AI solutions
            to transform their operations and drive growth
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background flex flex-col h-full">
            <CardContent className="pt-6 flex flex-col h-full">
              <div className="flex flex-col flex-grow">
                <p className="text-lg mb-6">&quot;{testimonial.quote}&quot;</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author || testimonial.company}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  {testimonial.author && <p className="font-semibold">{testimonial.author}</p>}
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position && `${testimonial.position}, `}
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
