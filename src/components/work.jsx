import React, { Component } from 'react';
import styles from '../styles/index.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import Worksample from './works/worksample';

export default class Work extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }

  render() {
    return (
      <section id="work" data-aos="fade-up">
        <div className={styles.work_global_box}>
          <h1>My work</h1>
          <p>
            Here's a glimpse of some of my recent and exciting projects.
            Each of them reflects my dedication to learning and my passion
            for web development, as I strive to create user-friendly and
            visually appealing web interfaces. While I'm still in the early
            stages of my Python journey, I'm excited to explore its potential
            in crafting innovative solutions.
          </p>

          <div className={styles.works}>
            <Worksample
              title="Portfolio"
              data="Data`2023.07.24"
              info="portfolio or created using a layout This was a training experience portfolio responsive universal with animation interactive written in ReactJs"
              banner="../.././public/workbanners/imageTwo.png"
              link="#"
              button="Open Source"
              data-aos="fade-right"
            />
            <Worksample
              title="Fortuna Game Shop"
              data="2023.08.05"
              info="the game store was created from scratch by me, it is very functional and dynamic, but now this project is closed"
              banner="../.././public/workbanners/imageOne.png"
              button="Closed"
              data-aos="fade-left"
            />
            <Worksample
              title="Fortuna Game Shop"
              data="2023.08.05"
              info="the game store was created from scratch by me, it is very functional and dynamic, but now this project is closed"
              banner="../.././public/workbanners/imageOne.png"
              button="Closed"
              data-aos="fade-right"
            />
          </div>

          <p>
            <a
              href="https://github.com/n1ckero"
              className={styles.git_link}
              target="_blank"
              data-aos="fade-up"
            >
              See all projects
            </a>
          </p>
        </div>
      </section>
    );
  }
}
