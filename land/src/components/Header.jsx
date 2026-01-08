import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            AI Marketing
          </div>
          <nav className="nav">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Услуги</a>
            <a href="#cases" onClick={(e) => { e.preventDefault(); scrollToSection('cases'); }}>Кейсы</a>
            <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Процесс</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Тарифы</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Обо мне</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a>
          </nav>
          <button className="btn btn-header" onClick={() => scrollToSection('hero')}>
            Получить консультацию
          </button>
          <button className="menu-toggle" aria-label="Меню">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
