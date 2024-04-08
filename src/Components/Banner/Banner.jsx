import React from 'react'
import { useEffect, useState } from 'react';
import {Container , Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Header from '../../assets/img/header-img.svg'
import './Banner.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';
 const Banner = () => {
    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Video editor" ];
    const [text, setText] = useState("");
    const [delta ,setDelta] = useState(300 - Math.random() * 100);
    const period = 500;
    

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1)
            setDelta(200);
        }
    }

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => { clearInterval(ticker)};
    }, [text])
   
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible}) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi i'm Ilan `}
                    <br></br>
                    <span className='wrap'>{text}</span> </h1>
                    <p>Welcome to the portfolio of Ilan Usman, a passionate React developer based in Bangalore, India. Currently studying Computer Science with a focus on AIML engineering, I specialize in designing and creating exceptional websites. With a keen eye for detail and a commitment to innovation, I bring ideas to life with React expertise. Let's collaborate and elevate your online presence.</p>
                    <button className='use' onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/> </button>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                   <img className='space-man' src={Header} alt="Header Img" /> 
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default Banner;