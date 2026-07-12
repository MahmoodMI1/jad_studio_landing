import { Link } from 'react-router-dom'
import CTABand from '../components/CTABand'
import EqualizerBars from '../components/EqualizerBars'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { stats } from '../data/stats'

const heroImg = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&q=80'

const pillars = [
  {
    num: '01',
    line: 'SOUND',
    title: 'Professional Sound Systems',
    desc: 'Supply, installation and live operation of JBL, Yamaha, Dynacord and Shure systems, plus studio recording, editing and composing.',
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80',
    alt: 'Professional Sound Systems',
  },
  {
    num: '02',
    line: 'LIGHT',
    title: 'Professional Lighting',
    desc: 'DMX512 show control, moving heads and lighting design that gives every event more impact and presence.',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80',
    alt: 'Professional Lighting',
  },
  {
    num: '03',
    line: 'VISION',
    title: 'LED Screens & Streaming',
    desc: 'High-definition LED screens and multi-platform live streaming, delivering your content at the best quality in front of any audience.',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80',
    alt: 'LED Screens and Streaming',
  },
]

const eventsTeaserImg = 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&q=80'

const productsTeasers = [
  {
    key: 'photo-booths',
    img: 'https://profilm.ae/wp-content/uploads/2023/05/Automatic-360-Photo-Booth-Degree-Camera-Video-Spinner-Free-Logo-Photomaton-360-Rotating-Selfie-Machine-for-1-700x700.webp',
    alt: 'TechnoWhale 360 photo booth in action',
    eyebrow: 'TECHNOWHALE',
    badge: 'NEW',
    title: 'Photo Booths',
    desc: '360°, mirror and DSLR booths for events.',
  },
  {
    key: 'live-sound',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80',
    alt: 'JBL line array rigged on stage',
    eyebrow: 'JBL · YAMAHA · SHURE · DYNACORD',
    title: 'Live Sound',
    desc: 'Speakers, subs, amplifiers, wireless mics and mixers.',
  },
  {
    key: 'commercial-audio',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    alt: 'Restaurant interior with background music',
    eyebrow: 'SHOPS · RESTAURANTS · CAFÉS',
    title: 'Commercial Audio',
    desc: 'Ceiling speakers and smart background music control.',
  },
  {
    key: 'lighting',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80',
    alt: 'Moving-head show lighting',
    eyebrow: 'DMX512 SHOW CONTROL',
    title: 'Lighting',
    desc: 'Tiger Touch, Sunny, King and Quartz controllers, moving heads and LED.',
  },
]

const heroWrapStyle = {
  paddingTop: 'clamp(24px,4vw,48px)',
  paddingBottom: 'clamp(36px,5vw,64px)',
}

const eyebrowStyle = { marginBottom: 22 }

const titleStyle = {
  margin: '0 0 34px',
  fontSize: 'clamp(36px,6vw,66px)',
  fontWeight: 800,
  lineHeight: 1.04,
  letterSpacing: '-2px',
  maxWidth: 900,
  textWrap: 'balance',
}

const accentStyle = { color: 'var(--color-blue)' }

const heroBottomRowStyle = { display: 'flex', gap: 40, alignItems: 'flex-end', flexWrap: 'wrap' }

const heroParagraphStyle = {
  margin: 0,
  fontSize: 16.5,
  lineHeight: 1.75,
  color: 'var(--color-text-muted)',
  maxWidth: 480,
}

const heroButtonsStyle = { display: 'flex', gap: 14 }

const heroImageSectionStyle = { paddingBottom: 'clamp(48px,7vw,96px)' }

const heroImageGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
  gap: 2,
  background: 'var(--color-navy)',
  border: '2px solid var(--color-navy)',
}

const heroImageWrapStyle = { position: 'relative', minHeight: 460, overflow: 'hidden', background: '#fff' }

const heroImageStyle = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }

const whyPanelStyle = {
  background: 'var(--color-blue)',
  color: '#fff',
  padding: '44px 40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 28,
}

const whyHeadingStyle = { fontSize: 24, fontWeight: 700, lineHeight: 1.35, textWrap: 'balance' }

const whyTextStyle = { fontSize: 14.5, lineHeight: 1.8, color: 'var(--color-blue-light)' }

