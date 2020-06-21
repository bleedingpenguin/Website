import React from "react"

const Footer = () => (
  <footer
    style={{
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: "32px"
    }}
  >
    <span style={{ color: 'var(--textColor)', fontSize: '12px' }}>
      <a href="mailto:umam2r84@gmail.com">umam2r84@gmail.com</a>
      {'\u00A0'}|{'\u00A0'}
      <a href="tel:+6281326510462">(+62) 813 2651 0462</a>
    </span>

    <p style={{ color: 'var(--textColor)', fontSize: '11px' }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </p>
  </footer>
)

export default Footer
