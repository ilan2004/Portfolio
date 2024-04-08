import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Col } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imgUrl, redirect }) => {
  return (
    <Col sm={6} md={4}>

      <Link to={redirect} className='proj-imgbx'>
        <img className='imaged' src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </Link>
    </Col>
  );
};

export default ProjectCard;

