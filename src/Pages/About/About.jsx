import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-visual">

          <div className="about-main-card">

            <div className="about-icon">
              🚀
            </div>

            <h3>
              Growing Businesses
              <br />
              Through Digital
            </h3>

            <p>
              Smart strategies. Better visibility.
              Real business growth.
            </p>

          </div>


          <div className="about-small-card">

            <strong>5+</strong>

            <span>
              Years of
              <br />
              Experience
            </span>

          </div>


          <div className="about-circle">
            ✦
          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="about-content">

          <span className="section-badge">
            ABOUT JOTHI SOFTWARE SOLUTIONS
          </span>

          <h2>
            We help businesses
            <span> grow online.</span>
          </h2>

          <p className="about-intro">
            Jothi Software Solutions is a digital marketing
            and software development company focused on
            helping businesses build a strong online presence.
          </p>

          <p>
            From search engine optimization and Google Ads
            to social media marketing and website development,
            we create practical digital solutions that help
            businesses attract customers and grow.
          </p>


          {/* FEATURES */}

          <div className="about-features">

            <div className="about-feature">

              <div className="feature-check">
                ✓
              </div>

              <div>
                <h4>
                  Result Driven
                </h4>

                <p>
                  We focus on measurable business results.
                </p>
              </div>

            </div>


            <div className="about-feature">

              <div className="feature-check">
                ✓
              </div>

              <div>
                <h4>
                  Customer Focused
                </h4>

                <p>
                  Strategies designed around your goals.
                </p>
              </div>

            </div>

          </div>


          <button className="about-btn">
            Learn More About Us →
          </button>

        </div>

      </div>

    </section>
  );
};

export default About;