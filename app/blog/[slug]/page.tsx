import { notFound } from "next/navigation";
import { getAllPosts } from "../../../lib/posts";
import ReactMarkdown from "react-markdown";
import styles from "./page.module.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

interface PostProps {
  params: Promise<{ slug: string }>;
}

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

const Post: React.FC<PostProps> = async ({ params }) => {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />

      <div className={styles.blogBody}>
        <Link className={styles.backBtn} href="/blog">
          <IoArrowBack /> Back
        </Link>

        <h1
          style={{
            backgroundImage: `linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 84%)), url(${post.cover})`,
          }}
        >
          {post.title}
          <small>{new Date(post.date).toDateString()}</small>
        </h1>

        <div className={styles.blogContent}>
          <ReactMarkdown
            children={post.content}
            components={{
              code({ inline, className, children, ...props }: CodeProps) {
                const language = className
                  ? className.replace("language-", "")
                  : "python";

                const highlighted = hljs.highlight(
                  language,
                  String(children)
                ).value;

                return inline ? (
                  <code className={className} {...props}>
                    {children}
                  </code>
                ) : (
                  <code
                    className={`hljs ${language}`}
                    dangerouslySetInnerHTML={{ __html: highlighted || "" }}
                  />
                );
              },
            }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Post;
