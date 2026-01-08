import { useEffect, useRef } from 'react';
import './Pricing.css';

const Pricing = () => {
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Старт',
      description: 'ИИ‑ассистент или автопостинг'
    },
    {
      name: 'Бизнес',
      description: 'ИИ‑ассистент + автопостинг'
    },
    {
      name: 'Максимум',
      description: 'ИИ‑ассистент + автопостинг + привлечение ЦА'
    }
  ];

  return (
    <section id="pricing" className="pricing section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">Тарифы</h2>
        <div className="pricing-grid fade-in">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-card card">
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-description">{plan.description}</p>
              <button className="btn btn-pricing" onClick={() => scrollToSection('hero')}>
                Получить консультацию
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
