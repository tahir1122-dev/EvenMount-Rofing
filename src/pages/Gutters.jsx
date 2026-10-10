import { Link } from 'react-router-dom'
import './Roofing.css'

export default function GuttersPage() {
  return (
    <main>
      {/* â”€â”€ HERO â”€â”€ */}
      <section className="roof-hero" style={{ backgroundImage: "url('/wall-page-1.webp')" }}>
        <div className="roof-hero__overlay" />
        <div className="container roof-hero__inner">
          <div className="roof-hero__content">
            <p className="roof-eyebrow roof-eyebrow--light">EverMont ROOFING &amp; BUILDING LTD</p>
            <h1 className="roof-hero__title">GUTTERS, FASCIAS<br />&amp; SOFFITS IN WILTSHIRE AND SOMERSET</h1>
            <p className="roof-hero__desc">
              Protect your home with expert roofers in Wiltshire and Somerset offering high-quality
              gutters, fascias, and soffits. We install durable, low-maintenance systems
              that improve drainage, prevent damage, and enhance kerb appeal.
            </p>
            <div className="hero__buttons">
              <Link to="/#contact" className="btn btn--primary">Contact Us</Link>
              <Link to="/gallery" className="btn btn--outline">See Our Work</Link>
            </div>
          </div>

          <div className="hero__form">
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
                  <option>Fascia's, Soffits, Guttering</option>
                  <option>New Tile &amp; Slate Roofs</option>
                  <option>New Flat Roofs</option>
                  <option>Roof &amp; Chimney Repairs</option>
                  <option>Dry Fix Upgrades</option>
                  <option>Wall Cladding</option>
                  <option>Building Services</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="3" placeholder="Message" />
              </div>
              <button type="submit" className="btn btn--primary btn--full">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* â”€â”€ INTRO â”€â”€ */}
      <section className="roof-intro">
        <div className="container roof-intro__inner">
          <h2 className="roof-section-title roof-section-title--center">PROTECT YOUR HOME FROM WATER DAMAGE</h2>
          <p className="roof-text">
            A fully functioning roofline is essential for protecting your property from water damage. At EverMont Roofing &amp; Building Ltd, our expert roofers in Wiltshire and Somerset provide professional installation, repair, and replacement of gutters, fascias, and soffits. Our high-quality uPVC systems ensure effective rainwater drainage while significantly reducing maintenance requirements.
          </p>
        </div>
      </section>

      {/* â”€â”€ UPVC FASCIAS (Dark) â”€â”€ */}
      <section className="roof-dark-section">
        <div className="container roof-split roof-split--img-left">
          <div className="roof-split__image">
            <img src="/buildingservice-2.webp" alt="Fascias and Soffits" />
          </div>
          <div className="roof-split__content">
            <p className="roof-eyebrow roof-eyebrow--light">EverMont ROOFING &amp; BUILDING LTD</p>
            <h2 className="roof-section-title roof-section-title--white">uPVC FASCIAS AND SOFFITS</h2>
            <p className="roof-text--light">
              Traditional timber rooflines require regular painting and are prone to rotting over time. Our builders in Wiltshire and Somerset replace outdated timber with durable uPVC fascias and soffits that will not warp, rot, or fade. Available in a variety of colours and finishes, our uPVC roofline products provide a neat, modern appearance that complements your home perfectly.
            </p>
            <Link to="/#contact" className="btn btn--primary mt-1">Contact Our Team</Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ GUTTERING (Light Bordered) â”€â”€ */}
      <section className="roof-light-section">
        <div className="container">
          <div className="roof-bordered-box">
            <p className="roof-eyebrow">QUALITY WORKMANSHIP</p>
            <h2 className="roof-section-title">EXPERT GUTTERING SOLUTIONS</h2>
            <p className="roof-text">
              Leaking or blocked gutters can lead to severe structural issues, including damp walls and foundation damage. We supply and install high-capacity uPVC guttering designed to handle heavy rainfall efficiently.
            </p>
            <p className="roof-text mt-1">
              Our comprehensive guttering services include complete replacements, realignment, and professional cleaning. EverMont Roofing &amp; Building Ltd ensures your drainage system operates flawlessly, directing water safely away from your property year-round.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€ WHY CHOOSE (Navy) â”€â”€ */}
      <section className="roof-navy-section">
        <div className="container roof-split roof-split--img-right">
          <div className="roof-split__content">
            <p className="roof-eyebrow roof-eyebrow--light">PROTECT YOUR PROPERTY AND ADD TO ITS VALUE</p>
            <h2 className="roof-section-title roof-section-title--white">WHY CHOOSE EverMont ROOFING &amp;<br />BUILDING LTD IN WILTSHIRE AND SOMERSET</h2>
            <p className="roof-text--light">
              When choosing roofers in Wiltshire and Somerset or builders in Wiltshire and Somerset, you need a company you can rely on. EverMont Roofing &amp; Building Ltd is known for delivering quality, value, and peace of mind on every project.
            </p>
            <p className="roof-text--light mt-1">
              EverMont Roofing &amp; Building Ltd is committed to delivering first class results making us a top choice for roofers and builders in Wiltshire and Somerset.
            </p>
            <Link to="/#quote" className="btn btn--white mt-1">Get Your FREE Quote</Link>
          </div>
          <div className="roof-split__image roof-video-thumb">
            <img src="/buildingservice-1.webp" alt="Team" />
            <div className="roof-video-thumb__play"><span>â–¶</span></div>
          </div>
        </div>
      </section>
    </main>
  )
}
