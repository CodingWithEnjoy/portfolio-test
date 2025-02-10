"use client";

import { useEffect, useState } from "react";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsLinkHovered(true);
    const handleMouseLeave = () => setIsLinkHovered(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`${styles.cursor} ${isLinkHovered ? styles.enlarged : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <span className={styles.outline}></span>
      <span className={styles.outline}></span>
      <span className={styles.outline}></span>
    </div>
  );
};

export default CustomCursor;
