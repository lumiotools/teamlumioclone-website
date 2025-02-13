import { Metadata } from 'next';
import { blogPosts } from '@/constants/blog-data';  // Assuming you have a list of blog posts

type Props = {
    params: Promise<{ blogId: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { blogId } = await params; // Destructure to get blogId
  const id = Number(blogId);  // Convert to a number

  console.log("Layout", id);

  // Validate blogId
  if (isNaN(id)) {
    throw new Error("Invalid blogId: must be a number.");
  }

  // Find the blog post based on the ID
  const post = blogPosts.find((post) => post.id === id);

  console.log(post);

  // Dynamically setting metadata for the specific blog post
  if (!post) {
    // Handle the case where the post is not found
    return {
      title: "Blog Not Found - Lumio AI Blog",
      description: "The requested blog post could not be found.",
      keywords: ["Blog Not Found", "Lumio AI"],
      authors: [{ name: "Lumio AI", url: "https://teamlumio.ai" }],
      openGraph: {
        title: "Blog Not Found - Lumio AI Blog",
        description: "The requested blog post could not be found.",
        url: `https://teamlumio.ai/blogs/${id}`,
        type: "article",
        images: [],  // No image available
      },
    };
  }

  // Dynamically set metadata for the specific blog post
  return {
    title: `${post.title} - Lumio AI Blog`,
    description: post.description || "Read more about Lumio AI's innovative AI solutions and insights.",
    keywords: [post.category, "AI blog", "Lumio AI"],  // Customize with keywords from the post
    authors: [{ name: "Lumio AI", url: "https://teamlumio.ai" }],
    openGraph: {
      title: `${post.title} - Lumio AI Blog`,
      description: post.description || "Read more about Lumio AI's innovative AI solutions and insights.",
      url: `https://teamlumio.ai/blogs/${post.id}`,
      type: "article",
      images: post.image ? [post.image] : [],  // Handle the case where post.image is empty
    },
  };
}


export default function BlogsIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
