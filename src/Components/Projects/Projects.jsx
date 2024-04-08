import React from 'react'
import { Container, TabPane } from 'react-bootstrap'
import {Row , Col, Tab} from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import colorSharp2 from '../../assets/img/color-sharp2.png'
import Nav from 'react-bootstrap/Nav';
import all_projects from './Products';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';



 const Projects = () => {
  return (
    <section className='project' id= 'project'>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                {({ isVisible}) =>
                <div >
                <h2>Projects</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam odit, minima aut omnis explicabo nisi tempore at fuga ea, eum vero reiciendis illum illo quaerat asperiores qui iste amet rem?</p>
                </div>}
                </TrackVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                <Nav variant="pills" defaultActiveKey="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                    <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third" >
                        Tab three
                    </Nav.Link>
                </Nav.Item>
                 </Nav>
                 <Tab.Content className='items'>
                    <Tab.Pane className='items' eventKey="first">
                        <Row className='content'>
                            {
                                all_projects.map((project, index) => {
                                    return(
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>

                 </Tab.Content>
                 </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' onScroll={colorSharp2}></img>
    </section>
  )
}
export default Projects;