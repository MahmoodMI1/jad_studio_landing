import { useEffect, useState } from 'react'
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

const galleryGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))',
  gap: 12,
  marginBottom: 30,
}

const galleryThumbStyle = {
  cursor: 'zoom-in',
  border: '2px solid var(--color-navy)',
  overflow: 'hidden',
  height: 170,
  background: '#e9ecf5',
}

const lightboxOverlayStyle = {
  position: 'fixed',
  inset: 0,
  zIndex: 200,
  background: 'rgba(4,8,20,.88)',
  backdropFilter: 'blur(4px)',
  cursor: 'zoom-out',
}

function DetailModal({ variant, item, label, ctaLabel, ctaHref, onClose }) {
  const isOpen = Boolean(item)
  const isEvents = variant === 'events'
  const isProducts = variant === 'products'
  const hasGallery = isProducts && item?.gallery?.length > 0
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (!isOpen) {
      setLightbox(null)
      return undefined
    }
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return
      if (lightbox) setLightbox(null)
      else onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, lightbox, onClose])

  if (!item) return null

  return (
    <div
      onClick={onClose}
      className="jad-modal-overlay"
      style={{
        ...overlayBaseStyle,
        background: isEvents || isProducts ? 'rgba(9,16,38,.65)' : 'rgba(9,16,38,.6)',
        backdropFilter: isEvents || isProducts ? 'blur(6px)' : 'blur(5px)',
        padding: isEvents ? 'clamp(10px,3vw,40px)' : 'clamp(14px,4vw,48px)',
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="jad-modal-box"
        style={{
          ...boxBaseStyle,
          maxWidth: isEvents ? 1100 : isProducts ? 900 : 860,
          maxHeight: isEvents ? '92vh' : isProducts ? '90vh' : '88vh',
        }}
      >
        <div
          style={{
            ...imageWrapBaseStyle,
            height: isEvents ? 'clamp(240px,38vw,420px)' : isProducts ? 'clamp(200px,32vw,320px)' : 'clamp(180px,28vw,280px)',
          }}
        >
          <div
            style={{
              ...imageBgStyle,
              backgroundImage: `url(${item.img})`,
              ...(isProducts && { backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor: '#0b1330' }),
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                isEvents || isProducts
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
          {(isEvents || isProducts) && (
            <div
              style={{
                position: 'absolute',
                left: isProducts ? 'clamp(20px,4vw,36px)' : 'clamp(20px,4vw,40px)',
                bottom: isProducts ? 'clamp(16px,3vw,26px)' : 'clamp(18px,3vw,32px)',
                color: '#fff',
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 2.5, color: 'var(--color-blue-accent)', marginBottom: 8 }}>
                {item.num || item.tag} / {label}
              </div>
              <div style={{ fontSize: 'clamp(28px,4.5vw,46px)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.05 }}>
                {item.title || item.name}
              </div>
            </div>
          )}
        </div>
        <div style={{ padding: isEvents ? 'clamp(26px,4.5vw,48px)' : 'clamp(24px,4vw,40px)' }}>
          {!isEvents && !isProducts && (
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
              margin: isProducts ? '0 0 26px' : '0 0 30px',
              fontSize: isEvents ? 'clamp(15px,1.8vw,17px)' : 15,
              lineHeight: 1.8,
              color: 'var(--color-text-muted)',
              maxWidth: isEvents ? 760 : isProducts ? 680 : undefined,
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
          {hasGallery && (
            <div style={{ marginBottom: 30 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 2, color: 'var(--color-blue)', marginBottom: 12 }}>
                IN ACTION
              </div>
              <div style={galleryGridStyle}>
                {item.gallery.map((shot) => (
                  <div
                    key={shot.thumb}
                    role="button"
                    tabIndex={0}
                    onClick={(event) => {
                      event.stopPropagation()
                      setLightbox(shot.full)
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setLightbox(shot.full)
                      }
                    }}
                    className="jad-gallery-thumb"
                    style={{ ...galleryThumbStyle, backgroundImage: `url(${shot.thumb})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                ))}
              </div>
            </div>
          )}
          <Link
            to={ctaHref}
            className="btn-blue-sm"
            style={{ fontWeight: 700, ...(isEvents && { padding: '16px 34px', fontSize: 14.5 }) }}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {lightbox && (
        <div
          onClick={(event) => {
            event.stopPropagation()
            setLightbox(null)
          }}
          className="jad-modal-overlay"
          style={lightboxOverlayStyle}
        >
          <div
            style={{
              position: 'absolute',
              top: 48,
              left: 48,
              right: 48,
              bottom: 48,
              backgroundImage: `url(${lightbox})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setLightbox(null)
            }}
            className="btn-modal-back"
            style={{ position: 'absolute', top: 18, right: 18, padding: '11px 20px', fontSize: 13 }}
          >
            ✕ Close
          </button>
        </div>
      )}
    </div>
  )
}

export default DetailModal
