import { useState } from 'react'

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
  alignItems: 'start',
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

const infoListStyle = { display: 'flex', flexDirection: 'column', gap: 0, borderTop: '2px solid var(--color-navy)' }

const infoRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 20,
  padding: '18px 4px',
  borderBottom: '1px solid rgba(16,28,61,.15)',
}

const infoLabelStyle = { fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: 'var(--color-text-muted-2)' }

const infoValueStyle = { fontSize: 14.5, fontWeight: 600 }

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

  const toggleTopic = (topic) => {
    setSelected((prev) => (prev.includes(topic) ? prev.filter((item) => item !== topic) : [...prev, topic]))
  }

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      setError(true)
      return
    }
    setError(false)
    setSent(true)
  }

  const handleReset = () => {
    setSent(false)
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
        <div style={infoListStyle}>
          <div style={infoRowStyle}>
            <span style={infoLabelStyle}>UAE</span>
            <a href="tel:+971509941041" style={infoValueStyle}>
              +971 50 994 1041
            </a>
          </div>
          <div style={infoRowStyle}>
            <span style={infoLabelStyle}>SYRIA</span>
            <a href="tel:+963994396457" style={infoValueStyle}>
              +963 994 396 457
            </a>
          </div>
          <div style={infoRowStyle}>
            <span style={infoLabelStyle}>EMAIL</span>
            <a href="mailto:orabi_65@hotmail.com" style={infoValueStyle}>
              orabi_65@hotmail.com
            </a>
          </div>
          <div style={infoRowStyle}>
            <span style={infoLabelStyle}>LOCATION</span>
            <span style={infoValueStyle}>Ajman, United Arab Emirates</span>
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
            <button type="button" onClick={handleSubmit} className="btn-submit">
              Send request →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
