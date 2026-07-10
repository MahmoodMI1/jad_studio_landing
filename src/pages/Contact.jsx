import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../emailjsConfig'

const TOPICS = [
  'Event production',
  'Sound installation',
  'Lighting',
  'Home theater',
  'Recording / composing',
  'Live streaming',
  'Buy / rent gear',
]

const sectionStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
  gap: 'clamp(36px,5vw,72px)',
  alignItems: 'center',
  paddingTop: 'clamp(40px,6vw,80px)',
  paddingBottom: 'clamp(48px,7vw,96px)',
}

const titleStyle = {
  margin: '0 0 24px',
  fontSize: 'clamp(32px,5vw,50px)',
  fontWeight: 800,
  lineHeight: 1.06,
  letterSpacing: '-1.5px',
  textWrap: 'balance',
}

const introStyle = { margin: '0 0 40px', fontSize: 15.5, lineHeight: 1.75, color: 'var(--color-text-muted)' }

const cardsWrapStyle = { display: 'flex', flexDirection: 'column', gap: 18 }

const contactCardStyle = {
  border: '2px solid var(--color-navy)',
  background: '#fff',
  padding: '22px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 18,
  flexWrap: 'wrap',
}

const contactCardLabelColStyle = { display: 'flex', flexDirection: 'column', gap: 5 }

const contactCardLabelStyle = { fontSize: 10.5, fontWeight: 800, letterSpacing: 2, color: 'var(--color-blue)' }

const contactCardPhoneStyle = { fontSize: 18, fontWeight: 700 }

const emailCardStyle = { ...contactCardStyle, flexDirection: 'column', alignItems: 'flex-start', gap: 5 }

const emailLinkStyle = { fontSize: 18, fontWeight: 700, overflowWrap: 'anywhere' }

const locationsCardStyle = {
  border: '2px solid var(--color-navy)',
  background: 'var(--color-navy)',
  color: '#fff',
  padding: '22px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
}

const locationsLabelStyle = { fontSize: 10.5, fontWeight: 800, letterSpacing: 2, color: 'var(--color-blue-accent)' }

