import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const overlayBaseStyle = {
  position: 'fixed',
  inset: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const boxBaseStyle = {
  background: 'var(--color-bg)',
  border: '2px solid var(--color-navy)',
  width: '100%',
  overflow: 'auto',
  boxShadow: '0 40px 90px rgba(2,6,20,.5)',
}

const imageWrapBaseStyle = {
  position: 'relative',
  overflow: 'hidden',
  borderBottom: '2px solid var(--color-navy)',
}

const imageBgStyle = { position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center' }

const backButtonBaseStyle = { position: 'absolute', display: 'inline-flex', alignItems: 'center', gap: 8 }

const bulletListStyle = { display: 'flex', flexDirection: 'column', borderTop: '2px solid var(--color-navy)', marginBottom: 34 }

const bulletRowStyle = {
  display: 'flex',
  gap: 14,
  alignItems: 'baseline',
  padding: '14px 4px',
  borderBottom: '1px solid rgba(16,28,61,.15)',
}

const bulletMarkStyle = { color: 'var(--color-blue)', fontWeight: 800 }

const bulletTextStyle = { fontSize: 14.5, lineHeight: 1.6, color: 'var(--color-navy)', fontWeight: 500 }

function DetailModal({ variant, item, label, ctaLabel, ctaHref, onClose }) {
  const isOpen = Boolean(item)
  const isEvents = variant === 'events'

  useEffect(() => {
    if (!isOpen) return undefined
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!item) return null

  return (
    <div
      onClick={onClose}
      className="jad-modal-overlay"
      style={{
        ...overlayBaseStyle,
        background: isEvents ? 'rgba(9,16,38,.65)' : 'rgba(9,16,38,.6)',
        backdropFilter: isEvents ? 'blur(6px)' : 'blur(5px)',
        padding: isEvents ? 'clamp(10px,3vw,40px)' : 'clamp(14px,4vw,48px)',
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="jad-modal-box"
        style={{ ...boxBaseStyle, maxWidth: isEvents ? 1100 : 860, maxHeight: isEvents ? '92vh' : '88vh' }}
      >
        <div style={{ ...imageWrapBaseStyle, height: isEvents ? 'clamp(240px,38vw,420px)' : 'clamp(180px,28vw,280px)' }}>
          <div style={{ ...imageBgStyle, backgroundImage: `url(${item.img})` }} />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: isEvents
                ? 'linear-gradient(0deg, rgba(9,16,38,.6) 0%, rgba(9,16,38,.05) 60%)'
                : 'linear-gradient(0deg, rgba(9,16,38,.55) 0%, rgba(9,16,38,.05) 60%)',
            }}
          />
          <button
            type="button"
            onClick={onClose}
            className="btn-modal-back"
            style={{
              ...backButtonBaseStyle,
              top: isEvents ? 18 : 16,
              left: isEvents ? 18 : 16,
              fontSize: isEvents ? 13.5 : 13,
              padding: isEvents ? '12px 22px' : '11px 20px',
            }}
          >
            ← Back
          </button>
          {isEvents && (
            <div style={{ position: 'absolute', left: 'clamp(20px,4vw,40px)', bottom: 'clamp(18px,3vw,32px)', color: '#fff' }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2.5, color: 'var(--color-blue-accent)', marginBottom: 8 }}>
                {item.num} / {label}
              </div>
              <div style={{ fontSize: 'clamp(28px,4.5vw,46px)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.05 }}>
                {item.title}
              </div>
            </div>
          )}
        </div>
        <div style={{ padding: isEvents ? 'clamp(26px,4.5vw,48px)' : 'clamp(24px,4vw,40px)' }}>
          {!isEvents && (
            <>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2.5, color: 'var(--color-blue)', marginBottom: 10 }}>
                {item.num} / {label}
              </div>
              <h2 style={{ margin: '0 0 16px', fontSize: 'clamp(24px,3.5vw,34px)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.1 }}>
                {item.title}
              </h2>
            </>
          )}
          <p
            style={{
              margin: '0 0 30px',
              fontSize: isEvents ? 'clamp(15px,1.8vw,17px)' : 15,
              lineHeight: 1.8,
              color: 'var(--color-text-muted)',
              maxWidth: isEvents ? 760 : undefined,
            }}
          >
            {item.body}
          </p>
          <div style={bulletListStyle}>
            {item.bullets.map((bullet) => (
              <div key={bullet} style={bulletRowStyle}>
                <span style={bulletMarkStyle}>•</span>
                <span style={bulletTextStyle}>{bullet}</span>
              </div>
            ))}
          </div>
          <Link
            to={ctaHref}
            className="btn-blue-sm"
            style={{ fontWeight: 700, ...(isEvents && { padding: '16px 34px', fontSize: 14.5 }) }}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailModal
