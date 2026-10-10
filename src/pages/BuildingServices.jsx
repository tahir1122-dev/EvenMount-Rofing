import { Link } from 'react-router-dom'
import './BuildingServices.css'

export default function BuildingServicesPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bs-hero">
        <div className="bs-hero__overlay" />
        <div className="container bs-hero__inner">
          <div className="bs-hero__content">
            <p className="hero__eyebrow">Evermount ROOFING &amp; BUILDING LTD</p>
            <h1 className="bs-hero__title">BUILDING SERVICES</h1>
            <p className="bs-hero__desc">
              Transform the appearance and performance of your property with Evermount
              Roofing &amp; Building Ltd, professional builders in Somerset specialising
              in composite and uPVC wall cladding installation.
            </p>
            <div className="hero__buttons">
              <Link to="/#contact" className="btn btn--primary">Contact Us</Link>
              <Link to="/gallery" className="btn btn--outline">See Our Work</Link>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bs-hero__form">
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
                  <option>Building Services</option>
                  <option>Garden Walls</option>
                  <option>Hard Landscaping</option>
                  <option>Garage Conversions</option>
                  <option>Patios</option>
                  <option>Block Paving</option>
                  <option>Wall Cladding</option>
                  <option>New Tile &amp; Slate Roofs</option>
                  <option>New Flat Roofs</option>
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

      {/* ── GARDEN WALLS ── */}
      <section className="bs-intro">
        <div className="container bs-intro__inner">
          <h2 className="bs-intro__title">GARDEN WALLS IN SOMERSET</h2>
          <p>
            Evermount Roofing &amp; Building Ltd are skilled builders in Somerset, we build strong,
            durable, and <span className="text-blue">visually appealing</span> garden walls.
            We build walls using high-quality brick, block, and stone materials to suit your
            property's style and requirements.
          </p>
          <p className="mt-1">
            Every garden wall is carefully designed and built to ensure structural strength
            and a professional finish that complements your outdoor space.
          </p>
        </div>
      </section>

      {/* ── HARD LANDSCAPING ── */}
      <section className="bs-dark-section">
        <div className="bs-dark-section__bg" />
        <div className="container bs-split bs-split--img-left">
          <div className="bs-split__image">
            <img src="/buildingservice-1.webp" alt="Hard Landscaping Somerset" />
          </div>
          <div className="bs-split__content">
            <p className="section-eyebrow bs-eyebrow--light">Evermount ROOFING &amp; BUILDING LTD</p>
            <h2 className="bs-section-title bs-section-title--white">
              HARD LANDSCAPING IN SOMERSET
            </h2>
            <p className="bs-text--light">
              Transform your outdoor space with hard landscaping services from Evermount Roofing &amp;
              Building Ltd. Our builders in Somerset design and install features such as pathways,
              retaining walls, steps, and decorative stonework to create functional and attractive
              garden spaces. We use high-quality materials and precise installation methods to
              ensure long-lasting results. Whether you want a modern or traditional design, our
              team delivers a finished space that enhances both usability and visual appeal.
            </p>
            <Link to="/gallery" className="btn btn--primary mt-1">View our Recent Projects</Link>
          </div>
        </div>
      </section>

      {/* ── GARAGE CONVERSIONS ── */}
      <section className="bs-light-section">
        <div className="bs-light-section__bg" />
        <div className="container bs-split bs-split--img-right">
          <div className="bs-split__content">
            <p className="section-eyebrow">QUALITY WORKMANSHIP</p>
            <h2 className="bs-section-title">GARAGE CONVERSIONS</h2>
            <p>
              Maximise your living space with a garage conversion by Evermount Roofing &amp; Building
              Ltd. Our experienced builders in Somerset transform unused garages into practical
              rooms such as home offices, bedrooms, or living areas.
            </p>
            <p className="mt-1">
              We handle every aspect of the conversion, including insulation, flooring, walls,
              and finishing, ensuring a high-quality result that integrates seamlessly with
              your home.
            </p>
            <Link to="/#contact" className="btn btn--primary mt-1">Contact Us</Link>
          </div>
          <div className="bs-split__image">
            <img src="/buildingservice-2.webp" alt="Garage Conversion Somerset" />
          </div>
        </div>
      </section>

      {/* ── PATIOS ── */}
      <section className="bs-patios">
        <div className="container bs-patios__inner">
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Evermount ROOFING &amp; BUILDING LTD</p>
          <h2 className="bs-section-title bs-section-title--center">PATIOS IN SOMERSET</h2>
          <p className="bs-patios__desc">
            Create the perfect outdoor living area with a professionally installed patio from
            Evermount Roofing &amp; Building Ltd. Our builders in Somerset install patios using natural
            stone, porcelain, and concrete paving slabs in a range of colours and finishes. Each
            patio is built on a solid foundation with proper drainage, ensuring durability and
            long-term performance. Whether you are relaxing or entertaining, our patios are
            designed to enhance your outdoor space and lifestyle.
          </p>
          <div className="bs-social mt-1">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="btn btn--social btn--tiktok">
              ♪ Follow Our TikTok
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn--social btn--facebook">
              f Join Our Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ── BLOCK PAVING ── */}
      <section className="bs-blockpaving">
        <div className="bs-blockpaving__overlay" />
        <div className="container bs-blockpaving__inner">
          <div className="bs-blockpaving__content">
            <p className="section-eyebrow bs-eyebrow--light">PROTECT YOUR PROPERTY AND ADD TO ITS VALUE</p>
            <h2 className="bs-section-title bs-section-title--white">
              BLOCK PAVING IN SOMERSET
            </h2>
            <p className="bs-text--light">
              Evermount Roofing &amp; Building Ltd specialise in block paving for driveways, pathways,
              and patios across Somerset. Our builders install high-quality block paving in a
              wide range of styles, patterns, and colours to suit your property.
            </p>
            <p className="bs-text--light mt-1">
              Every installation is completed with precision, ensuring a level, secure surface
              that looks great and performs well for years to come.
            </p>
            <Link to="/#quote" className="btn btn--primary mt-2">Get Your FREE Quote</Link>
          </div>
          <div className="bs-blockpaving__video">
            <div className="bs-video-thumb">
              <img src="/buildingservice-1.webp" alt="Evermount Roofing Team" />
              <div className="bs-video-thumb__play">
                <span>▶</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
