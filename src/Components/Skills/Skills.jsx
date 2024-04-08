import './Skills.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import { Container } from 'react-bootstrap';
import html from '../../assets/img/html.png';
import css from '../../assets/img/css.png';
import reactjs from '../../assets/img/reactjs.png';
import aws from '../../assets/img/aws.png';
import node from '../../assets/img/nodejs.png';
import js from '../../assets/img/javascript.png';
import movie from '../../assets/img/movie.png';
import colorSharp from '../../assets/img/color-sharp.png';
import {Row , Col} from 'react-bootstrap';
 const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
  return (
    <div className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>
                        Skills
                    </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea architecto,<br></br> nostrum sunt mollitia provident nihil. Quas dolor a eos itaque eligendi voluptatem, fugit fuga officia nemo facere reiciendis assumenda voluptate!</p>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={html} alt="image"/>
                            <h5>HTML</h5>
                        </div>
                        <div className='item'>
                            <img src={css} alt="image"/>
                            <h5>CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={reactjs} alt="image"/>
                            <h5>REACT</h5>
                        </div>
                        <div className='item'>
                            <img src={aws} alt="image"/>
                            <h5>AWS</h5>
                        </div>
                        <div className='item'>
                            <img src={node} alt="image"/>
                            <h5>NODE JS</h5>
                        </div>
                        <div className='item'>
                            <img src={js} alt="image"/>
                            <h5>Javascript</h5>
                        </div>
                        <div className='item'>
                            <img src={movie} alt="image"/>
                            <h5>Cinematography</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp}/>

    </div>
  )
}
export default Skills;
