import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import BrightnessDark from "../../assets/icons/brightness_dark.svg"
import BrigtnessLight from "../../assets/icons/brightness_light.svg"

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <button
        onClick={e => {
          if (theme === "dark") {
            toggleTheme("light")
          } else {
            toggleTheme("dark")
          }
        }}
      >
        {theme === "light" ? (
          <BrightnessDark
            alt="Brightness icon"
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <BrigtnessLight alt="Brightness icon" />
        )}
        {/* <BrightnessDark alt="Brightness icon" style={{ width: 40, height: 40 }} />  */}
      </button>
    )}
  </ThemeToggler>
)