const whyLinkStyle = { fontSize: 13, fontWeight: 700, letterSpacing: 2 }

const statsSectionStyle = {
  borderTop: '2px solid var(--color-navy)',
  borderBottom: '2px solid var(--color-navy)',
  background: '#fff',
}

const statsDesktopGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
}

const statItemStyle = { padding: '36px 24px', borderLeft: '1px solid rgba(16,28,61,.12)' }

const statValueStyle = { fontSize: 38, fontWeight: 800, color: 'var(--color-blue)', letterSpacing: '-1px' }

const statLabelStyle = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: 1,
  color: 'var(--color-text-muted-2)',
  marginTop: 4,
}

const statsMobileWrapStyle = { overflow: 'hidden' }

const marqueeTrackStyle = { display: 'flex', width: 'max-content', animation: 'jadmarq 18s linear infinite' }

const marqueeItemStyle = { flex: 'none', padding: '26px 30px', borderRight: '1px solid rgba(16,28,61,.12)' }

const marqueeValueStyle = { fontSize: 32, fontWeight: 800, color: 'var(--color-blue)', letterSpacing: '-1px' }

const marqueeLabelStyle = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: 1,
  color: 'var(--color-text-muted-2)',
  marginTop: 4,
  whiteSpace: 'nowrap',
}

const pillarsSectionStyle = {
  paddingTop: 'clamp(48px,7vw,96px)',
  paddingBottom: 'clamp(48px,7vw,96px)',
}

const pillarsHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: 24,
  flexWrap: 'wrap',
  marginBottom: 48,
}

const pillarsHeadingStyle = { margin: 0, fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, letterSpacing: '-1px' }

const pillarsLinkStyle = { fontSize: 13.5, fontWeight: 700, color: 'var(--color-blue)' }

const pillarsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,270px),1fr))',
  gap: 28,
}

const pillarCardStyle = { border: '2px solid var(--color-navy)', background: '#fff', display: 'flex', flexDirection: 'column' }

const pillarImageWrapStyle = { height: 200, overflow: 'hidden', borderBottom: '2px solid var(--color-navy)' }

const pillarImageStyle = { display: 'block', width: '100%', height: '100%', objectFit: 'cover' }

const pillarBodyStyle = { padding: '26px 26px 30px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }

const pillarLabelStyle = { fontSize: 11, fontWeight: 700, letterSpacing: 2.5, color: 'var(--color-blue)' }

const pillarTitleStyle = { fontSize: 19, fontWeight: 700 }

const pillarDescStyle = { fontSize: 13.5, lineHeight: 1.7, color: 'var(--color-text-muted)' }

const eventsTeaserSectionStyle = {
  background: 'var(--color-navy)',
  borderTop: '2px solid var(--color-navy)',
  borderBottom: '2px solid var(--color-navy)',
  color: '#fff',
}

const eventsTeaserInnerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
  gap: 'clamp(32px,5vw,64px)',
  alignItems: 'center',
  paddingTop: 'clamp(48px,7vw,80px)',
  paddingBottom: 'clamp(48px,7vw,80px)',
}

const eventsTeaserEyebrowStyle = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 2.5,
  color: 'var(--color-blue-accent)',
  marginBottom: 16,
}

const eventsTeaserHeadingStyle = {
  margin: '0 0 18px',
  fontSize: 'clamp(26px,4vw,40px)',
  fontWeight: 800,
  lineHeight: 1.15,
  letterSpacing: '-1px',
  textWrap: 'balance',
}

const eventsTeaserAccentStyle = { color: 'var(--color-blue-accent)' }

const eventsTeaserTextStyle = {
  margin: '0 0 28px',
  fontSize: 15,
  lineHeight: 1.75,
  color: 'var(--color-text-on-dark-muted)',
  maxWidth: 440,
}

const eventsTeaserCardStyle = {
  position: 'relative',
  border: '2px solid rgba(255,255,255,.25)',
  minHeight: 340,
  overflow: 'hidden',
  display: 'block',
}

const eventsTeaserImgStyle = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }

const eventsTeaserOverlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(0deg, rgba(9,16,38,.85) 0%, transparent 55%)',
}

const eventsTeaserLabelStyle = {
  position: 'absolute',
  left: 20,
  bottom: 18,
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 1.5,
  color: '#fff',
}

