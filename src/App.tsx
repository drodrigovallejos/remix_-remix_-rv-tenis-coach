/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Methodology from './components/Methodology';
import Programs from './components/Programs';
import League from './components/League';
import VideoBlog from './components/VideoBlog';
import AdminVideoBlog from './components/AdminVideoBlog';
import Benefits from './components/Benefits';
import SportsDentist from './components/SportsDentist';
import Footer from './components/Footer';
import FullBlogPost from './components/FullBlogPost';

function ScrollToAnchor() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [navigate]);
  return null;
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Methodology />
      <Programs />
      <League />
      <VideoBlog />
      <Benefits />
      <SportsDentist />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-blue text-white font-sans selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden flex flex-col">
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminVideoBlog />} />
          <Route path="/blog/:id" element={<FullBlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}
