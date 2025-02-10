"use client";

import styles from "./footer.module.css";
import Link from "next/link";
import React from "react";
import { FaGithub, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {currentYear}{" "}
        <Link href="/">
          <strong>Mohammad Eslami </strong>
        </Link>
        - All rights reserved
      </p>

      <div className={styles.footerLinks}>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={20} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane size={20} />
        </a>
      </div>
    </footer>
  );
}
