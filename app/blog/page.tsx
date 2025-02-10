import { getAllPosts, PostMetadata } from "../../lib/posts";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

type BlogProps = {
  posts: PostMetadata[];
};

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <>
      <Header />

      <div className={styles.blogs}>
        {posts.map((post) => (
          <div key={post.slug} className={styles.blog}>
            <Image width={300} height={180} src={post.cover} alt={post.title} />

            <div className={styles.blogInfo}>
              <Link href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>

              <small>{new Date(post.date).toDateString()}</small>

              <p className={styles.blogTag}>{post.tag}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default async function Page() {
  const posts = getAllPosts();
  return <Blog posts={posts} />;
}
