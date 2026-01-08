import { useEffect, useRef } from 'react';
import './Problems.css';

const Problems = () => {
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

  const problems = [
    'Нет времени отвечать клиентам',
    'Контент выходит нерегулярно',
    'Воронки работают вручную',
    'Клиентов мало, рутины много',
    'Нет системности'
  ];

  return (
    <section id="problems" className="problems section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">С какими проблемами сталкивается каждый предприниматель</h2>
        <div className="problems-list fade-in">
          {problems.map((problem, index) => (
            <div key={index} className="problem-item">
              <span className="problem-icon">✗</span>
              <span className="problem-text">{problem}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
