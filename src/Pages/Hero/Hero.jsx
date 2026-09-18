import heroImage from "../../assets/hero.jpg";
import TypingText from "../TypingText/TypingText";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">

      {/* Left Content */}
      <div className="hero-content">

        <div className="hero-badge">
          ✨ Premium Digital Solutions
        </div>

        <h1>
          Scale Your Business <span>Beyond Limits</span>
        </h1>

        <p className="hero-subtitle" style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', lineHeight: '1.5' }}>
          <TypingText />
        </p>

        <p className="hero-description" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', lineHeight: '1.5' }}>
          We help businesses grow with strategic digital marketing, web
          development, and comprehensive lead generation solutions. Your
          success is our mission.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="primary-btn">
            Get Free SEO Audit →
          </button>


            <button className="secondary-btn">
              <NavLink to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
                View Our Services
              </NavLink>
            </button>
          </div>


        {/* Features */}
        <div className="hero-features">

          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.5' }}>
            ✓ 150+ Projects Launched
          </span>

          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.5' }}>
            ✓ 100% Client Satisfaction
          </span>

          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.5' }}>
            ✓ 2+ Years Experience
          </span>

          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.5' }}>
            ✓ 40+ Team Experts
          </span>

        </div>

      </div>


      {/* Right Side */}
      <div className="hero-visual">

        <div className="hero-image-card">
          <div className="image-placeholder">
            <img
              src={heroImage}
              alt="Digital Marketing Team"
            />
          </div>
        </div>

        {/* Floating Card */}
        <div className="growth-card">
          <div className="growth-title">
            <span className="growth-icon" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontWeight: 'bold' }}>↗</span>
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontWeight: 'bold' }}>2 Years of</span>
          </div>
          <strong>Excellence</strong>
        </div>

        {/* Secondary badge */}
        <div className="rating-card">
          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontWeight: 'bold' }}>Client Satisfaction</span>
          <strong>100% ⭐</strong>
        </div>

      </div>

    </section>
  );
};

export default Hero;