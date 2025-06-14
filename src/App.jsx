import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Navbar from './Navbar';
import Skills from './Skills';
import Project from './Project';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Services from './Services';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
         <About />
      </main>
      <Skills />
      <Project />
      <Services />
      <Contact />
       <Footer />
    </>
  );
}

export default App;
