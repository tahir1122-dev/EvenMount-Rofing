import { Link } from 'react-router-dom'
import './Roofing.css'

export default function FlatRoofsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="roof-hero" style={{ backgroundImage: "url('/wall-page-1.webp')" }}>
        <div className="roof-hero__overlay" />
        <div className="container roof-hero__inner">
          <div className="roof-hero__content">
            <p className="roof-eyebrow roof-eyebrow--light">Evermount ROOFING &amp; BUILDING LTD</p>
            <h1 className="roof-hero__title">NEW FLAT ROOFS &amp;<br />REROOFS IN SOMERSET</h1>
            <p className="roof-hero__desc">
              Evermount Roofing &amp; Building Ltd are trusted roofers in Somerset specialising
              in new flat roof installations and reroofs.
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
                  <option>New Flat Roofs</option>
                  <option>New Tile &amp; Slate Roofs</option>
                  <option>Roof &amp; Chimney Repairs</option>
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
          <h2 className="roof-section-title roof-section-title--center">GRP FIBREGLASS FLAT ROOFS IN SOMERSET</h2>
          <p className="roof-text">
            Evermount Roofing &amp; Building Ltd are expert roofers in Somerset. We install GRP fibreglass flat roofing systems. GRP is a tough, reinforced material that provides a seamless, waterproof finish, ideal for both residential and commercial properties. Our GRP flat roof installations include a high-quality resin layer applied over a robust matting base. Our Somerset roofers ensure all joints, edges, and penetrations are professionally sealed, providing a smooth, reliable, and visually appealing new roof.
          </p>
        </div>
      </section>

      {/* ── EPDM RUBBER (Dark) ── */}
      <section className="roof-dark-section">
        <div className="container roof-split roof-split--img-left">
          <div className="roof-split__image">
            <img src="/buildingservice-2.webp" alt="EPDM Rubber Roof" />
          </div>
          <div className="roof-split__content">
            <p className="roof-eyebrow roof-eyebrow--light">Evermount ROOFING &amp; BUILDING LTD</p>
            <h2 className="roof-section-title roof-section-title--white">EPDM RUBBER FLAT ROOFS</h2>
            <p className="roof-text--light">
              The flat roof team at Evermount Roofing &amp; Building Ltd specialise in EPDM rubber roofing systems. EPDM is a premium synthetic rubber material, renowned for its flexibility, durability, and excellent resistance to extreme weather conditions.
            </p>
            <h3 className="roof-eyebrow roof-eyebrow--light mt-1">BENEFITS OF EPDM RUBBER FLAT ROOFS:</h3>
            <p className="roof-text--light">
              Every EPDM flat roof we install includes a high-quality, fully bonded underlay and professional detailing at edges and roof penetrations. Our roofers in Somerset ensure each installation is watertight, smooth, and finished to a modern, professional standard.
            </p>
          </div>
        </div>
      </section>

      {/* ── TORCH-ON FELT (Light) ── */}
      <section className="roof-light-section">
        <div className="container roof-split roof-split--img-right">
          <div className="roof-split__content">
            <p className="roof-eyebrow">QUALITY WORKMANSHIP</p>
            <h2 className="roof-section-title">TORCH-ON FELT FLAT ROOFS</h2>
            <p className="roof-text">
              For traditional flat roofing solutions, Evermount Roofing &amp; Building Ltd install torch-on felt roofs during new installations or reroofs. This tried-and-tested system provides excellent protection for residential and commercial properties, combining reliability and cost-effectiveness.
            </p>
            <p className="roof-text mt-1">
              Each torch-on felt roof that our Somerset roofers install is applied over a high-quality underlay and expertly finished at all edges and flashings. Evermount Roofing &amp; Building Ltd guarantees a neat, professional, and watertight result that protects your property for many years.
            </p>
          </div>
          <div className="roof-split__image">
            <img src="/wall-images-2.webp" alt="Torch-On Felt Roof" />
          </div>
        </div>
      </section>

      {/* ── ROOF WINDOWS FOR FLAT ROOFS (Navy) ── */}
      <section className="roof-navy-section">
        <div className="container roof-split roof-split--img-left">
          <div className="roof-split__image">
            <img src="/buildingservice-1.webp" alt="Roof Window on Flat Roof" />
          </div>
          <div className="roof-split__content">
            <p className="roof-eyebrow roof-eyebrow--light">PROFESSIONAL ROOFING SERVICES SOMERSET</p>
            <h2 className="roof-section-title roof-section-title--white">ROOF WINDOWS FOR FLAT ROOFS</h2>
            <p className="roof-text--light">
              When installing a new flat roof or carrying out a reroof, Evermount Roofing &amp; Building Ltd can integrate roof windows or skylights to maximise natural light and ventilation. Our roofers in Somerset ensure all roof windows are fully insulated, energy-efficient, and weatherproof, providing both functional and aesthetic benefits.
            </p>
            <p className="roof-text--light mt-1">
              We use premium flashing kits and robust sealing systems, ensuring each roof window installation maintains the integrity of your new flat roof while improving interior living spaces.
            </p>
            <Link to="/#contact" className="btn btn--primary mt-1">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ── EDGES, PARAPETS (Intro style) ── */}
      <section className="roof-intro">
        <div className="container roof-intro__inner">
          <p className="roof-eyebrow">Evermount ROOFING &amp; BUILDING LTD</p>
          <h2 className="roof-section-title roof-section-title--center">EDGES, PARAPETS &amp; DRAINAGE SYSTEMS IN SOMERSET</h2>
          <p className="roof-text">
            During every new flat roof installation or reroof, Evermount Roofing &amp; Building Ltd ensure all edges, parapets, and drainage systems are expertly finished. Our team fits durable fascia boards, soffits, and guttering that protect your property from water damage while improving overall roof performance.
          </p>
          <p className="roof-text mt-1">
            We use high-quality, low-maintenance materials designed to last, providing a neat, professional finish that complements EPDM, GRP, and torch-on felt flat roofs while enhancing the overall look and functionality of your property.
          </p>
          <div className="bs-social mt-1">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="btn btn--social btn--tiktok">♪ Follow Our TikTok</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn--social btn--facebook">f Join Our Facebook</a>
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
