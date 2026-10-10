import { Link } from 'react-router-dom'
import './ContactUs.css'

export default function ContactUsPage() {
  return (
    <main className="contact-page">
      <div className="contact-page__overlay" />
      <div className="container contact-page__inner">
        
        <div className="contact-page__content">
          <h1 className="contact-page__title">CONTACT OUR TEAM</h1>
          <p className="contact-page__desc">
            If you require any of our roofing or building services, contact our team
            in Somerset using the contact details below. A member of our team will 
            be in touch with you as soon as possible to provide additional information.
          </p>
          <div className="contact-page__details">
            <a href="tel:07821573382" className="contact-detail-link">
              <span className="contact-icon">📞</span> 07821 573 382
            </a>
            <a href="mailto:asap-roofing@hotmail.com" className="contact-detail-link">
              <span className="contact-icon">✉</span> asap-roofing@hotmail.com
            </a>
          </div>
        </div>

        <div className="contact-page__form hero__form">
          <h2 className="form__title">REQUEST A QUOTE</h2>
          <form className="quote-form" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Phone" />
              </div>
            </div>
            <div className="form-group">
              <label>Service Required</label>
              <select>
                <option>New Tile &amp; Slate Roofs</option>
                <option>New Flat Roofs</option>
                <option>Roof &amp; Chimney Repairs</option>
                <option>Gutters, Fascias &amp; Soffits</option>
                <option>Dry Fix Upgrades</option>
                <option>Wall Cladding</option>
                <option>Building Services</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="3" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--full">Send</button>
          </form>
        </div>

      </div>
    </main>
  )
}
