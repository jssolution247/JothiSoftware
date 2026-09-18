import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Enter your first name";
    if (!formData.lastName.trim()) newErrors.lastName = "Enter your last name";

    if (!formData.email.trim()) {
      newErrors.email = "Enter your email";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) newErrors.message = "Tell us about your project";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-badge">GET IN TOUCH</span>

          <h2>
            Let's Work
            <span> Together</span>
          </h2>

          <p>
            Ready to elevate your digital presence? Contact Jothi Software
            Solutions today and let's discuss how we can help your business
            grow online.
          </p>
        </div>

        <div className="contact-grid">
          {/* LEFT: CONTACT INFO */}
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon">✉</div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:jssolution247@gmail.com">
                  jssolution247@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">☎</div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:+91">+91</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>No.10, Bethesda Hospital Road, Ambur, Tamil Nadu 635802</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="field-error">{errors.firstName}</span>}
              </div>

              <div className="form-field">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="field-error">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message →
            </button>

            {submitted && (
              <p className="form-success">
                Thanks — we'll get back to you within one business day.
              </p>
            )}
          </form>
        </div>

        {/* MAP */}
        <div className="contact-map">
          <iframe
            title="Jothi Software Solutions location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.8562699564!2d78.7126131!3d12.7808269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badac3900000000%3A0x0!2sAmbur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;