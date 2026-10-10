import { Link } from 'react-router-dom'
import { Trophy, CheckCircle, PhoneCall, PoundSterling, Star } from 'lucide-react'
const services = [
  {
    title: 'NEW ROOFS',
    desc: 'Upgrade your property with expert roofers in Wiltshire and Somerset at EverMont Roofing & Building Ltd. We install new tile and slate roofs for new builds, full reroofs, and replacements, delivering strong, weather-resistant roofing systems.',
    img: '/gallery7.jpg',
    link: '/roofing-services/new-roofs',
  },
  {
    title: 'FLAT ROOFS',
    desc: 'EverMont Roofing & Building Ltd are trusted roofers specialising in EPDM rubber, GRP fibreglass, and torch-on felt flat roofing systems designed for durability, low maintenance, and long-term performance.',
    img: '/flat-roof.jpg',
    link: '/roofing-services/flat-roofs',
  },
  {
    title: 'ROOF REPAIRS',
    desc: 'Do not let minor issues turn into costly problems. EverMont Roofing & Building Ltd provides fast and effective roof and chimney repairs, including emergency callouts to keep your property safe and secure.',
    img: '/gallery9.jpg',
    link: '/roofing-services/roof-repairs',
  },
  {
    title: 'FASCIA\'S, SOFFITS, GUTTERING',
    desc: 'Protect your home with expert roofers in Wiltshire and Somerset offering high-quality gutters, fascia, and soffits. We install durable, low-maintenance systems that improve drainage, prevent damage, and enhance kerb appeal.',
    img: '/gallery6.jpg',
    link: '/roofing-services/gutters',
  },
  {
    title: 'DRY FIX UPGRADES',
    desc: 'Expert roofers in Wiltshire and Somerset installing dry fix ridge, hip, and verge systems. These modern, maintenance-free solutions improve roof durability, prevent mortar failure, and improve ventilation.',
    img: '/dryfix.jpg',
    link: '/roofing-services/dry-fix',
  },
  // {
  //   title: 'WALL CLADDING',
  //   desc: 'Transform the look of your home with professional builders in Wiltshire and Somerset offering modern composite wall cladding. Available in a range of colours, it adds style, insulation, and long-lasting protection.',
  //   img: '/service.jpg',
  //   link: '/wall-cladding',
  // },
]

const projectImgs = [
  '/gallery6.jpg',
  '/gallery7.jpg',
  '/wall-page-1.webp',
  '/gallery8.jpg',
  '/wall-images-2.webp',
  '/gallery9.jpg',
]

const reviews = [
  { name: 'John Davies', stars: 5, text: 'Excellent service from start to finish. EverMont replaced our old roof and the quality is outstanding. Highly recommend!' },
  { name: 'Sarah Williams', stars: 5, text: 'Very professional team. They arrived on time and completed the flat roof repair quickly and efficiently. Great value for money.' },
  { name: 'Mike Evans', stars: 5, text: "Used EverMont for wall cladding and couldn't be happier. The house looks amazing and the workmanship is first class." },
  { name: 'Emma Thomas', stars: 5, text: 'Fast, reliable and great quality work. They sorted our chimney repair the same day. Would definitely use again.' },
]

