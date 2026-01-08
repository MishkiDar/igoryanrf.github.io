import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Автоматизирую маркетинг и продажи с помощью ИИ‑ассистентов и умных контент‑систем
          </h1>
          <p className="hero-subtitle">
            Создаю Telegram‑ассистентов, автопостинг ВКонтакте и системы привлечения клиентов, которые работают за вас и экономят до 4 часов в день.
          </p>
          <button className="btn btn-hero" onClick={() => scrollToSection('pricing')}>
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
