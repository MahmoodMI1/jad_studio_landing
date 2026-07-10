import { Link } from 'react-router-dom'
import EqualizerBars from './EqualizerBars'

const lightInnerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 32,
  flexWrap: 'wrap',
  paddingTop: 'clamp(40px,6vw,80px)',
  paddingBottom: 'clamp(40px,6vw,80px)',
}

const lightHeadingStyle = {
  fontSize: 26,
  fontWeight: 800,
  letterSpacing: '-.5px',
}

const darkWrapStyle = {
  background: 'var(--color-navy)',
  color: '#fff',
}

const darkInnerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 32,
  flexWrap: 'wrap',
  paddingTop: 'clamp(40px,6vw,72px)',
  paddingBottom: 'clamp(40px,6vw,72px)',
}

const darkHeadingGroupStyle = { display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 520 }

const darkHeadingStyle = {
  fontSize: 30,
  fontWeight: 800,
  letterSpacing: '-.5px',
  textWrap: 'balance',
}

const accentStyle = { color: 'var(--color-blue)' }

const actionsStyle = { display: 'flex', gap: 14, flexWrap: 'wrap' }

function CTAButton({ href, className, children }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

function CTABand({ variant = 'light', heading, accent, primary, secondary, showEqualizer = false }) {
  if (variant === 'dark') {
    return (
      <div style={darkWrapStyle}>
        <div className="container" style={darkInnerStyle}>
          <div style={darkHeadingGroupStyle}>
            {showEqualizer && <EqualizerBars color="var(--color-blue-accent)" />}
            <div style={darkHeadingStyle}>{heading}</div>
          </div>
          <div style={actionsStyle}>
            <CTAButton href={primary.href} className="btn-blue-sm">
              {primary.label}
            </CTAButton>
            {secondary && (
              <CTAButton href={secondary.href} className="btn-outline-white">
                {secondary.label}
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container" style={lightInnerStyle}>
      <div style={lightHeadingStyle}>
        {heading} {accent && <span style={accentStyle}>{accent}</span>}
      </div>
      <CTAButton href={primary.href} className="btn-navy">
        {primary.label}
      </CTAButton>
    </div>
  )
}

export default CTABand
