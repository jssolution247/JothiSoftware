const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      quote:
        "Jothi Software Solutions completely transformed our online presence. Our D2C sales have skyrocketed by 400% since they took over our Meta Ads and SEO strategy.",
      name: "Rajesh Kumar",
      role: "Marketing Director, Ambur Leathers Ltd.",
    },
    {
      stars: 5,
      quote:
        "We were struggling to get new patients before working with this team. Their local SEO approach got us ranking #1 for all major dental keywords in our area within 4 months.",
      name: "Priya Sharma",
      role: "Clinic Founder, Bethesda Dental Care",
    },
    {
      stars: 5,
      quote:
        "Their Google Ads management slashed our customer acquisition cost by almost half. Highly professional, transparent reporting, and incredible ROI.",
      name: "Mohammed Tariq",
      role: "CEO, Tariq Enterprises",
    },
    {
      stars: 4,
      quote:
        "They built us a stunning, lightning-fast e-commerce website. The design is beautiful, but more importantly, our conversion rate doubled.",
      name: "Anita Desai",
      role: "Owner, Desai Boutique",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-heading">
          <span className="testimonials-badge">CLIENT SUCCESS STORIES</span>

          <h2>
            Trusted by Ambur's
            <span> Top Businesses</span>
          </h2>

          <p>
            Don't just take our word for it. Here is what our clients have
            to say about the ROI and growth we've delivered.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-stars">
                {"★".repeat(t.stars)}
                {"☆".repeat(5 - t.stars)}
              </div>

              <p className="testimonial-quote">"{t.quote}"</p>

              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;