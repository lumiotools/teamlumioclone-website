import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Lumio AI: Careers in Innovative AI Solutions",
  description:
    "Explore career opportunities at Lumio AI and be part of a team that's shaping the future with innovative AI solutions for businesses worldwide.",
  keywords: [
    "Lumio AI careers",
    "AI job opportunities",
    "work in AI innovation",
    "join Lumio AI",
    "AI solution careers",
  ],
  authors: [{ name: "Lumio AI", url: "https://www.teamlumio.ai" }],
  openGraph: {
    title: "Join Lumio AI: Careers in Innovative AI Solutions",
    description:
      "Explore career opportunities at Lumio AI and be part of a team that's shaping the future with innovative AI solutions for businesses worldwide.",
    url: "https://www.teamlumio.ai/careers",
    type: "website",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
