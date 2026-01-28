export default function Contact() {
    return (
      <section id="contact" className="contact-section">
        <div className="container contact-content">
          <h2 className="section-title">Get in Touch</h2>
  
          <p className="contact-intro">
            Call, email, or send us a message today — we serve all of Rhode Island.
            Request a free site evaluation and free estimate for your project.
          </p>
  
          <div className="contact-methods">
            <a href="tel:+14014251778" className="contact-button phone">
              📞 Call Us
            </a>
            <a href="mailto:derek@dppiping.com" className="contact-button email">
              ✉️ Email Us
            </a>
          </div>
  
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="contact-form"
          >
            {/* Hidden field for Netlify bot protection */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
  
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  