const WhyUs = () => {
  const reasons = [
    {
      icon: "📈",
      title: "Data-Driven Results",
      description:
        "Every campaign is backed by precision analytics to secure the highest ROI for your brand.",
    },
    {
      icon: "👥",
      title: "Dedicated Experts",
      description:
        "A seasoned digital marketing team focused on practical strategy, execution, and measurable growth.",
    },
    {
      icon: "⚡",
      title: "Agile Turnaround",
      description:
        "Flawless rapid-cycle execution. We respect deadlines and push campaigns to market fast.",
    },
    {
      icon: "◉",
      title: "Absolute Transparency",
      description:
        "Clear client reporting pipelines, monthly analytics digests, and real-time dashboard updates.",
    },
    {
      icon: "🤝",
      title: "Strategic Partnerships",
      description:
        "We align as partners, constantly adapting strategies as your enterprise expands.",
    },
    {
      icon: "🏆",
      title: "Proven Track Record",
      description:
        "Over 200 satisfied organizations across Tamil Nadu trust us to handle their digital pipelines.",
    },
  ];

  return (
    <section className="why-us" id="why-us">

      <div className="why-us-container">

        {/* LEFT CONTENT */}

        <div className="why-us-content">

          <span className="why-us-badge">
            OUR EDGE
          </span>

          <h2>
            Why Partner with
            <span> Jothi Software Solutions?</span>
          </h2>

          <p>
            We create practical digital growth systems for local
            businesses. Our agency combines clear design, search
            optimization, paid media, and reporting to strengthen
            your presence in Tamil Nadu.
          </p>

          <div className="why-highlights">

            <div>
              <span>✓</span>
              10+ Years Digital Experience
            </div>

            <div>
              <span>✓</span>
              200+ Active Clients
            </div>

            <div>
              <span>✓</span>
              Transparent Monthly Audits
            </div>

          </div>

        </div>


        {/* RIGHT CARDS */}

        <div className="reasons-grid">

          {reasons.map((reason, index) => (

            <div
              className="reason-card"
              key={index}
            >

              <div className="reason-icon">
                {reason.icon}
              </div>

              <h3>
                {reason.title}
              </h3>

              <p>
                {reason.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyUs;