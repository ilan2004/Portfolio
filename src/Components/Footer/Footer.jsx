import React from 'react'
import MailChimpForm from '../MailchimpForm/MailChimpForm';
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navicon3 from '../../assets/img/nav-icon3.svg';
import {Col,Row,Container} from 'react-bootstrap';
 import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className="align-items-center">

                <Col sm={6}>
                <h3 className='log-dev'>ILAN.dev</h3>

                </Col>
                <Col sm={6} className= "text-center text-sm-end">
                    <div className='social-icon'>
                    <a href=''><img src={navIcon1}/></a>
                    <a href=''><img src={navIcon2}/></a>
                    <a href=''><img src={navicon3}/></a>
                    </div>
                    <p>CopyRight 2022, All Right Reserved</p>
                </Col>
                </Row>
        </Container>
    </footer>
  )
}
export default Footer;
