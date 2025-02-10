"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GoHome, GoProjectRoadmap, GoBookmark, GoPerson } from "react-icons/go";

export default function Header() {
  const [time, setTime] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const updateTehranTime = () => {
      const formatter = new Intl.DateTimeFormat("en-IR", {
        timeZone: "Asia/Tehran",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formatter.format(new Date()));
    };

    updateTehranTime();
    const interval = setInterval(updateTehranTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.zone}>Tehran, Iran</div>

      <nav className={styles.nav}>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>
          <GoHome /> Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? styles.active : ""}
        >
          <GoPerson /> About
        </Link>
        <Link
          href="/projects"
          className={pathname === "/projects" ? styles.active : ""}
        >
          <GoProjectRoadmap /> Projects
        </Link>
        <Link
          href="/blog"
          className={pathname === "/blog" ? styles.active : ""}
        >
          <GoBookmark /> Blog
        </Link>
      </nav>

      <div className={styles.time}>{time}</div>
    </header>
  );
}