export default function HomePage() {
  return (
    <main>
      {/* â”€â”€ HERO â”€â”€ */}
      <section className="hero" id="home">
        <div className="hero__overlay" />
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">EVERMONT ROOFING</p>
            <h1 className="hero__title">BUILT HIGHER.<br />BUILT TO LAST.</h1>
            <div className="hero__desc" style={{ fontSize: '1.05rem', fontWeight: 500 }}>
              <p style={{ marginBottom: '1rem', fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>Your trusted specialists in all aspects of roofing.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', lineHeight: 1.8 }}>
                <li><CheckCircle size={16} color="var(--orange)" style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Complete Roof Replacements</li>
                <li><CheckCircle size={16} color="var(--orange)" style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Flat Roofing Solutions</li>
                <li><CheckCircle size={16} color="var(--orange)" style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Fascia's, Soffits, Guttering</li>
                <li><CheckCircle size={16} color="var(--orange)" style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Roof Repairs &amp; Maintenance</li>
              </ul>
              <p style={{ marginBottom: '0.25rem' }}>Quality craftsmanship. Reliable service. Roofing built to last.</p>
              <p>Protecting your home, one roof at a time.</p>
            </div>
            <div className="hero__buttons">
              <Link to="#contact" className="btn btn--outline">Contact Us</Link>
              <Link to="/gallery" className="btn btn--outline">See Our Work</Link>
              <Link to="#testimonials" className="btn btn--white">Reviews</Link>
              <Link to="#services" className="btn btn--primary">Services</Link>
            </div>
          </div>
          <div className="hero__form" id="quote">
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
                <textarea rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--full">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* ── ROOFING NEAR YOU ── */}
      <section className="near-you">
        <div className="container near-you__inner">
          <div className="near-you__image">
            <img src="/team.jpg" alt="EverMont Roofing Team" />
          </div>
          <div className="near-you__content">
            <h2 className="section-title">ROOFING SERVICES NEAR YOU</h2>
            <p>
              We are trusted roofers at EverMont Roofing Ltd serving Wiltshire and Somerset,
              giving our customers the peace of mind they deserve from a quality local
              roofer. Our team of qualified professionals are available to handle any
              roofing challenge you may face.
            </p>
            <Link to="/roofing-services/new-roofs" className="btn btn--primary mt-1">Find Out More</Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ SERVICES â”€â”€ */}
      <section className="services" id="services">
        <div className="container">
          <p className="section-eyebrow">EverMont ROOFING &amp; BUILDING LTD</p>
          <h2 className="section-heading">OUR SERVICES</h2>
          <div className="services__grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-card__img">
                  <img src={s.img} alt={s.title} loading="lazy"
                    onError={e => { e.target.src = '/Home-Banner.jpg' }} />
                  <div className="service-card__overlay" />
                  <h3 className="service-card__title">{s.title}</h3>
                </div>
                <div className="service-card__body">
                  <p>{s.desc}</p>
                  <Link to={s.link} className="btn btn--primary btn--sm">Find Out More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ BUILDING SERVICES â”€â”€ */}
      <section className="building" id="building">
        <div className="container building__inner">
          <div className="building__content">
            <p className="section-eyebrow">QUALITY WORKMANSHIP</p>
            <h2 className="section-heading left">OUR BUILDING SERVICES</h2>
            <p>
              Looking for reliable builders in Wiltshire and Somerset? EverMont Roofing &amp; Building Ltd
              delivers a full range of building services, including garden walls, garage
              conversions, patios, and block paving.
            </p>
            <p className="mt-1">
              We help you improve and add value to your property with expert workmanship.
            </p>
            <div className="building__buttons mt-1">
              <Link to="/building-services" className="btn btn--primary">Find Out More</Link>
              <Link to="#quote" className="btn btn--outline-dark">Request a Quote</Link>
            </div>
          </div>
          <div className="building__image">
            <img src="/wall-page-1.webp" alt="Building Services" />
          </div>
        </div>
      </section>

      {/* â”€â”€ RECENT PROJECTS â”€â”€ */}
      <section className="projects" id="gallery">
        <div className="container projects__inner">
          <div className="projects__gallery">
            {projectImgs.map((src, i) => (
              <div className="projects__img-wrap" key={i}>
                <img src={src} alt={`Project ${i + 1}`} loading="lazy"
                  onError={e => { e.target.src = '/Home-Banner.jpg' }} />
              </div>
            ))}
          </div>
          <div className="projects__content">
            <p className="section-eyebrow">GALLERY</p>
            <h2 className="section-heading left">OUR RECENT PROJECTS</h2>
            <p>
              See the quality for yourself. EverMont Roofing &amp; Building Ltd showcases
              completed projects from trusted roofers in Wiltshire and Somerset and experienced
              builders in Wiltshire and Somerset.
            </p>
            <p className="mt-1">
              Our gallery highlights the high standards, attention to detail, and
              professional finish you can expect on every job.
            </p>
            <Link to="/gallery" className="btn btn--primary mt-1">See Our Work</Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ WHY CHOOSE â”€â”€ */}
      <section className="why-choose">
        <div className="container">
          <p className="section-eyebrow">OUR PROMISE</p>
          <h2 className="section-heading">WHY CHOOSE EverMont ROOFING &amp; BUILDING LTD IN WILTSHIRE AND SOMERSET?</h2>
          <div className="why-choose__grid">
            {[
              { icon: <Trophy size={48} strokeWidth={1.5} />, title: 'Experienced Team', desc: 'Over 20 years of professional roofing experience in Wiltshire and Somerset.' },
              { icon: <CheckCircle size={48} strokeWidth={1.5} />, title: 'Quality Guaranteed', desc: 'We only use premium materials and deliver quality craftsmanship on every job.' },
              { icon: <PhoneCall size={48} strokeWidth={1.5} />, title: 'Fast Response', desc: 'Emergency callouts available. We respond quickly to protect your property.' },
              { icon: <PoundSterling size={48} strokeWidth={1.5} />, title: 'Competitive Pricing', desc: 'Honest, transparent pricing with no hidden charges. Free quotes available.' },
            ].map((r, i) => (
              <div className="why-card" key={i}>
                <div className="why-card__icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
          <Link to="#quote" className="btn btn--primary mt-2">Get A Free Quote Today</Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2 className="section-heading">WHAT OUR CUSTOMERS SAY...</h2>
          <div className="testimonials__grid">
            {reviews.map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-card__stars">
                  {Array.from({ length: r.stars }).map((_, idx) => (
                    <Star key={idx} size={16} fill="#FFB800" color="#FFB800" />
                  ))}
                </div>
                <p className="review-card__text">"{r.text}"</p>
                <p className="review-card__name">— {r.name}</p>
                <div className="review-card__source">
                  <span className="google-g">G</span> Google Review
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}


