import React, { Component } from 'react';
import styles from '.././styles/index.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos'; 

export default class Contact extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }

  render() {
    return (
      <section id="contact">
        <div className={`${styles.contact_box} aos-init`} data-aos="fade-up">
          <h1>Contact Me</h1>
          <p>
            Interested in working together or have a question? Feel free to
            reach out. I'm here to help you turn your ideas into amazing digital
            realities. Looking forward to hearing from you soon!
          </p>

          <ul className={styles.contact_buttons}>
            <li className={`${styles.contact_button} aos-init`} data-aos="fade-left">
              <button>
                <a href="https://github.com/n1ckero" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </button>
            </li>
            <li className={`${styles.contact_button} aos-init`} data-aos="fade-right">
              <button>
                <a href="mailto:examplegmail009@gmail.com">Email</a>
              </button>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
