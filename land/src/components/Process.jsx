import { useEffect, useRef } from 'react';
import './Process.css';

const Process = () => {
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

  const steps = [
    'Анализ задач',
    'Проектирование',
    'Разработка',
    'Тестирование',
    'Передача'
  ];

  return (
    <section id="process" className="process section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">Как я работаю</h2>
        <div className="process-steps fade-in">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{index + 1}</div>
              <div className="process-content">
                <h3 className="process-step-title">{step}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
