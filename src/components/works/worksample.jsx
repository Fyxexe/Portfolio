import React, { Component } from 'react';
import styles from '../.././styles/index.module.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

export default class WorkSample extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }

  render() {
    const { title = '', data = '', info = '', banner = '', button = '', link = '' } = this.props;

    return (
      <div className={`${styles.work_box} aos-init`} data-aos="fade-up">
        <div className={styles.work_info_box}>
          <h1 data-aos="fade-right">{title}</h1>
          <h2 data-aos="fade-right">{data}</h2>
          <p data-aos="fade-right">{info}</p>
          <button data-aos="fade-up">
            <a href={link} target="_blank">
              {button}
            </a>
          </button>
        </div>

        <div data-aos="fade-left">
          <img src={banner} alt="" />
        </div>
      </div>
    );
  }
}
