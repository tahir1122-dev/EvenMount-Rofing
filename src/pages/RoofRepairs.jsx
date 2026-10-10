import { Link } from 'react-router-dom'
import './Roofing.css'

export default function RoofRepairsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="roof-hero" style={{ backgroundImage: "url('/buildingservice-2.webp')" }}>
        <div className="roof-hero__overlay" />
        <div className="container roof-hero__inner">
          <div className="roof-hero__content">
            <p className="roof-eyebrow roof-eyebrow--light">Evermount ROOFING &amp; BUILDING LTD</p>
            <h1 className="roof-hero__title">ROOF &amp; CHIMNEY<br />REPAIRS IN SOMERSET</h1>
            <p className="roof-hero__desc">
              Do not let minor issues turn into costly problems. Evermount Roofing &amp; Building Ltd
              provides fast and effective roof and chimney repairs across Somerset.
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
                  <option>Roof &amp; Chimney Repairs</option>
                  <option>New Tile &amp; Slate Roofs</option>
                  <option>New Flat Roofs</option>
                  <option>Gutters, Fascias &amp; Soffits</option>
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

      {/* ── INTRO ── */}
      <section className="roof-intro">
        <div className="container roof-intro__inner">
          <h2 className="roof-section-title roof-section-title--center">FAST &amp; RELIABLE ROOF REPAIRS</h2>
          <p className="roof-text">
            A damaged roof can quickly lead to leaks, dampness, and structural issues. At Evermount Roofing &amp; Building Ltd, our expert roofers in Somerset provide fast, reliable, and professional roof repairs to protect your home. Whether it is replacing a few slipped tiles or fixing extensive storm damage, we have the experience to resolve the issue efficiently.
          </p>
        </div>
      </section>

      {/* ── SLIPPED TILES (Dark) ── */}
      <section className="roof-dark-section">
        <div className="container roof-split roof-split--img-left">
          <div className="roof-split__image">
            <img src="/wall-page-1.webp" alt="Roof Repairs" />
          </div>
          <div className="roof-split__content">
            <p className="roof-eyebrow roof-eyebrow--light">Evermount ROOFING &amp; BUILDING LTD</p>
            <h2 className="roof-section-title roof-section-title--white">SLIPPED OR BROKEN TILES</h2>
            <p className="roof-text--light">
              Missing or broken tiles are a common issue that leaves your roof vulnerable to water ingress. Our roofers in Somerset quickly source matching tiles and secure them firmly in place, ensuring your roof is fully watertight and structurally sound once again.
            </p>
            <Link to="/#contact" className="btn btn--primary mt-1">Contact Our Team</Link>
          </div>
        </div>
      </section>

      {/* ── CHIMNEY REPAIRS (Light Bordered) ── */}
      <section className="roof-light-section">
        <div className="container">
          <div className="roof-bordered-box">
            <p className="roof-eyebrow">QUALITY WORKMANSHIP</p>
            <h2 className="roof-section-title">CHIMNEY REPAIRS &amp; REPOINTING</h2>
            <p className="roof-text">
              Chimneys are exposed to the harshest weather and can deteriorate over time. Evermount Roofing &amp; Building Ltd offers comprehensive chimney repairs, including repointing brickwork, replacing damaged lead flashing, and securing loose chimney pots.
            </p>
            <p className="roof-text mt-1">
              If your chimney is no longer in use and causing persistent issues, our builders in Somerset also provide safe and professional chimney removal services.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE (Navy) ── */}
      <section className="roof-navy-section">
        <div className="container roof-split roof-split--img-right">
          <div className="roof-split__content">
            <p className="roof-eyebrow roof-eyebrow--light">PROTECT YOUR PROPERTY AND ADD TO ITS VALUE</p>
            <h2 className="roof-section-title roof-section-title--white">WHY CHOOSE Evermount ROOFING &amp;<br />BUILDING LTD IN SOMERSET</h2>
            <p className="roof-text--light">
              When choosing roofers in Somerset or builders in Somerset, you need a company you can rely on. Evermount Roofing &amp; Building Ltd is known for delivering quality, value, and peace of mind on every project.
            </p>
            <p className="roof-text--light mt-1">
              Evermount Roofing &amp; Building Ltd is committed to delivering first class results making us a top choice for roofers and builders in Somerset.
            </p>
            <Link to="/#quote" className="btn btn--white mt-1">Get Your FREE Quote</Link>
          </div>
          <div className="roof-split__image roof-video-thumb">
            <img src="/buildingservice-1.webp" alt="Team" />
            <div className="roof-video-thumb__play"><span>▶</span></div>
          </div>
        </div>
      </section>
    </main>
  )
}
