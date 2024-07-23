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
              {/* Your existing content */}
              <div className='heading'>Projects</div>
              <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                <Tab.Content className='items'>
                  <Tab.Pane className='items' eventKey="first">
                    <div className='content'>
                      {all_projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                  <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
        </Container>
      </section>
    </Router>
  )
}

export default Projects;
