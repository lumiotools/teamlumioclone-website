import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service - Lumio AI",
    description: "Read the terms of service for Lumio AI, including user responsibilities, payment terms, and more.",
    keywords: ["Lumio AI", "Terms of Service", "AI Services", "Privacy Policy"],
    authors: [{ name: "Lumio AI", url: "https://teamlumio.ai" }],
    openGraph: {
      title: "Terms of Service - Lumio AI",
      description: "Read the terms of service for Lumio AI, including user responsibilities, payment terms, and more.",
      url: "https://www.teamlumio.ai/terms-of-service",
      type: "website",
    },
};
  

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
