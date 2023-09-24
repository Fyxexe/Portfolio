import React, { Component } from "react";
import styles from "../styles/index.module.css";
import "aos/dist/aos.css"; 
import AOS from "aos"; 

import imageOne from "../../public/vectors/heroOne.png";
import imageTwo from "../../public/vectors/circle.png";
import imageThree from "../../public/vectors/polygon.png";
import imageFour from "../../public/vectors/scuare.png";

export default class Hero extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  render() {
    return (
      <div className={styles.hero_bar} data-aos="fade-up">
        <div className={styles.png_box}>
          <div>
            <img src={imageThree} alt="polygon" data-aos="zoom-in" />
          </div>
          <div className={styles.png_box_row}>
            <div>
              <img src={imageTwo} alt="circle" data-aos="fade-right" />
            </div>
            <div>
              <img
                src={imageOne}
                alt="hero"
                width="100px"
                data-aos="fade-left"
              />
            </div>
          </div>
          <div>
            <img src={imageFour} alt="square" data-aos="zoom-in" />
          </div>
        </div>

        <div className={styles.info_box} data-aos="fade-up">
          <h1>Hi, I'm n1ckero</h1>
          <p>
            I'm an aspiring Junior Front-End Web Developer with a growing
            enthusiasm for Python, JavaScript, ReactJS... programming. My goal
            is to harness my skills to craft engaging and user-friendly web
            interfaces, while also delving into the world of Python development
            to create innovative solutions.
          </p>
        </div>
      </div>
    );
  }
}
