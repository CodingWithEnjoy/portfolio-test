"use client";

import styles from "./page.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import projects from "../projects/projects.json";
import { EffectFade, Autoplay } from "swiper/modules";
import { FaGithub } from "react-icons/fa";

export default function About() {
  const limitedProjects = projects.slice(0, 300);

  return (
    <>
      <Header />

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
                  className={styles.aboutProjectImg}
                  src={`/projects/${project.images[0]}`}
                  alt={`${project.title} Image`}
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

      <Footer />
    </>
  );
}
