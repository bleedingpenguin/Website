import React from "react"
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';

import styles from './index.module.css';
import Layout from "../components/layout"

import particleOptions from '../../assets/particles.json';

const Blog = () => (
  <Layout>
    <div className={styles.outerContainer}>
      <div className={styles.container}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('<span style="color: var(--typeWritterTextColor)">Under Construction</span>')
            .start();
        }}
      />
      </div>
    </div>
    <Particles className={styles.particles} params={particleOptions} />
  </Layout>
)

export default Blog
