import { Link } from 'react-router-dom'
import './Roofing.css'

export default function DryFixPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="roof-hero" style={{ backgroundImage: "url('/wall-page-1.webp')" }}>
        <div className="roof-hero__overlay" />
        <div className="container roof-hero__inner">
          <div className="roof-hero__content">
            <p className="roof-eyebrow roof-eyebrow--light">Evermount ROOFING &amp; BUILDING LTD</p>
            <h1 className="roof-hero__title">DRY FIX UPGRADES<br />IN SOMERSET</h1>
            <p className="roof-hero__desc">
              Expert roofers in Somerset installing dry fix ridge, hip, and verge systems.
              These modern, maintenance-free solutions improve roof durability, prevent
              mortar failure, and improve ventilation.
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
                  <option>Dry Fix Upgrades</option>
                  <option>New Tile &amp; Slate Roofs</option>
                  <option>New Flat Roofs</option>
                  <option>Roof &amp; Chimney Repairs</option>
                  <option>Gutters, Fascias &amp; Soffits</option>
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
          <h2 className="roof-section-title roof-section-title--center">MODERN, MAINTENANCE-FREE ROOFING</h2>
          <p className="roof-text">
            Traditional mortar on roof ridges, hips, and verges degrades over time due to weather exposure, leading to loose tiles and water leaks. Evermount Roofing &amp; Building Ltd provides a modern, long-lasting solution with our dry fix upgrade services. Our roofers in Somerset install mechanically fixed dry ridge and dry verge systems that eliminate the need for mortar completely.
          </p>
        </div>
      </section>

      {/* ── DRY RIDGE (Dark) ── */}
      <section className="roof-dark-section">
        <div className="container roof-split roof-split--img-left">
          <div className="roof-split__image">
            <img src="/wall-images-2.webp" alt="Dry Fix Ridge Upgrades" />
          </div>
          <div className="roof-split__content">
            <p className="roof-eyebrow roof-eyebrow--light">Evermount ROOFING &amp; BUILDING LTD</p>
            <h2 className="roof-section-title roof-section-title--white">DRY RIDGE &amp; VERGE SYSTEMS</h2>
            <p className="roof-text--light">
              Upgrading to a dry fix system ensures your roof tiles are securely fastened to withstand high winds and severe weather. In addition to offering superior stability, dry fix systems incorporate built-in ventilation, helping to prevent condensation build-up in your roof space.
            </p>
            <p className="roof-text--light mt-1">
              Our builders in Somerset guarantee a neat, highly durable finish that significantly reduces ongoing maintenance costs and extends the lifespan of your roof.
            </p>
            <Link to="/#contact" className="btn btn--primary mt-1">Contact Our Team</Link>
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
