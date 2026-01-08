import { useEffect, useRef } from 'react';
import './Cases.css';

const Cases = () => {
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

  const cases = [
    {
      title: 'Онлайн‑школа',
      result: '+47% заявок за 30 дней'
    },
    {
      title: 'Услуги для бизнеса',
      result: 'рост конверсии на 32%'
    },
    {
      title: 'Эксперт‑консультант',
      result: '18 новых клиентов за месяц'
    }
  ];

  return (
    <section id="cases" className="cases section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">Результаты клиентов</h2>
        <div className="cases-grid fade-in">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-card card">
              <h3 className="case-title">{caseItem.title}</h3>
              <p className="case-result">{caseItem.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
