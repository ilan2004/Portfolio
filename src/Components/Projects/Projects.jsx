import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import all_projects from './Products';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Projects.css';
const Projects = () => {
  return (
    <Router> {/* Wrap your component with Router */}
      <section className='project' id='project'>
        <Container>
          <Row>
            <Col>
              {/* Your existing content */}
              <h2>Projects</h2>
              <p>Projects Made for Hackathons and Freelance</p>
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
                      {all_projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                  <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  )
}

export default Projects;
