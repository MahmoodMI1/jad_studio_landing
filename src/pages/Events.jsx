import SectionHeader from '../components/SectionHeader'
import CTABand from '../components/CTABand'
import { eventTypes } from '../data/events'

const gridSectionStyle = { paddingBottom: 'clamp(40px,6vw,72px)' }

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))',
  gap: 28,
}

const cardStyle = {
  position: 'relative',
  border: '2px solid var(--color-navy)',
  minHeight: 420,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}

const cardImageStyle = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }

const cardOverlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(0deg, rgba(9,16,38,.94) 0%, rgba(9,16,38,.45) 45%, rgba(9,16,38,.05) 100%)',
}

const cardBodyStyle = {
  position: 'relative',
  padding: '26px 24px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}

const cardNumStyle = { fontSize: 11, fontWeight: 800, letterSpacing: 2.5, color: 'var(--color-blue-accent)' }

const cardTitleStyle = { fontSize: 21, fontWeight: 700, color: '#fff' }

const cardDescStyle = { fontSize: 13.5, lineHeight: 1.7, color: 'var(--color-text-on-dark)' }

const moreTextStyle = { marginTop: 20, fontSize: 13.5, fontWeight: 600, color: 'var(--color-text-muted-2)' }

function Events() {
  return (
    <div>
      <SectionHeader
        eyebrow="EVENTS WE SERVICE"
        title="From weddings to multi-stage festivals."
        description="We've installed lighting and audio systems for restaurants, wedding venues, concert stages, corporate spaces and private events — delivering professional sound and immersive lighting every time."
      />

      <div className="container" style={gridSectionStyle}>
        <div style={gridStyle}>
          {eventTypes.map((event) => (
            <div key={event.num} style={cardStyle}>
              <img src={event.img} alt={event.alt} style={cardImageStyle} />
              <div style={cardOverlayStyle} />
              <div style={cardBodyStyle}>
                <div style={cardNumStyle}>{event.num}</div>
                <div style={cardTitleStyle}>{event.title}</div>
                <div style={cardDescStyle}>{event.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={moreTextStyle}>…and many more.</div>
      </div>

      <CTABand
        heading="Planning an event?"
        accent="Let's talk production."
        primary={{ href: '/contact', label: 'Get a quote →' }}
      />
    </div>
  )
}

export default Events
