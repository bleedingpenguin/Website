import React from "react"
import { Link } from "gatsby"

import styles from "./links.module.css"
import BlogDark from "../../assets/icons/blog_dark.svg"
import ResumeDark from "../../assets/icons/resume_dark.svg"
import Resume from "../../assets/resume.pdf"
import ThemeToggler from "../components/themeToggler"

export default () => (
  <div className={styles.links}>
    <a href={Resume}>
      <ResumeDark alt="resume icon" />
    </a>
    <Link to="/blog/">
      <BlogDark alt="blog icon" />
    </Link>
    <ThemeToggler />
  </div>
)
