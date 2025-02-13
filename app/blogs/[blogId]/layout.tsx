import { Metadata } from 'next';
import { blogPosts } from '@/constants/blog-data';  // Assuming you have a list of blog posts

export async function generateMetadata(params: { params: { blogId: string } }): Promise<Metadata> {
    const blogId = Number(params.params.blogId);  // Extract blog ID from URL params
    console.log("Layout", blogId);

    // Find the blog post based on the ID
    const post = blogPosts.find((post) => post.id === blogId);
    
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
                url: `https://teamlumio.ai/blogs/${blogId}`,
                type: "article",
                images: "",  // No image available
            },
        };
    }

    return {
        title: `${post.title} - Lumio AI Blog`,
        description: post.content || "Read more about Lumio AI's innovative AI solutions and insights.",
        keywords: [post.category, "AI blog", "Lumio AI"],  // Customize with keywords from the post
        authors: [{ name: "Lumio AI", url: "https://teamlumio.ai" }],
        openGraph: {
            title: `${post.title} - Lumio AI Blog`,
            description: post.content || "Read more about Lumio AI's innovative AI solutions and insights.",
            url: `https://teamlumio.ai/blogs/${post.id}`,  // Use post.id instead of post.blogId
            type: "article",
            images: post.image || "",  // Assuming the post has an image field, provide a fallback
        },
    };
}

export default function BlogsIdLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
