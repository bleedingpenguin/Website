import React from 'react'
import styles from './about.module.css'
import Typewriter from 'typewriter-effect';

export default () => (
  <div className={styles.container}>
    <p
      style={{color: 'var(--textColor)'}}
      className={styles.headline}
    >
      Umam Maulana
    </p>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <p style={{color: 'var(--textColor)'}}>{"{"}</p>
    <div className={styles.typewriterWrapper}>
      <Typewriter
        style={{color: 'red'}}
        options={{
          wrapperClassName: 'asdf',
          strings: [
            '<span style="color: var(--typeWritterTextColor)">A Software Engineer</span>',
            '<span style="color: var(--typeWritterTextColor)">An IOS Developer</span>',
            '<span style="color: var(--typeWritterTextColor)">A Web Developer</span>',
            '<span style="color: var(--typeWritterTextColor)">A React Native Developer</span>'
          ],
          autoStart: true,
          loop: true,
          delay: 60,
        }}
      />
    </div>
    <p style={{color: 'var(--textColor)'}}>{"}"}</p>
    </div>
  </div>
)
