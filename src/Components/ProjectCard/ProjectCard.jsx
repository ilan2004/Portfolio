import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Col } from 'react-bootstrap';
import styles from './page.module.css';

const ProjectCard = ({ title, description, imgUrl, redirect, role1 , role2, role3 }) => {
  return (
            <div className={styles.Project_box}>
                <div className={styles.image_box}>
                  <div className={styles.wrapper}>
                    <img className={styles.image} src={imgUrl} alt="Whetrip Project" />
                  </div>
                </div>
                <div className={styles.details}>
                  <div className={styles.details_box}>
                    <div className={styles.title_link}>
                      <div className={styles.title}>
                        {title}
                      </div>
                    </div>
                    <div className={styles.category}>
                      <div className={styles.role}>
                        {role1}
                      </div>
                      <div className={styles.role}>
                        {role2}
                      </div>
                      <div className={styles.role}>
                        {role3}
                      </div>
                    </div>
                    <div className={styles.desc}>
                      {description}
                    </div>
                  </div>
                  <Link to={redirect} className={styles.button} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </div>
              </div>
  );
};

export default ProjectCard;

