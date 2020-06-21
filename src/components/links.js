import React from 'react'

import styles from './links.module.css'
import BlogDark from "../../assets/icons/blog_dark.svg";
import ResumeDark from "../../assets/icons/resume_dark.svg";
import ThemeToggler from '../components/themeToggler'

export default () => (
  <div className={styles.links}>
      <ResumeDark alt="resume icon" />
      <BlogDark alt="blog icon" />
      <ThemeToggler />
  </div>
)
