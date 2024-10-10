import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Docs from './components/Docs.js';
import Footer from './components/Footer.js';
import ContactUs from './components/ContactUs.js';
import Research from './components/Research.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    const navbarlink = document.querySelectorAll('.navbar-link');
    const loading = document.getElementById('loading-page');

    navbarlink.forEach((gotosrc) => {
      gotosrc.addEventListener('click', () => {
        loading.style.display = 'flex';
        setTimeout(() => {
          loading.style.display = 'none';
        }, 1000);
      });
    });
    
    return () => {
      navbarlink.forEach((gotosrc) => {
        gotosrc.removeEventListener('click', () => {});
      });
    };
  }, []);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Objects"
          element={<Docs/>}
        />
        <Route path="/Research" element={<Research />} />
        <Route path="/askus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
