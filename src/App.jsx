import React from "react";

import styles from "./styles/index.module.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";


function App() {
  return (
    <div className={styles.main}>
      <div className={styles.container} >
        <Navbar / >
        <Hero id="hero" />
        <Work id="work" />
        <About id="about" />
        <Contact id="contact" />
      </div>
      <span className={styles.cop}>© 2023 n1ckero</span>
    </div>
  );
}

export default App;
