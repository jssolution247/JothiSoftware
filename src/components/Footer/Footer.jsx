import heroImage from "../../assets/jsol.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* BRAND */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img src={heroImage} style={{width : '50px' , height : '50px' , border: '1px solid #eee4dd' , borderRadius: '10px'}}/>
              </div>
              <span>
                <b style={{ color: "white" }}>Jothi </b> Software Solutions
              </span>
            </div>

            <p>
              Jothi Software Solutions (Jothi Software Solution / JothiSoftware)
              — transforming businesses through innovative digital marketing
              strategies in Ambur, Tamil Nadu. Your success is our priority.
            </p>

            <div className="footer-social">
              <a href="https://www.facebook.com/jothisoftwaresolutions" aria-label="Facebook">f</a>
              <a href="https://x.com/jothisoftwares" aria-label="X">x</a>
              <a href="https://www.instagram.com/jothisoftwaresolutions" aria-label="Instagram">ig</a>
              <a href="https://www.linkedin.com/company/jothisoftwaresolutions" aria-label="LinkedIn">in</a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">SEO Optimization</a></li>
              <li><a href="#services">Social Media Marketing</a></li>
              <li><a href="#services">Search Engine Marketing</a></li>
              <li><a href="#services">Website Development</a></li>
              <li><a href="#services">Meta Ads Management</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#services">Our Services</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="footer-col">
            <h5>Support</h5>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="tel:+91">Call: +91</a></li>
              <li><a href="mailto:jssolution247@gmail.com">Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span>© 2026 Jothi Software Solutions (JothiSoftware). All rights reserved.</span>
          <span>Best Digital Marketing Agency in Ambur, Tamil Nadu - Made in India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;