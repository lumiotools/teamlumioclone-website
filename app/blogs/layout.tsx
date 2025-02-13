import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lumio AI Blog: Insights into AI Innovations and Applications",
    description: "Stay updated with Lumio AI's blog, featuring articles on the latest trends, success stories, and insights into AI innovations and their applications in various industries.",
    keywords: ["AI blog", "AI innovations", "AI applications", "Lumio AI insights", "AI industry trends"],
    authors: [{ name: "Lumio AI", url: "https://www.teamlumio.ai" }],
    openGraph: {
      title: "Lumio AI Blog: Insights into AI Innovations and Applications",
      description: "Stay updated with Lumio AI's blog, featuring articles on the latest trends, success stories, and insights into AI innovations and their applications in various industries.",
      url: "https://www.teamlumio.ai/blogs",
      type: "website",
    },
};
  

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
