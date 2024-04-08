import React from 'react';
import './App.css';
import Navbars from './Components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Rotate from './Components/Trial/Trial';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (

      <div className="App">
        <Navbars />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
