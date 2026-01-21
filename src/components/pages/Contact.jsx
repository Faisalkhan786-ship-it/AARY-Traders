import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with our team!</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-description">
              Have a question about our products? Need help with an order? Or just want to say hello?
              We're here to help!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>support@fkdenim.com</p>
                  <p>info@fkdenim.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 98765 43210</p>
                  <p>+91 87654 32109</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Address</h3>
                  <p>123 Fashion Street,</p>
                  <p>Mumbai, Maharashtra 400001</p>
                  <p>India</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

        <div className="social-media" style={{ color: 'black' }}>

  <h3 style={{ color: 'black' }}>Follow Us</h3>
  <div className="social-links">
    <a href="#" className="social-link" style={{ color: 'black', textDecoration: 'none' }}>Facebook</a>
    <a href="#" className="social-link" style={{ color: 'black', textDecoration: 'none' }}>Instagram</a>
    <a href="#" className="social-link" style={{ color: 'black', textDecoration: 'none' }}>Twitter</a>
    <a href="#" className="social-link" style={{ color: 'black', textDecoration: 'none' }}>LinkedIn</a>
  </div>
</div>
</div>
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact