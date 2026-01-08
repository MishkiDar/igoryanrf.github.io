import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">Обо мне</h2>
        <div className="about-content fade-in">
          <p className="about-text">
            Я занимаюсь автоматизацией маркетинга и продаж с помощью ИИ‑ассистентов и контент‑систем. Создаю инструменты, которые приносят клиентов и экономят ваше время. Работаю быстро, прозрачно и на результат.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
