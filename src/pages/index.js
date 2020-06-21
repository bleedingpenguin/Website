import React from "react"
import Particles from 'react-particles-js';

import styles from './index.module.css';
import Layout from "../components/layout"
// import Image from "../components/image"
import About from '../components/about'
import Links from '../components/links'
import SEO from "../components/seo"

import particleOptions from '../../assets/particles.json';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <About />
        <Links />
      </div>
    </div>
    <Particles className={styles.particles} params={particleOptions} />
  </Layout>
)

export default IndexPage
