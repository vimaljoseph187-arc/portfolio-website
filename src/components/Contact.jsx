import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '917604919481'; // Without +, with country code
    const message = encodeURIComponent('Hi Vimal, I saw your portfolio and would like to connect!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:vimaljoseph187@gmail.com?subject=Portfolio Contact&body=Hi Vimal, I saw your portfolio and would like to connect!';
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vimaljoseph187@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-subtitle">
          I'm always excited to collaborate on new projects or discuss opportunities.
          Reach out to me through any of these channels!
        </p>
        
        <div className="contact-cards">
          <div className="contact-card" onClick={handleWhatsApp}>
            <div className="card-icon whatsapp">
              <span>💬</span>
            </div>
            <h3>WhatsApp</h3>
            <p>Quick response within 24 hours</p>
            <button className="contact-btn whatsapp-btn">
              <span>📱</span> Chat on WhatsApp
            </button>
          </div>

          <div className="contact-card" onClick={handleEmail}>
            <div className="card-icon email">
              <span>📧</span>
            </div>
            <h3>Email</h3>
            <p>vimaljoseph187@gmail.com</p>
            <button className="contact-btn email-btn">
              <span>✉️</span> Send Email
            </button>
          </div>

          <div className="contact-card" onClick={handleCopyEmail}>
            <div className="card-icon copy">
              <span>📋</span>
            </div>
            <h3>Copy Email</h3>
            <p>Click to copy email address</p>
            <button className="contact-btn copy-btn">
              <span>📋</span> Copy Email
            </button>
          </div>
        </div>

        <div className="contact-info-wrapper">
          <div className="contact-details-modern">
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Dindigul, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91 7604919481</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🔗</span>
              <div>
                <h4>Social</h4>
                <div className="social-modern">
                  <a href="https://github.com/vimaljoseph187-arc" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/vimal-j-profile" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;