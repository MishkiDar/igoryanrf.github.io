import { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => {
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

  const services = [
    {
      title: 'ИИ‑ассистент в Telegram',
      description: 'умный ассистент, который отвечает, продаёт и собирает заявки.'
    },
    {
      title: 'Автопостинг ВКонтакте',
      description: 'контент выходит сам, охваты растут.'
    },
    {
      title: 'Привлечение целевой аудитории',
      description: 'поток тёплых диалогов и заявок.'
    }
  ];

  return (
    <section id="services" className="services section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">Мои услуги</h2>
        <div className="services-grid fade-in">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
