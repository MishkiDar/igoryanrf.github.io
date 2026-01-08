import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <p className="footer-text">Email: info@aimarketing.ru</p>
            <p className="footer-text">Telegram: @aimarketing</p>
          </div>
          <div className="footer-section">
            <button className="btn btn-footer" onClick={() => scrollToSection('hero')}>
              Получить консультацию
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} AI Marketing. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
