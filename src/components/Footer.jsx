import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__bg-img" />
      <div className="footer__content-wrap">
        <div className="container footer__inner">

          {/* Col 1 – Logo + description */}
          <div className="footer__col footer__brand">
            <div className="footer__logo-box">
              <img src="/logo-2.jpg" alt="Evermount Roofing" style={{ height: '80px', borderRadius: '4px' }} />
            </div>
            <p className="footer__brand-text">
              At Evermount Roofing, we offer a wide range of professional
              roofing and building services in Somerset and all surrounding areas.
            </p>
          </div>

          {/* Col 2 – Menu */}
          <div className="footer__col">
            <h4 className="footer__heading">MENU</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/roofing-services/new-roofs">New Roofs</Link></li>
              <li><Link to="/roofing-services/flat-roofs">Flat Roofs</Link></li>
              <li><Link to="/roofing-services/roof-repairs">Roof &amp; Chimney Repairs</Link></li>
              <li><Link to="/roofing-services/gutters">Gutters, Fascias &amp; Soffits</Link></li>
              <li><Link to="/roofing-services/dry-fix">Dry Fix Upgrades</Link></li>
              <li><Link to="/wall-cladding">Wall Cladding</Link></li>
              <li><Link to="/building-services">Building Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 3 – Contact info */}
          <div className="footer__col">
            <h4 className="footer__heading">CONTACT OUR TEAM</h4>
            <p className="footer__contact-item">
              📞 Mobile: <a href="tel:07821573382">07821 573 382</a>
            </p>
            <p className="footer__contact-item">
              ✉ Email: <a href="mailto:asap-roofing@hotmail.com">asap-roofing@hotmail.com</a>
            </p>
          </div>

          {/* Col 4 – Contact form */}
          <div className="footer__col">
            <form className="footer-form" onSubmit={e => e.preventDefault()}>
              <div className="footer-form__field">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="footer-form__row">
                <div className="footer-form__field">
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="footer-form__field">
                  <label>Phone</label>
                  <input type="tel" placeholder="Tel" />
                </div>
              </div>
              <div className="footer-form__field">
                <label>Message</label>
                <textarea rows="3" placeholder="Message" />
              </div>
              <button type="submit" className="btn btn--primary btn--full">Send</button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <p>ASAP Roofing &amp; Building LTD | All Rights Reserved ©2026 | Website Designed By Social Link Up</p>
        </div>
      </div>
    </footer>
  )
}
