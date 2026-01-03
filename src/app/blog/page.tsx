"use client"
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Weather Blogs
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <BlogCard
          title="Weather Today"
          description="Latest weather updates and forecast."
        />
        <BlogCard
          title="Rain Alerts"
          description="Stay safe with rain alerts."
        />
        <BlogCard
          title="Climate Change"
          description="Understanding climate change."
        />
      </div>
    </main>
  );
}
