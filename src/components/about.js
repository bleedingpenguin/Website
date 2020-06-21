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
            '<span style="color: var(--typeWritterTextColor)">I am a software engineer</span>',
            '<span style="color: var(--typeWritterTextColor)">I am a iOS developer</span>'
          ],
          autoStart: true,
          loop: true,
          delay: 50,
        }}
      />
    </div>
    <p style={{color: 'var(--textColor)'}}>{"}"}</p>
    </div>
  </div>
)
