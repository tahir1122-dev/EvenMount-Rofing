import { Link } from 'react-router-dom'
import './Roofing.css'

export default function NewRoofsPage() {
  return (
    <main>
      {/* â”€â”€ HERO â”€â”€ */}
      <section className="roof-hero" style={{ backgroundImage: "url('/wall-images-2.webp')" }}>
        <div className="roof-hero__overlay" />
        <div className="container roof-hero__inner">
          <div className="roof-hero__content">
            <p className="roof-eyebrow roof-eyebrow--light">EverMont ROOFING &amp; BUILDING LTD</p>
            <h1 className="roof-hero__title">TILE &amp; SLATE ROOF<br />INSTALLATIONS</h1>
            <p className="roof-hero__desc">
              We specialise in new roof installations and reroofs, delivering strong,
              weather-resistant, and visually stunning roofs that protect your home
              and enhance its value.
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
                  <option>New Tile &amp; Slate Roofs</option>
                  <option>New Flat Roofs</option>
                  <option>Roof &amp; Chimney Repairs</option>
                  <option>Fascia's, Soffits, Guttering</option>
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
          <h2 className="roof-section-title roof-section-title--center">HIGH STANDARDS, PREMIUM MATERIALS</h2>
          <p className="roof-text">
            Every roof we install is completed to the highest standard, using premium materials and industry-leading techniques. This includes natural slates, high-quality clay tiles, concrete tiles, breathable underlays, and corrosion-resistant fixings. By combining experience, craftsmanship, and the very best materials, EverMont Roofing &amp; Building Ltd ensures every new roof offers long-lasting performance, exceptional durability, and complete peace of mind.
          </p>
          <p className="roof-text mt-1">
            Whether you need a brand-new roof for a new build or a full reroof to replace a worn-out roof, our team handles every project with precision, professionalism, and care.
          </p>
        </div>
      </section>

      {/* â”€â”€ SLATE ROOFING (Dark) â”€â”€ */}
      <section className="roof-dark-section">
        <div className="container roof-split roof-split--img-right">
          <div className="roof-split__content">
            <p className="roof-eyebrow roof-eyebrow--light">EverMont ROOFING &amp; BUILDING LTD</p>
            <h2 className="roof-section-title roof-section-title--white">SLATE ROOFING IN WILTSHIRE AND SOMERSET</h2>
            <p className="roof-text--light">
              When installing a new slate roof or reroof, EverMont Roofing &amp; Building Ltd use natural slate sourced from trusted suppliers. Slate is a premium roofing material, known for its exceptional strength, longevity, and weather resistance.
            </p>
            <h3 className="roof-eyebrow roof-eyebrow--light mt-1">BENEFITS OF INSTALLING A SLATE ROOF:</h3>
            <p className="roof-text--light">
              Every slate roof installed by EverMont Roofing &amp; Building Ltd is fixed with corrosion-resistant nails and breathable underlay systems, ensuring a fully watertight, structurally sound roof. We take care to align each slate perfectly, giving your home a flawless, classic finish that will last for decades. Our team also considers insulation and ventilation during installation, improving energy efficiency and maintaining the longevity of your new roof.
            </p>
            <div className="mt-1">
              <Link to="/#contact" className="btn btn--primary mr-1">Contact Our Team</Link>
              <Link to="/gallery" className="btn btn--facebook">f Follow Us</Link>
            </div>
          </div>
          <div className="roof-split__image">
            <img src="/Home-Banner.jpg" alt="Slate Roofing" />
          </div>
        </div>
      </section>

      {/* â”€â”€ TILE ROOFING (Light Bordered) â”€â”€ */}
      <section className="roof-light-section">
        <div className="container">
          <div className="roof-bordered-box">
            <p className="roof-eyebrow">QUALITY WORKMANSHIP</p>
            <h2 className="roof-section-title">TILE ROOFING IN WILTSHIRE AND SOMERSET</h2>
            <p className="roof-text">
              For homeowners seeking a classic or contemporary finish, EverMont Roofing &amp; Building Ltd are trusted roofers in Wiltshire and Somerset providing premium tile roofing. We install clay and concrete tiles in a wide range of colours and profiles to match your home's design perfectly.
            </p>
            <p className="roof-text mt-1">
              Each tile roof installation includes robust underlay and breathable membranes to prevent water ingress, along with precision-fitted, corrosion-resistant fixings. Our roofers in Wiltshire and Somerset carefully lay each tile to create a weatherproof, low-maintenance roof that protects your property while improving its kerb appeal.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€ ROOF WINDOWS (Navy) â”€â”€ */}
      <section className="roof-navy-section">
        <div className="container roof-split roof-split--img-left">
          <div className="roof-split__image" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
             <img src="/buildingservice-1.webp" alt="Window" style={{ height: '185px' }}/>
             <img src="/buildingservice-2.webp" alt="Window" style={{ height: '185px' }}/>
             <img src="/wall-page-1.webp" alt="Window" style={{ gridColumn: 'span 2', height: '190px' }}/>
          </div>
          <div className="roof-split__content">
            <p className="roof-eyebrow roof-eyebrow--light">PROFESSIONAL ROOFING SERVICES WILTSHIRE AND SOMERSET</p>
            <h2 className="roof-section-title roof-section-title--white">ROOF WINDOW INSTALLATION IN WILTSHIRE AND SOMERSET</h2>
            <p className="roof-text--light">
              When installing a new roof or carrying out a reroof, EverMont Roofing &amp; Building Ltd can integrate roof windows to improve light and ventilation.
            </p>
            <p className="roof-text--light mt-1">
              Our roofers in Wiltshire and Somerset fit high-quality, double-glazed roof windows that are fully insulated, energy-efficient, and completely weatherproof.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€ KITS (Intro style) â”€â”€ */}
      <section className="roof-intro">
        <div className="container roof-intro__inner">
          <p className="roof-eyebrow">EverMont ROOFING &amp; BUILDING LTD</p>
          <h2 className="roof-section-title roof-section-title--center">PREMIUM FLASHING KITS AND ADVANCED SEALING SYSTEMS</h2>
          <p className="roof-text">
            We use premium flashing kits and advanced sealing systems to ensure every roof window installation is secure, watertight, and fully integrated into your new slate or tile roof. Roof windows are ideal for loft conversions, providing natural light and improving the functionality of your home while maintaining the structural integrity and long-term performance of your new roof.
          </p>
          <div className="bs-social mt-1">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="btn btn--social btn--tiktok">â™ª Follow Our TikTok</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn--social btn--facebook">f Join Our Facebook</a>
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
