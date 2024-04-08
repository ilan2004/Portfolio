import React from 'react'
import {Col,Row} from 'react-bootstrap';
import Projects from '../Projects/Projects';
import projImg1 from '../../assets/img/project-img1.png';
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';
import './ProjectCard.css';

const ProjectCard = ({title , description ,imgUrl}) => {
  return (
    <Col sm={6} md={4}>
        
        <div className='proj-imgbx'>
        <img className='imaged' src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}
export default ProjectCard;