const locationRowStyle = { display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline' }

const locationDividerStyle = { height: 1, background: 'rgba(255,255,255,.15)' }

const locationPrimaryStyle = { fontSize: 16, fontWeight: 700 }

const locationSecondaryStyle = { fontSize: 16, fontWeight: 700, color: 'var(--color-text-on-dark-muted)' }

const statusOpenStyle = { fontSize: 11.5, fontWeight: 700, letterSpacing: 1, color: 'var(--color-open)' }

const statusComingSoonStyle = { fontSize: 11.5, fontWeight: 700, letterSpacing: 1, color: 'var(--color-blue-accent)' }

const formCardStyle = { border: '2px solid var(--color-navy)', background: '#fff', padding: 'clamp(22px,4vw,40px)' }

const successWrapStyle = { display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', padding: '24px 0' }

const checkIconStyle = {
  width: 52,
  height: 52,
  background: 'var(--color-blue)',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  fontWeight: 800,
}

const successTitleStyle = { fontSize: 24, fontWeight: 800, letterSpacing: '-.5px' }

const successTextStyle = { fontSize: 14.5, lineHeight: 1.7, color: 'var(--color-text-muted)' }

const successLinkStyle = { fontWeight: 700 }

const resetButtonStyle = {
  marginTop: 8,
  padding: '12px 24px',
  background: 'none',
  border: '2px solid var(--color-navy)',
  color: 'var(--color-navy)',
  fontFamily: "'Poppins',sans-serif",
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
}

const formInnerStyle = { display: 'flex', flexDirection: 'column', gap: 22 }

const formHeadingStyle = { fontSize: 20, fontWeight: 800, letterSpacing: '-.3px' }

const fieldsRowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
  gap: 18,
}

const fieldWrapStyle = { display: 'flex', flexDirection: 'column', gap: 7 }

const labelStyle = { fontSize: 11.5, fontWeight: 700, letterSpacing: 1, color: 'var(--color-text-muted-2)' }

const topicsWrapStyle = { display: 'flex', flexWrap: 'wrap', gap: 10 }

const chipBaseStyle = {
  padding: '9px 16px',
  fontFamily: "'Poppins',sans-serif",
  fontSize: 12.5,
  fontWeight: 600,
  cursor: 'pointer',
}

const chipOnStyle = { ...chipBaseStyle, background: 'var(--color-navy)', color: '#fff', border: '1.5px solid var(--color-navy)' }

const chipOffStyle = {
  ...chipBaseStyle,
  background: 'var(--color-bg)',
  color: 'var(--color-text-muted)',
  border: '1.5px solid rgba(16,28,61,.3)',
}

const errorTextStyle = { fontSize: 13, fontWeight: 600, color: 'var(--color-error)' }

function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [selected, setSelected] = useState([])
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)

  const toggleTopic = (topic) => {
    setSelected((prev) => (prev.includes(topic) ? prev.filter((item) => item !== topic) : [...prev, topic]))
  }

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      setError(true)
      return
    }
    setError(false)
    setSendError(false)
    setSending(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          phone,
          topics: selected.length ? selected.join(', ') : 'Not specified',
          message: message.trim() || 'No additional message',
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY,
      )
      setSent(true)
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setSendError(true)
    } finally {
      setSending(false)
    }
  }

  const handleReset = () => {
    setSent(false)
    setSendError(false)
    setName('')
    setPhone('')
    setMessage('')
    setSelected([])
  }

  return (
    <div className="container" style={sectionStyle}>
      <div>
        <div className="eyebrow">CONTACT</div>
        <h1 style={titleStyle}>Tell us about your event or venue.</h1>
        <p style={introStyle}>
          A quote, a site visit, or a full production plan — we'll get back to you within one business day.
        </p>
        <div style={cardsWrapStyle}>
          <div style={contactCardStyle}>
            <div style={contactCardLabelColStyle}>
              <div style={contactCardLabelStyle}>AJMAN, UAE</div>
              <a href="tel:+971509941041" className="contact-value-link" style={contactCardPhoneStyle}>
                +971 50 994 1041
              </a>
            </div>
            <a href="https://wa.me/971509941041" className="btn-whatsapp">
              WhatsApp
            </a>
          </div>

          <div style={contactCardStyle}>
            <div style={contactCardLabelColStyle}>
              <div style={contactCardLabelStyle}>SYRIA</div>
              <a href="tel:+963994396457" className="contact-value-link" style={contactCardPhoneStyle}>
                +963 994 396 457
              </a>
            </div>
            <a href="https://wa.me/963994396457" className="btn-whatsapp">
              WhatsApp
            </a>
          </div>

          <div style={emailCardStyle}>
            <div style={contactCardLabelStyle}>EMAIL</div>
            <a href="mailto:orabi_65@hotmail.com" className="contact-value-link" style={emailLinkStyle}>
              orabi_65@hotmail.com
            </a>
          </div>

          <div style={locationsCardStyle}>
            <div style={locationsLabelStyle}>LOCATIONS</div>
            <div style={locationRowStyle}>
              <span style={locationPrimaryStyle}>Ajman, United Arab Emirates</span>
              <span style={statusOpenStyle}>OPEN</span>
            </div>
            <div style={locationDividerStyle} />
            <div style={locationRowStyle}>
              <span style={locationSecondaryStyle}>Aleppo, Syria</span>
              <span style={statusComingSoonStyle}>COMING SOON</span>
            </div>
          </div>
        </div>
      </div>

      <div style={formCardStyle}>
        {sent ? (
          <div style={successWrapStyle}>
            <div style={checkIconStyle}>✓</div>
            <div style={successTitleStyle}>Request received.</div>
            <div style={successTextStyle}>
              Thank you — we'll get back to you within one business day. For urgent bookings, call{' '}
              <a href="tel:+971509941041" style={successLinkStyle}>
                +971 50 994 1041
              </a>
              .
            </div>
            <button type="button" onClick={handleReset} style={resetButtonStyle}>
              Send another request
            </button>
          </div>
        ) : (
          <div style={formInnerStyle}>
            <div style={formHeadingStyle}>Request a quote</div>
            <div style={fieldsRowStyle}>
              <div style={fieldWrapStyle}>
                <label style={labelStyle}>NAME *</label>
                <input
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value)
                    setError(false)
                  }}
                  placeholder="Your name"
                  className="field-input"
                />
              </div>
              <div style={fieldWrapStyle}>
                <label style={labelStyle}>PHONE *</label>
                <input
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value)
                    setError(false)
                  }}
                  placeholder="+971 …"
                  className="field-input"
                />
              </div>
            </div>
            <div style={fieldWrapStyle}>
              <label style={labelStyle}>WHAT DO YOU NEED?</label>
              <div style={topicsWrapStyle}>
                {TOPICS.map((topic) => {
                  const on = selected.includes(topic)
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => toggleTopic(topic)}
                      style={on ? chipOnStyle : chipOffStyle}
                    >
                      {topic}
                    </button>
                  )
                })}
              </div>
            </div>
            <div style={fieldWrapStyle}>
              <label style={labelStyle}>MESSAGE</label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={4}
                placeholder="Event date, venue, audience size, or what you'd like installed…"
                className="field-input"
              />
            </div>
            {error && <div style={errorTextStyle}>Please fill in your name and phone number.</div>}
            {sendError && (
              <div style={errorTextStyle}>
                Something went wrong sending your request. Please try again, or call us directly.
              </div>
            )}
            <button type="button" onClick={handleSubmit} disabled={sending} className="btn-submit">
              {sending ? 'Sending…' : 'Send request →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
