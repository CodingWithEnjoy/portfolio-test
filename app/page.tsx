import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoArrowForward } from "react-icons/io5";
import { getAllPosts, PostMetadata } from "../lib/posts";
import projects from "./projects/projects.json";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const posts: PostMetadata[] = getAllPosts();
  const latestPost = posts[0];
  const limitedProjects = projects.slice(0, 2);

  return (
    <>
      <Header />

      <div className={styles.hero}>
        <div className="heroImg">
          <Image
            src={"/img/profile.jpeg"}
            width={250}
            height={250}
            alt={"Profile"}
          />
        </div>

        <div className={styles.heroInfo}>
          <h1>Hi, I'm Mohammad 👋</h1>
          <p>
            I am a back-end developer known for my expertise in creating
            efficient server-side logic and databases. My problem-solving skills
            and tech-savvy nature make me a valuable team member.
          </p>

          <Link href="/about">
            About Me <IoArrowForward />
          </Link>
        </div>
      </div>

      {latestPost && (
        <div className={styles.latestBlog}>
          <h2>Latest from the blog</h2>

          <div className={styles.blog}>
            <Image
              width={350}
              height={200}
              src={latestPost.cover}
              alt={latestPost.title}
            />

            <div className={styles.blogInfo}>
              <Link href={`/blog/${latestPost.slug}`}>
                <h3>{latestPost.title}</h3>
              </Link>

              <small>{new Date(latestPost.date).toDateString()}</small>

              <p className={styles.blogTag}>{latestPost.tag}</p>
            </div>
          </div>
        </div>
      )}

      <div className={styles.projects}>
        <h2>Recent Projects</h2>

        <div className={styles.projectList}>
          {limitedProjects.map((project) => (
            <div key={project.id} className={styles.project}>
              <img
                src={`/projects/${project.images[0]}`}
                alt={project.title}
                className={styles.projectImage}
              />

              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <FaGithub /> GitHub Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.subscribe}>
        <h2>Subscribe to Newsletter</h2>

        <p>
          I occasionally write about programming, technology, and share thoughts
          on the intersection of creativity and engineering.
        </p>

        <form action="">
          <input type="text" placeholder="Email" />
          <button>Submit</button>
        </form>
      </div>

      <Footer />
    </>
  );
}
