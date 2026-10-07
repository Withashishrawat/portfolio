import { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const whatsappNumber = "917579148072";
  const whatsappMessage = encodeURIComponent(
    "Hi Ashish, I want to discuss a project with you.",
  );

  return (
    <section className="contact page-section">
      <div className="container">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle">Have a project? Let's talk!</p>

        <div className="contact-grid">
          <div className="contact-info">
            <a href="mailto:ashish@example.com" className="contact-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>call.ashishrawat@gmail.com</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="contact-item whatsapp-item"
            >
              <FaWhatsapp />
              <div>
                <h4>WhatsApp</h4>
                <p>+91 7579148072</p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=India"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              {sent ? (
                "Message Sent ✓"
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
