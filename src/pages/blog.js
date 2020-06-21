import React from "react"
import Particles from "react-particles-js"
import Typewriter from "typewriter-effect"

import styles from "./index.module.css"
import Layout from "../components/layout"

import particleOptions from "../../assets/particles.json"
import { Link } from "gatsby"

const Blog = () => (
  <Layout>
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Link to="/">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString(
                  '<span style="color: var(--typeWritterTextColor)">Under Construction, click to go back</span>'
                )
                .start()
            }}
          />
        </Link>
      </div>
    </div>
    <Particles className={styles.particles} params={particleOptions} />
  </Layout>
)

export default Blog
