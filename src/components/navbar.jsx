import React, { Component } from 'react';
import styles from "../styles/index.module.css";
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

export default class Navbar extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }

  scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  render() {
    return (
      <div className={`${styles.navbar} aos-init`} data-aos="fade-up">
        <ul className={styles.nav_items}>
          <li className={styles.nav_item}>
            <button onClick={() => this.scrollToSection("work")}>Work</button>
          </li>
          <li className={styles.nav_item}>
            <button onClick={() => this.scrollToSection("about")}>About</button>
          </li>
          <li className={styles.nav_item}>
            <button onClick={() => this.scrollToSection("contact")}>Contact</button>
          </li>
        </ul>
      </div>
    );
  }
}