const productsTeaserSectionStyle = {
  paddingTop: 'clamp(48px,7vw,80px)',
  paddingBottom: 'clamp(48px,7vw,80px)',
}

const productsTeaserHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: 24,
  flexWrap: 'wrap',
  marginBottom: 36,
}

const productsTeaserEyebrowStyle = { fontSize: 12, fontWeight: 700, letterSpacing: 2.5, color: 'var(--color-blue)' }

const productsTeaserHeadingStyle = {
  margin: 0,
  fontSize: 'clamp(26px,4vw,36px)',
  fontWeight: 800,
  letterSpacing: '-1px',
}

const productsTeaserLinkStyle = { fontSize: 13.5, fontWeight: 700, color: 'var(--color-blue)', whiteSpace: 'nowrap' }

const productsTeaserGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
  gap: 22,
}

const productsTeaserCardStyle = {
  position: 'relative',
  border: '2px solid var(--color-navy)',
  minHeight: 280,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  color: '#fff',
}

const productsTeaserCardImgStyle = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }

const productsTeaserCardOverlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(0deg, rgba(9,16,38,.94) 0%, rgba(9,16,38,.4) 50%, rgba(9,16,38,.05) 100%)',
}

const productsTeaserCardBodyStyle = { position: 'relative', padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', gap: 6 }

const productsTeaserCardEyebrowRowStyle = { display: 'flex', alignItems: 'center', gap: 8 }

const productsTeaserCardEyebrowStyle = { fontSize: 11, fontWeight: 800, letterSpacing: 1.5, color: 'var(--color-blue-accent)' }

const productsTeaserCardBadgeStyle = { padding: '2px 8px', background: 'var(--color-blue)', color: '#fff', fontSize: 9, fontWeight: 800, letterSpacing: 1.5 }

const productsTeaserCardTitleStyle = { fontSize: 19, fontWeight: 700 }

const productsTeaserCardDescStyle = { fontSize: 12.5, lineHeight: 1.6, color: 'var(--color-text-on-dark)' }

const productsTeaserNoteStyle = { marginTop: 24, fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted-2)' }

function Home() {
  useScrollReveal()

  return (
    <div>
      <div className="container jad-reveal" style={heroWrapStyle}>
        <EqualizerBars color="var(--color-blue)" marginBottom={22} />
        <div className="eyebrow" style={eyebrowStyle}>AUDIO • VISUAL • LIGHTING • SALES, RENTAL &amp; ENGINEERING</div>
        <h1 style={titleStyle}>
          Thirty-three years of making events <span style={accentStyle}>unforgettable.</span>
        </h1>
        <div style={heroBottomRowStyle}>
          <p style={heroParagraphStyle}>
            From the UAE to Aleppo: supply, installation, programming and live operation. Buy the gear, rent the
            gear, hire the experts. One company, one solution.
          </p>
          <div style={heroButtonsStyle}>
            <Link to="/contact" className="btn-navy">
              Start a project →
            </Link>
            <Link to="/services" className="btn-outline-navy">
              Our services
            </Link>
          </div>
        </div>
      </div>

      <div className="container" style={heroImageSectionStyle}>
        <div style={heroImageGridStyle}>
          <div style={heroImageWrapStyle}>
            <img src={heroImg} alt="JAD Studio ballroom event production" style={heroImageStyle} />
          </div>
          <div style={whyPanelStyle}>
            <div style={whyHeadingStyle}>One weak detail can change the whole event experience.</div>
            <div style={whyTextStyle}>
              Any error in the sound. Any weakness in the lighting. Any unclear screen. That's why we care about
              every detail: clear balanced sound, professional lighting, high-definition LED, and an experience
              that stays in memory.
            </div>
            <Link to="/services" className="link-on-blue" style={whyLinkStyle}>
              WHY JAD →
            </Link>
          </div>
        </div>
      </div>

      <div style={statsSectionStyle}>
        <div className="jad-desk container" style={statsDesktopGridStyle}>
          {stats.map((stat) => (
            <div key={stat.label} style={statItemStyle}>
              <div style={statValueStyle} data-count={stat.num} data-suffix={stat.suffix}>
                {stat.value}
              </div>
              <div style={statLabelStyle}>{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="jad-mob" style={statsMobileWrapStyle}>
          <div style={marqueeTrackStyle}>
            {[...stats, ...stats].map((stat, index) => (
              <div key={`${stat.label}-${index}`} style={marqueeItemStyle}>
                <div style={marqueeValueStyle}>{stat.value}</div>
                <div style={marqueeLabelStyle}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={pillarsSectionStyle}>
        <div style={pillarsHeaderStyle}>
          <h2 style={pillarsHeadingStyle}>Sound. Light. Vision.</h2>
          <Link to="/services" style={pillarsLinkStyle}>
            All 8 services →
          </Link>
        </div>
        <div className="jad-hrow" style={pillarsGridStyle}>
          {pillars.map((pillar) => (
            <div key={pillar.num} className="jad-hcard jad-zoomcard jad-reveal" style={pillarCardStyle}>
              <div style={pillarImageWrapStyle}>
                <img src={pillar.img} alt={pillar.alt} style={pillarImageStyle} />
              </div>
              <div style={pillarBodyStyle}>
                <div style={pillarLabelStyle}>
                  {pillar.num} / {pillar.line}
                </div>
                <div style={pillarTitleStyle}>{pillar.title}</div>
                <div style={pillarDescStyle}>{pillar.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={eventsTeaserSectionStyle}>
        <div className="container" style={eventsTeaserInnerStyle}>
          <div className="jad-reveal">
            <div style={eventsTeaserEyebrowStyle}>EVENTS WE SERVICE</div>
            <h2 style={eventsTeaserHeadingStyle}>
              We do weddings, festivals, conferences, <span style={eventsTeaserAccentStyle}>and much more.</span>
            </h2>
            <p style={eventsTeaserTextStyle}>
              From a ballroom ceremony to a multi-stage festival: full sound, lighting and AV, from first site visit
              to the final soundcheck.
            </p>
            <Link to="/events" className="btn-blue-sm" style={{ fontWeight: 700 }}>
              See the events we service →
            </Link>
          </div>
          <Link to="/events" className="jad-zoomcard jad-reveal" style={eventsTeaserCardStyle}>
            <img src={eventsTeaserImg} alt="Festival stage production" style={eventsTeaserImgStyle} />
            <div style={eventsTeaserOverlayStyle} />
            <div style={eventsTeaserLabelStyle}>SEE OUR EVENTS →</div>
          </Link>
        </div>
      </div>

      <div className="container" style={productsTeaserSectionStyle}>
        <div className="jad-reveal" style={productsTeaserHeaderStyle}>
          <div>
            <div style={productsTeaserEyebrowStyle}>OUR PRODUCTS: BUY OR RENT</div>
            <h2 style={productsTeaserHeadingStyle}>The gear behind the sound.</h2>
          </div>
          <Link to="/products" style={productsTeaserLinkStyle}>
            Browse all products →
          </Link>
        </div>
        <div className="jad-hrow" style={productsTeaserGridStyle}>
          {productsTeasers.map((teaser) => (
            <Link
              key={teaser.key}
              to={`/products#${teaser.key}`}
              className="jad-hcard jad-zoomcard jad-reveal"
              style={productsTeaserCardStyle}
            >
              <img src={teaser.img} alt={teaser.alt} style={productsTeaserCardImgStyle} />
              <div style={productsTeaserCardOverlayStyle} />
              <div style={productsTeaserCardBodyStyle}>
                <div style={productsTeaserCardEyebrowRowStyle}>
                  <span style={productsTeaserCardEyebrowStyle}>{teaser.eyebrow}</span>
                  {teaser.badge && <span style={productsTeaserCardBadgeStyle}>{teaser.badge}</span>}
                </div>
                <div style={productsTeaserCardTitleStyle}>{teaser.title}</div>
                <div style={productsTeaserCardDescStyle}>{teaser.desc}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="jad-reveal" style={productsTeaserNoteStyle}>
          Every device carries a one-year company warranty · annual maintenance contracts available
        </div>
      </div>

      <CTABand
        variant="dark"
        showEqualizer
        heading="Ready to deliver your event at the best level."
        primary={{ href: 'tel:+971509941041', label: 'Call +971 50 994 1041' }}
        secondary={{ href: '/contact', label: 'Request a quote' }}
      />
    </div>
  )
}

export default Home
