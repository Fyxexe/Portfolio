import React, { Component } from 'react';
import styles from '../styles/index.module.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

import Avatar from '../../public/vectors/image.png';

export default class About extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }

  render() {
    return (
      <section id="about">
        <div className={`${styles.about_box} aos-init`} data-aos="fade-up">
          <h1>About Me</h1>

          <div className={styles.about_info_box}>
            <div data-aos="fade-right">
              <p>
                👋 Hi! I'm n1ckero, a passionate junior front-end
                developer with 1 year of experience in web development. 🌐💻 I 💖
                crafting pixel-perfect web experiences and making code come to
                life. 🚀✨ 🚀🔥👨‍💻
              </p>
            </div>

            <div className={`${styles.about_image_box} aos-init`} data-aos="fade-left">
              <img src={Avatar} alt="" />
            </div>
          </div>

          <h2 data-aos="fade-up">My skills</h2>

          <div className={styles.skill_box}>
            <ul className={styles.skill_list}>
              <li className={`${styles.skill_list_item} aos-init`} data-aos="fade-right">
                HTML/CSS: Strong proficiency in HTML for structuring web content
                and CSS for styling it is essential for any front-end developer.
              </li>
              <li className={`${styles.skill_list_item} aos-init`} data-aos="fade-right">
                JavaScript: A solid understanding of JavaScript for adding
                interactivity and functionality to websites is crucial.
              </li>
              <li className={`${styles.skill_list_item} aos-init`} data-aos="fade-right">
                Responsive Design: Knowledge of responsive web design principles
                to ensure websites look and function well on various devices and
                screen sizes.
              </li>
              <li className={`${styles.skill_list_item} aos-init`} data-aos="fade-right">
                Version Control/Git: Familiarity with version control systems like
                Git for collaborative coding and tracking changes in code.
              </li>
            </ul>
            <ul className={styles.skill_list}>
              <li className={`${styles.skill_list_item} aos-init`} data-aos="fade-left">
                Front-End Frameworks: Basic knowledge of popular front-end
                frameworks like React, Angular, or Vue.js, depending on your
                preferred technology stack.
              </li>
              <li className={`${styles.skill_list_item} aos-init`} data-aos="fade-left">
                Browser Developer Tools: Proficiency in using browser developer
                tools to debug and troubleshoot issues in web applications.
              </li>
              <li className={`${styles.skill_list_item} aos-init`} data-aos="fade-left">
                Web Performance Optimization: Understanding techniques to optimize
                website performance, such as minimizing HTTP requests, optimizing
                images, and lazy loading.
              </li>
              <li className={`${styles.skill_list_item} aos-init`} data-aos="fade-left">
                CSS Preprocessors: Experience with CSS preprocessors like SASS or
                LESS to streamline and organize CSS code.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
