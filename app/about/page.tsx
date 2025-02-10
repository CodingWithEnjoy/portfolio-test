"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MdOutlineLanguage, MdOutlineCall } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import projects from "../projects/projects.json";
import { EffectFade, Autoplay } from "swiper/modules";
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

export default function About() {
  const limitedProjects = projects.slice(0, 3);

  return (
    <>
      <Header />

      <div className={styles.about}>
        <div className={styles.aboutSidebar}>
          <Image
            src={"/img/profile.jpeg"}
            alt={"Profile Image"}
            width={200}
            height={200}
          />

          <div className={styles.aboutSidebarLang}>
            <MdOutlineLanguage size={30} fill={"#fd6325"} />
            <span>English</span> <span>Persian</span>
          </div>

          <div className={styles.aboutSections}>
            <Link href="#intro">- Introduction</Link>
            <Link href="#about">- About Me</Link>
            <Link href="#skills">- Technical Skills</Link>
            <Link href="#projects">- Experience</Link>
          </div>
        </div>

        <div className={styles.aboutInfo}>
          <Link href="" className={styles.callMe}>
            <MdOutlineCall fill={"#08a97c"} /> Call Me
          </Link>

          <div id={"intro"} className={styles.aboutName}>
            <h1>Mohammad Eslami</h1>
            <p>Back-End Programmer</p>

            <div className={styles.aboutNameLinks}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn /> Linkedin
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane /> Telegram
              </a>
            </div>
          </div>

          <p id={"about"}>
            Hello, I'm Mohammad, a passionate Back-End Developer with over two
            years of experience in designing and developing web applications and
            founder at Ninjalearn. My focus is on creating scalable and
            efficient back-end solutions using cutting-edge technologies. I have
            a strong passion for coding and continuously seek to improve my
            knowledge and skills.
          </p>

          <p>
            I specialize in Python and have extensive experience working with
            the Django framework. My expertise in Python has enabled me to work
            on a variety of projects, from web applications to automating tasks
            and managing complex data workflows. Over the years, I’ve become
            proficient in various aspects of back-end development, including API
            design, database management, and task automation.
          </p>

          <div className={styles.aboutSkills} id={"skills"}>
            <span>Back-End Web Development</span>
            <span>Django</span>
            <span>Django REST Framework</span>
            <span>Django REST API</span>
            <span>Python (Programming Language) </span>
          </div>

          <div className={styles.aboutProjects} id={"projects"}>
            {limitedProjects.map((project) => (
              <div key={project.id} className={styles.aboutProject}>
                <div>
                  {project.images.length > 1 ? (
                    <Swiper
                      className={styles.swiper}
                      spaceBetween={10}
                      slidesPerView={1}
                      effect={"fade"}
                      modules={[EffectFade, Autoplay]}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      speed={700}
                    >
                      {project.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={`/projects/${image}`}
                            alt={`${project.title} Image ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <img
                      src={`/projects/${project.images[0]}`}
                      alt={`${project.title} Image`}
                      className={styles.aboutProjectImg}
                    />
                  )}
                </div>

                <div className={styles.aboutProjectInfo}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
