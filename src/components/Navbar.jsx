import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [roofingOpen, setRoofingOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* Left Logo */}
        <Link to="/" className="navbar__logo">
          <img src="/logo-2.jpg" alt="Evermount Roofing" style={{ height: '80px', borderRadius: '4px' }} />
        </Link>

        {/* Right Content */}
        <div className="header-right">
          
          <div className="header-contact">
            <a href="tel:07821573382">
              <span className="contact-icon">📱</span> 07821 573 382
            </a>
            <a href="mailto:asap-roofing@hotmail.com">
              <span className="contact-icon">✉</span> asap-roofing@hotmail.com
            </a>
          </div>

          <nav className="navbar-nav">
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>

            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li>
                <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}>HOME</NavLink>
              </li>
              <li
                className="has-dropdown"
                onMouseEnter={() => setRoofingOpen(true)}
                onMouseLeave={() => setRoofingOpen(false)}
              >
                <span className="nav-link" style={{ cursor: 'pointer' }}>
                  ROOFING SERVICES <span className="arrow">▾</span>
                </span>
                <ul className={`dropdown ${roofingOpen ? 'open' : ''}`}>
                  <li><Link to="/roofing-services/new-roofs" onClick={() => { setMenuOpen(false); setRoofingOpen(false) }}>New Tile &amp; Slate Roofs</Link></li>
                  <li><Link to="/roofing-services/flat-roofs" onClick={() => { setMenuOpen(false); setRoofingOpen(false) }}>New Flat Roofs</Link></li>
                  <li><Link to="/roofing-services/roof-repairs" onClick={() => { setMenuOpen(false); setRoofingOpen(false) }}>Roof &amp; Chimney Repairs</Link></li>
                  <li><Link to="/roofing-services/gutters" onClick={() => { setMenuOpen(false); setRoofingOpen(false) }}>Gutters, Fascias &amp; Soffits</Link></li>
                  <li><Link to="/roofing-services/dry-fix" onClick={() => { setMenuOpen(false); setRoofingOpen(false) }}>Dry Fix Upgrades</Link></li>
                </ul>
              </li>
              <li>
                <NavLink to="/wall-cladding" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}>WALL CLADDING</NavLink>
              </li>
              <li>
                <NavLink to="/building-services" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}>BUILDING SERVICES</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}>GALLERY</NavLink>
              </li>
              <li>
                <Link to="/#quote" className="nav-cta" onClick={() => setMenuOpen(false)}>
                  Request a FREE Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
