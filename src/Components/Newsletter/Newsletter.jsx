import React from 'react';
import {useState, useEffect} from 'react';
import {Col,Row} from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import './Newsletter.css'

 const Newsletter = ({ onValidated, status, message}) => {

    const [email, setEmail] = useState('');
    const clearFields = () => {
        setEmail('');
    }


    useEffect(() => {
        if(status ==='success') clearFields();
    }, [status])


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    
        
    }

  return (
    <Col lg={12}>
        <div className='newsletter-bx'>
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h3>
                        Subscribe to our Newsletter
                    </h3>
                    {status === 'sending' && <Alert>Sending...</Alert>}
                    {status === 'error' && <Alert varient="danger">{message}</Alert>}
                    {status === 'Success' && <Alert varient="Success">{message}</Alert>}
                </Col>
                <Col md={6} xl={7}>
                    <form onSubmit={handleSubmit}>
                        <div className='new-email-bx'>
                            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                            <button type ="Submit"> Submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </div>
    </Col>
  )
}

export default Newsletter;