import React from 'react';
import styles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; 




const Footer = () => {
    return (
      <div className={styles.footer}>      
      <section className={styles.social_media}>
        <div className={styles.social_media_wrap}>
          <div className={styles.footer_logo}>
            <a className={styles.social_logo}>
              <p>Drug Controll Administration</p>  
            </a>
          </div>
          <small className={styles.website_rights}>DCA © 2020</small>
          <div className={styles.social_icons}>
              5
          </div>
        </div>
      </section>
    </div>
    )
  }
  
  export default Footer