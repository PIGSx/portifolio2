import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hiury Sá</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              about
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              services
            </a>
          </li>
          <li>
            <a href="#portifolio" className="footer__link">
              projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/x.pigs/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://t.me/xPIGS"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-telegram"></i>
          </a>
          <a
            href="https://twitter.com/pigslindo"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; x.pigs. all rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
