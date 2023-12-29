import React from "react";
import Navbar from '../src/components/Navbar/Navbar.tsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage.tsx';
import AboutPage from './components/AboutPage/AboutPage.tsx';
import ProjectPage from './components/ProjectPage/ProjectPage.tsx';
import SkillPage from './components/SkillPage/SkillPage.tsx';
import ContactPage from './components/ContactPage/ContactPage.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
