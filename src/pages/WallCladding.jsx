import { Link } from 'react-router-dom'
import '../pages/WallCladding.css'

export default function WallCladdingPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="wc-hero">
        <div className="wc-hero__overlay" />
        <div className="container wc-hero__inner">
          <div className="wc-hero__content">
            <p className="hero__eyebrow">Evermount ROOFING &amp; BUILDING LTD</p>
            <h1 className="wc-hero__title">
              WALL CLADDING<br />SERVICES IN SOMERSET
            </h1>
            <p className="wc-hero__desc">
              Transform the appearance and performance of your property with
              Evermount Roofing &amp; Building Ltd, professional builders in Somerset
              specialising in composite and uPVC wall cladding installation.
            </p>
            <div className="hero__buttons">
              <Link to="/#contact" className="btn btn--primary">Contact Us</Link>
              <Link to="/gallery" className="btn btn--outline">See Our Work</Link>
            </div>
          </div>

          {/* Quote Form */}
          <div className="wc-hero__form">
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
                  <option>Wall Cladding</option>
                  <option>New Tile &amp; Slate Roofs</option>
                  <option>New Flat Roofs</option>
                  <option>Roof &amp; Chimney Repairs</option>
                  <option>Gutters, Fascias &amp; Soffits</option>
                  <option>Dry Fix Upgrades</option>
                  <option>Building Services</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Message" />
              </div>
              <button type="submit" className="btn btn--primary btn--full">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BUILDERS ── */}
      <section className="wc-trusted">
        <div className="container wc-trusted__inner">
          <h2 className="wc-trusted__title">TRUSTED BUILDERS IN SOMERSET</h2>
          <p>
            Evermount Roofing &amp; Building Ltd are trusted builders in Somerset for{' '}
            <span className="text-blue">composite and uPVC wall cladding installation</span>.
            Improve your home's appearance, insulation, and protection with our{' '}
            <span className="text-blue">high-quality, low-maintenance cladding solutions</span>.
            Contact Evermount Roofing &amp; Building Ltd today for a free, no-obligation quote
            and discover how our expert{' '}
            <span className="text-blue">builders in Somerset</span> can transform your{' '}
            <span className="text-blue">property</span> with modern wall cladding.
          </p>
        </div>
      </section>

      {/* ── COMPOSITE CLADDING ── */}
      <section className="wc-composite">
        <div className="container wc-split wc-split--img-left">
          <div className="wc-split__image">
            <img src="/wall-page-1.webp" alt="Composite Wall Cladding Somerset" />
          </div>
          <div className="wc-split__content">
            <p className="section-eyebrow">Evermount ROOFING &amp; BUILDING LTD</p>
            <h2 className="wc-section-title">COMPOSITE WALL CLADDING</h2>
            <p>
              Evermount Roofing &amp; Building Ltd are experienced builders in Somerset
              installing modern composite wall cladding systems. Composite cladding is
              manufactured using a blend of recycled materials and high-performance
              polymers, creating a strong, weather-resistant, and visually appealing finish.
            </p>
            <h3 className="wc-sub-title mt-1">BENEFITS OF COMPOSITE CLADDING:</h3>
            <ul className="wc-list mt-1">
              <li>Extremely durable and weather-resistant</li>
              <li>Low maintenance — no painting or staining required</li>
              <li>Excellent thermal and acoustic insulation</li>
              <li>Available in a wide range of colours and finishes</li>
              <li>Environmentally friendly — made from recycled materials</li>
            </ul>
            <p className="mt-1">
              Our composite cladding installations are fitted with precision, using
              secure fixing systems and breathable membranes to ensure long-term
              performance and protection for your property.
            </p>
            <Link to="/gallery" className="btn btn--primary mt-1">View our Recent Projects</Link>
          </div>
        </div>
      </section>

      {/* ── uPVC CLADDING ── */}
      <section className="wc-upvc">
        <div className="container wc-split wc-split--img-right">
          <div className="wc-split__content">
            <p className="section-eyebrow">QUALITY WORKMANSHIP</p>
            <h2 className="wc-section-title">UPVC WALL CLADDING</h2>
            <p>
              For a cost-effective and practical solution, Evermount Roofing &amp; Building Ltd
              install high-quality uPVC external wall cladding in Somerset. uPVC cladding is
              lightweight, durable, and designed to withstand harsh weather conditions while
              maintaining its appearance over time.
            </p>
            <p className="mt-1">
              Our builders in Somerset ensure every uPVC cladding installation is securely
              fitted, providing a neat, clean finish that protects your home while enhancing
              its external appearance.
            </p>
            <Link to="/#contact" className="btn btn--primary mt-1">Contact Us</Link>
          </div>
          <div className="wc-split__image">
            <img src="/wall-images-2.webp" alt="uPVC Wall Cladding Somerset" />
          </div>
        </div>
      </section>

      {/* ── COLOURS & FINISHES ── */}
      <section className="wc-colours">
        <div className="container wc-colours__inner">
          <p className="section-eyebrow">Evermount ROOFING &amp; BUILDING LTD</p>
          <h2 className="wc-section-title wc-section-title--center">
            COLOURS, FINISHES &amp; MODERN DESIGNS
          </h2>
          <p className="wc-colours__desc">
            Evermount Roofing &amp; Building Ltd offer a wide range of cladding styles to suit both
            traditional and modern properties. From woodgrain-effect composite panels to sleek,
            contemporary finishes, our{' '}
            <span className="text-blue">builders in Somerset</span> help you choose the perfect
            design for your home. With multiple colour options available, you can create a unique
            look that improves kerb appeal and complements your property's existing features.
            Every installation is completed with attention to detail, ensuring a{' '}
            <span className="text-blue">high-quality, professional finish</span>.
          </p>
          <div className="wc-colours__swatches">
            {['Anthracite Grey', 'Slate Grey', 'Cream White', 'Dark Brown', 'Chartwell Green', 'Black'].map((c, i) => (
              <div className="swatch-card" key={i}>
                <div className={`swatch-card__color swatch-${i}`} />
                <span>{c}</span>
              </div>
            ))}
          </div>
          <div className="wc-colours__social mt-2">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="btn btn--social btn--tiktok">
              ♪ Follow Our TikTok
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn--social btn--facebook">
              f Join Our Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="wc-why">
        <div className="container wc-why__inner">
          <div className="wc-why__content">
            <p className="section-eyebrow wc-eyebrow--light">PROTECT YOUR PROPERTY AND ADD TO ITS VALUE</p>
            <h2 className="wc-section-title wc-section-title--white">
              WHY CHOOSE Evermount ROOFING &amp;<br />BUILDING LTD IN SOMERSET?
            </h2>
            <p className="wc-why__text">
              Evermount Roofing &amp; Building Ltd provide expert cladding installation for homes
              across Somerset and surrounding areas. Our experienced builders ensure every
              project is completed safely, efficiently, and to the highest standards.
            </p>
            <p className="wc-why__text mt-1">
              From preparation and framework installation to final fitting and finishing,
              we handle every aspect of the project with care and precision. Whether you are
              upgrading your home's exterior or completing a new build, our team delivers
              results you can rely on.
            </p>
            <Link to="/#quote" className="btn btn--primary mt-2">Get Your FREE Quote</Link>
          </div>
          <div className="wc-why__video">
            <div className="wc-video-thumb">
              <img src="/wall-page-1.webp" alt="Evermount Roofing Team at Work" />
              <div className="wc-video-thumb__play">
                <span>▶</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section className="wc-gallery-strip">
        <div className="container">
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>OUR WORK</p>
          <h2 className="section-heading">WALL CLADDING PROJECTS</h2>
          <div className="wc-gallery-grid">
            {['/wall-page-1.webp', '/wall-images-2.webp', '/wall-page-1.webp', '/wall-images-2.webp'].map((src, i) => (
              <div className="wc-gallery-item" key={i}>
                <img src={src} alt={`Wall Cladding Project ${i + 1}`} />
                <div className="wc-gallery-item__overlay">
                  <span>View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
