import { Link } from 'react-router-dom'

const lightInnerStyle = {
  maxWidth: 'var(--content-max-width)',
  margin: '0 auto',
  padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,48px)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 32,
  flexWrap: 'wrap',
}

const lightHeadingStyle = {
  fontSize: 26,
  fontWeight: 800,
  letterSpacing: '-.5px',
}

const lightPrimaryStyle = {
  display: 'inline-block',
  padding: '16px 34px',
  background: 'var(--color-navy)',
  color: '#fff',
  fontSize: 14.5,
  fontWeight: 600,
}

const darkWrapStyle = {
  background: 'var(--color-navy)',
  color: '#fff',
}

const darkInnerStyle = {
  maxWidth: 'var(--content-max-width)',
  margin: '0 auto',
  padding: 'clamp(40px,6vw,72px) clamp(20px,4vw,48px)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 32,
  flexWrap: 'wrap',
}

const darkHeadingStyle = {
  fontSize: 30,
  fontWeight: 800,
  letterSpacing: '-.5px',
  maxWidth: 520,
  textWrap: 'balance',
}

const accentStyle = { color: 'var(--color-blue)' }

const actionsStyle = { display: 'flex', gap: 14, flexWrap: 'wrap' }

const darkPrimaryStyle = {
  display: 'inline-block',
  padding: '15px 30px',
  background: 'var(--color-blue)',
  color: '#fff',
  fontSize: 14,
  fontWeight: 600,
}

const darkSecondaryStyle = {
  display: 'inline-block',
  padding: '15px 30px',
  border: '2px solid rgba(255,255,255,.4)',
  color: '#fff',
  fontSize: 14,
  fontWeight: 600,
}

function CTAButton({ href, style, children }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} style={style}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} style={style}>
      {children}
    </a>
  )
}

function CTABand({ variant = 'light', heading, accent, primary, secondary }) {
  if (variant === 'dark') {
    return (
      <div style={darkWrapStyle}>
        <div style={darkInnerStyle}>
          <div style={darkHeadingStyle}>{heading}</div>
          <div style={actionsStyle}>
            <CTAButton href={primary.href} style={darkPrimaryStyle}>
              {primary.label}
            </CTAButton>
            {secondary && (
              <CTAButton href={secondary.href} style={darkSecondaryStyle}>
                {secondary.label}
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={lightInnerStyle}>
      <div style={lightHeadingStyle}>
        {heading} {accent && <span style={accentStyle}>{accent}</span>}
      </div>
      <CTAButton href={primary.href} style={lightPrimaryStyle}>
        {primary.label}
      </CTAButton>
    </div>
  )
}

export default CTABand
