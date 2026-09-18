import { NavLink } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "🔍",
      title: "SEO",
      description:
        "Improve your Google rankings and bring more organic traffic to your business.",
    },
    {
      icon: "📢",
      title: "Google Ads",
      description:
        "Reach the right customers with high-converting and optimized Google Ads campaigns.",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Build your brand and connect with your customers through powerful social media campaigns.",
    },
    {
      icon: "🌐",
      title: "Website Development",
      description:
        "Create fast, responsive and professional websites that turn visitors into customers.",
    },
    {
      icon: "🎨",
      title: "Branding",
      description:
        "Build a strong and memorable brand identity that makes your business stand out.",
    },
    {
      icon: "📊",
      title: "Analytics",
      description:
        "Understand your business performance with clear data, insights and reporting.",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="services-container">

        <div className="services-heading">

          <NavLink to="/Services" className="services-badge">
            OUR SERVICES
          </NavLink>

          <h2>
            Digital Solutions That
            <span> Grow Your Business</span>
          </h2>

          <p>
            We provide practical digital marketing and technology
            solutions designed to help your business grow online.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <button>
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;