import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/events', label: 'Events' },
  { to: '/products', label: 'Products' },
]

const navWrapStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 50,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 24,
  padding: '14px clamp(16px,4vw,48px)',
  background: 'rgba(247,247,244,.92)',
  backdropFilter: 'blur(10px)',
  borderBottom: '2px solid var(--color-navy)',
}

const logoWrapStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  color: 'var(--color-navy)',
}

const logoMarkStyle = {
  fontSize: 26,
  fontWeight: 800,
  letterSpacing: 6,
  lineHeight: 1,
  borderBottom: '3px solid var(--color-blue)',
  paddingBottom: 4,
}

const logoSubStyle = {
  fontSize: 8.5,
  fontWeight: 500,
  letterSpacing: 1.4,
  color: 'var(--color-text-muted-2)',
}

const desktopLinksStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 'clamp(12px,2.5vw,28px)',
  fontSize: 13.5,
  fontWeight: 600,
}

const mobileWrapStyle = { display: 'flex', alignItems: 'center' }

const hamburgerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  background: 'none',
  border: '2px solid var(--color-navy)',
  padding: '10px 9px',
  cursor: 'pointer',
}

const hamburgerBarStyle = {
  display: 'block',
  width: 22,
  height: 2.5,
  background: 'var(--color-navy)',
}

const mobileMenuStyle = {
  flexBasis: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderTop: '2px solid var(--color-navy)',
  marginTop: 8,
}

const mobileLinkStyle = {
  padding: '15px 4px',
  fontSize: 15.5,
  fontWeight: 600,
  color: 'var(--color-navy)',
  borderBottom: '1px solid rgba(16,28,61,.12)',
}

const mobileQuoteLinkStyle = {
  padding: '15px 4px',
  fontSize: 15.5,
  fontWeight: 700,
  color: 'var(--color-blue)',
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div style={navWrapStyle}>
      <Link to="/" style={logoWrapStyle} onClick={closeMenu}>
        <span style={logoMarkStyle}>JAD</span>
        <span style={logoSubStyle}>STUDIO L.L.C INTERNATIONAL</span>
      </Link>

      <div className="jad-desk" style={desktopLinksStyle}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn-quote">
          Contact Us
        </Link>
      </div>

      <div className="jad-mob" style={mobileWrapStyle}>
        <button
          type="button"
          aria-label="Menu"
          style={hamburgerStyle}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span style={hamburgerBarStyle}></span>
          <span style={hamburgerBarStyle}></span>
          <span style={hamburgerBarStyle}></span>
        </button>
      </div>

      {menuOpen && (
        <div className="jad-mob" style={mobileMenuStyle}>
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} style={mobileLinkStyle} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" style={mobileQuoteLinkStyle} onClick={closeMenu}>
            Contact Us →
          </Link>
        </div>
      )}
    </div>
  )
}

export default NavBar
