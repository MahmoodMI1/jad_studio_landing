import SectionHeader from '../components/SectionHeader'
import CTABand from '../components/CTABand'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { services } from '../data/services'

const listSectionStyle = { paddingBottom: 'clamp(48px,7vw,96px)' }

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))',
  gap: 26,
}

const cardBaseStyle = {
  position: 'relative',
  border: '2px solid var(--color-navy)',
  minHeight: 380,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}

const cardImageStyle = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }

const imageOverlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(0deg, rgba(9,16,38,.94) 0%, rgba(9,16,38,.45) 45%, rgba(9,16,38,.05) 100%)',
}

const blueOverlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(500px 300px at 80% 0%, rgba(255,255,255,.14), transparent 70%)',
}

const navyOverlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'radial-gradient(500px 300px at 20% 0%, rgba(18,63,214,.5), transparent 70%)',
}

const cardBodyStyle = {
  position: 'relative',
  padding: '24px 22px 26px',
  display: 'flex',
  flexDirection: 'column',
  gap: 9,
}

const numStyle = { fontSize: 11, fontWeight: 800, letterSpacing: 2.5, color: 'var(--color-blue-accent)' }
const numAltStyle = { fontSize: 11, fontWeight: 800, letterSpacing: 2.5, color: 'var(--color-blue-light)' }
const cardTitleStyle = { fontSize: 19, fontWeight: 700, color: '#fff' }
const descStyle = { fontSize: 13, lineHeight: 1.65, color: 'var(--color-text-on-dark)' }
const descAltStyle = { fontSize: 13, lineHeight: 1.65, color: 'var(--color-blue-lighter)' }

const engineeringSectionStyle = { background: 'var(--color-blue)', color: '#fff' }

const engineeringInnerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
  gap: 'clamp(28px,4vw,56px)',
  alignItems: 'center',
  paddingTop: 'clamp(40px,6vw,72px)',
  paddingBottom: 'clamp(40px,6vw,72px)',
}

const engineeringEyebrowStyle = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 2.5,
  color: 'var(--color-blue-light)',
  marginBottom: 14,
}

const engineeringHeadingStyle = {
  fontSize: 30,
  fontWeight: 800,
  lineHeight: 1.25,
  letterSpacing: '-.5px',
  textWrap: 'balance',
}

const engineeringListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  fontSize: 14.5,
  lineHeight: 1.6,
  color: 'var(--color-blue-pale)',
}

const engineeringItemStyle = { display: 'flex', gap: 12 }
const engineeringBulletStyle = { fontWeight: 800 }

const engineeringItems = [
  'Sound & lighting engineers for events, festivals and weddings',
  'System setup, calibration and soundcheck',
  'Equipment installation for restaurants, stages, venues and studios',
  'Technical troubleshooting and live operation during events',
]

function ServiceCard({ service }) {
  const isBlue = service.variant === 'blue'
  const isNavy = service.variant === 'navy'
  const background = isBlue ? 'var(--color-blue)' : isNavy ? 'var(--color-navy)' : undefined
  const overlayStyle = service.variant === 'image' ? imageOverlayStyle : isBlue ? blueOverlayStyle : navyOverlayStyle

  return (
    <div className="jad-zoomcard jad-reveal" style={{ ...cardBaseStyle, background }}>
      {service.variant === 'image' && <img src={service.img} alt={service.alt} style={cardImageStyle} />}
      <div style={overlayStyle} />
      <div style={cardBodyStyle}>
        <div style={isBlue ? numAltStyle : numStyle}>{service.num}</div>
        <div style={cardTitleStyle}>{service.title}</div>
        <div style={isBlue ? descAltStyle : descStyle}>{service.desc}</div>
      </div>
    </div>
  )
}

function Services() {
  useScrollReveal()

  return (
    <div>
      <SectionHeader
        eyebrow="WHAT WE DO"
        title="Complete technical production, under one roof."
        description="From first site survey to the final soundcheck — supply, installation, programming and live operation. If we don't have it, we'll source it for you."
      />

      <div className="container" style={listSectionStyle}>
        <div style={gridStyle}>
          {services.map((service) => (
            <ServiceCard key={service.num} service={service} />
          ))}
        </div>
      </div>

      <div style={engineeringSectionStyle}>
        <div className="container" style={engineeringInnerStyle}>
          <div>
            <div style={engineeringEyebrowStyle}>ENGINEERING SERVICES</div>
            <div style={engineeringHeadingStyle}>On-site engineers, not just equipment.</div>
          </div>
          <div style={engineeringListStyle}>
            {engineeringItems.map((item) => (
              <div key={item} style={engineeringItemStyle}>
                <span style={engineeringBulletStyle}>—</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTABand
        heading="Need a service not listed?"
        accent="We'll source it."
        primary={{ href: '/contact', label: 'Talk to us →' }}
      />
    </div>
  )
}

export default Services
