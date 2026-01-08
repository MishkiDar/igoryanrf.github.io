import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import Cases from './components/Cases';
import Process from './components/Process';
import Pricing from './components/Pricing';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Add fade-in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Cases />
        <Process />
        <Pricing />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
