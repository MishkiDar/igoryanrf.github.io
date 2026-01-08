import { useState, useEffect, useRef } from 'react';
import './FAQ.css';

const FAQ = () => {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

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

  const faqs = [
    {
      question: 'Сколько занимает внедрение',
      answer: 'Время внедрения зависит от сложности проекта. Обычно это занимает от 1 до 3 недель.'
    },
    {
      question: 'Нужны ли технические навыки',
      answer: 'Нет, все настраивается мной. Вам нужно только предоставить доступы и контент.'
    },
    {
      question: 'Можно ли масштабировать',
      answer: 'Да, все системы создаются с учетом масштабирования и легко адаптируются под рост бизнеса.'
    },
    {
      question: 'Как происходит поддержка',
      answer: 'После внедрения предоставляется поддержка и обучение. Все вопросы решаются оперативно.'
    },
    {
      question: 'Что нужно от клиента',
      answer: 'Доступы к аккаунтам, контент-план, информация о продуктах/услугах и целевая аудитория.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">Частые вопросы</h2>
        <div className="faq-list fade-in">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
