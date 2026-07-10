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
  gap: 24,
  flexWrap: 'wrap',
}

function Footer({ bordered = false }) {
  return (
    <div style={bordered ? borderedWrapStyle : wrapStyle}>
      <div className="container" style={innerStyle}>
        <div style={contactsStyle}>
          <span>+971 50 994 1041</span>
          <span>+963 994 396 457</span>
          <span>orabi_65@hotmail.com</span>
          <span>Ajman, UAE</span>
        </div>
        <div>© 2026 JAD Studio L.L.C International</div>
      </div>
    </div>
  )
}

export default Footer
