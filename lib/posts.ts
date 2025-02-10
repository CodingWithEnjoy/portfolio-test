import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMetadata = {
  slug: string;
  title: string;
  cover: string;
  date: string;
  tag: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "app/blog/posts");

export function getAllPosts(): PostMetadata[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(".mdx", ""),
        ...(data as Omit<PostMetadata, "slug" | "content">),
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
