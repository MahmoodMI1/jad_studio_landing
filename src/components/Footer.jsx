const wrapStyle = {
  background: 'var(--color-navy)',
  color: 'var(--color-text-footer)',
}

const borderedWrapStyle = {
  ...wrapStyle,
  borderTop: '1px solid rgba(255,255,255,.15)',
}

const innerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 20,
  flexWrap: 'wrap',
  fontSize: 12,
  paddingTop: 20,
  paddingBottom: 20,
}

const contactsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  flexWrap: 'wrap',
}

const socialLinksStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 14,
}

function Footer({ bordered = false }) {
  return (
    <div style={bordered ? borderedWrapStyle : wrapStyle}>
      <div className="container" style={innerStyle}>
        <div style={contactsStyle}>
          <span>orabi_65@hotmail.com</span>
          <span>Ajman, UAE</span>
          <div style={socialLinksStyle}>
            <a
              href="https://www.instagram.com/jad.std.intl/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
        <div>© 2026 JAD Studio L.L.C International</div>
      </div>
    </div>
  )
}

export default Footer
