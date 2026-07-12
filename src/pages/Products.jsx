import { useState } from 'react'
import CTABand from '../components/CTABand'
import DetailModal from '../components/DetailModal'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { boothProducts, boothAccessories, commercialAudio, soundProducts, lightingProducts } from '../data/products'

const CATEGORY_SECTIONS = [
  { id: 'photo-booths', label: 'Photo Booths', count: boothProducts.length },
  { id: 'booth-accessories', label: 'Booth Accessories', count: boothAccessories.length },
  { id: 'commercial-audio', label: 'Commercial Audio', count: commercialAudio.length },
  { id: 'live-sound', label: 'Live Sound', count: soundProducts.length },
  { id: 'lighting', label: 'Lighting', count: lightingProducts.length },
]

function jumpToSection(event, id) {
  event.preventDefault()
  const target = document.getElementById(id)
  if (!target) return
  const top = target.getBoundingClientRect().top + window.scrollY - 110
  window.scrollTo({ top, behavior: 'smooth' })
}

const gearImg = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=80'
const lightingImg = 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&q=80'
const speakers33Img = 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80'

const headerSectionStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
  gap: 'clamp(28px,4vw,56px)',
  alignItems: 'center',
  paddingTop: 'clamp(24px,4vw,48px)',
  paddingBottom: 'clamp(32px,4vw,56px)',
}

const headerTitleStyle = {
  margin: '0 0 24px',
  fontSize: 'clamp(32px,5.2vw,54px)',
  fontWeight: 800,
  lineHeight: 1.06,
  letterSpacing: '-1.5px',
  textWrap: 'balance',
}

const headerParagraphStyle = { margin: 0, fontSize: 16, lineHeight: 1.75, color: 'var(--color-text-muted)', maxWidth: 640 }

const headerImageWrapStyle = { border: '2px solid var(--color-navy)', overflow: 'hidden', height: 340 }

const imageStyle = { display: 'block', width: '100%', height: '100%', objectFit: 'cover' }

const categoryNavBarStyle = { borderTop: '2px solid var(--color-navy)', borderBottom: '2px solid var(--color-navy)', background: '#fff' }

const categoryNavInnerStyle = { display: 'flex', flexWrap: 'wrap' }

const categoryNavLinkStyle = {
  display: 'flex',
  alignItems: 'baseline',
  gap: 10,
  padding: '18px 22px 18px 0',
  marginRight: 22,
  fontSize: 14.5,
  fontWeight: 700,
}

const categoryNavCountStyle = { fontSize: 11.5, fontWeight: 800, color: 'var(--color-blue)' }

const categorySpacerStyle = { height: 'clamp(40px,6vw,72px)' }

const catalogSectionStyle = { paddingBottom: 'clamp(40px,6vw,72px)', scrollMarginTop: 110 }

const featuredHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: 20,
  flexWrap: 'wrap',
  borderBottom: '2px solid var(--color-navy)',
  paddingBottom: 14,
  marginBottom: 28,
}

const featuredTitleGroupStyle = { display: 'flex', alignItems: 'baseline', gap: 14 }

const featuredBadgeStyle = { padding: '4px 12px', background: 'var(--color-blue)', color: '#fff', fontSize: 10.5, fontWeight: 800, letterSpacing: 1.5 }

const boothGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,230px),1fr))',
  gap: 22,
}

const boothCardStyle = {
  position: 'relative',
  border: '2px solid var(--color-navy)',
  minHeight: 340,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  cursor: 'pointer',
  color: '#fff',
}

const boothImageStyle = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }

const boothOverlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(0deg, rgba(9,16,38,.94) 0%, rgba(9,16,38,.4) 50%, rgba(9,16,38,.05) 100%)',
}

const boothBodyStyle = { position: 'relative', padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', gap: 7 }

const boothTagStyle = { fontSize: 10.5, fontWeight: 800, letterSpacing: 2, color: 'var(--color-blue-accent)' }

const boothNameStyle = { fontSize: 16, fontWeight: 700, lineHeight: 1.3 }

const boothViewStyle = { fontSize: 12, fontWeight: 700, letterSpacing: 1, color: 'var(--color-text-on-dark)' }

const accessoryRowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,210px),1fr))',
  gap: '10px 32px',
  padding: '22px 8px',
  borderBottom: '1px solid rgba(16,28,61,.15)',
  alignItems: 'baseline',
}

const commercialGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
  gap: 22,
}

const commercialCardStyle = { border: '2px solid var(--color-navy)', background: '#fff', padding: '26px 24px 28px', display: 'flex', flexDirection: 'column', gap: 10 }

const commercialNameStyle = { fontSize: 16.5, fontWeight: 700, lineHeight: 1.3 }

const catalogHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  borderBottom: '2px solid var(--color-navy)',
  paddingBottom: 14,
}

const catalogHeadingStyle = { margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: '-.5px' }

const catalogTagStyle = { fontSize: 12, fontWeight: 600, letterSpacing: 1.5, color: 'var(--color-text-muted-2)' }

const productRowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,210px),1fr))',
  gap: '10px 32px',
  padding: '26px 8px',
  borderBottom: '1px solid rgba(16,28,61,.15)',
  alignItems: 'baseline',
}

const productNameStyle = { fontSize: 17, fontWeight: 700 }

const productDescStyle = { fontSize: 13.5, lineHeight: 1.7, color: 'var(--color-text-muted)' }

const lightingSectionStyle = { paddingBottom: 'clamp(48px,7vw,96px)', scrollMarginTop: 110 }

const lightingImageWrapStyle = { border: '2px solid var(--color-navy)', borderTop: 'none', overflow: 'hidden', height: 280 }

const lightingGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
  gap: 28,
  paddingTop: 28,
}

const lightingCardStyle = { border: '2px solid var(--color-navy)', background: '#fff', padding: '24px 24px 26px' }

const lightingNameStyle = { fontSize: 16, fontWeight: 700, marginBottom: 8 }

const lightingDescStyle = { fontSize: 13, lineHeight: 1.65, color: 'var(--color-text-muted)' }

const warrantySectionStyle = { background: 'var(--color-navy)', color: '#fff' }

const warrantyInnerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
  gap: 32,
  alignItems: 'center',
  paddingTop: 'clamp(36px,5vw,64px)',
  paddingBottom: 'clamp(36px,5vw,64px)',
}

const warrantyImageWrapStyle = { border: '2px solid rgba(255,255,255,.2)', overflow: 'hidden', height: 180 }

const warrantyHeadingStyle = { fontSize: 28, fontWeight: 800, lineHeight: 1.3, letterSpacing: '-.5px', textWrap: 'balance' }

const warrantyAccentStyle = { color: 'var(--color-blue-accent)' }

const warrantyTextStyle = { fontSize: 14, lineHeight: 1.8, color: 'var(--color-text-on-dark-muted)' }

function Products() {
  useScrollReveal()
  const [activeBooth, setActiveBooth] = useState(-1)

  return (
    <div>
      <div className="container jad-reveal" style={headerSectionStyle}>
        <div>
          <div className="eyebrow">OUR PRODUCTS: BUY OR RENT</div>
          <h1 style={headerTitleStyle}>Trusted brands, company warranty.</h1>
          <p style={headerParagraphStyle}>
            TechnoWhale photo booths, commercial audio systems, and professional sound from JBL, Yamaha, Dynacord
            and Shure, plus lighting controllers from Tiger Touch, Sunny, King and Quartz. If you need it, we can
            supply it or source it for you.
          </p>
        </div>
        <div style={headerImageWrapStyle}>
          <img src={gearImg} alt="JAD Studio full production rig with line arrays, mixer and moving heads" style={imageStyle} />
        </div>
      </div>

      <div style={categoryNavBarStyle}>
        <div className="container" style={categoryNavInnerStyle}>
          {CATEGORY_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => jumpToSection(event, section.id)}
              className="category-nav-link"
              style={categoryNavLinkStyle}
            >
              {section.label} <span style={categoryNavCountStyle}>{section.count}</span>
            </a>
          ))}
        </div>
      </div>
      <div style={categorySpacerStyle} />

      <div id="photo-booths" className="container" style={catalogSectionStyle}>
        <div className="jad-reveal" style={featuredHeaderStyle}>
          <div style={featuredTitleGroupStyle}>
            <h2 style={catalogHeadingStyle}>Photo Booths</h2>
            <span style={featuredBadgeStyle}>FEATURED</span>
          </div>
          <span style={catalogTagStyle}>TECHNOWHALE</span>
        </div>
        <div style={boothGridStyle}>
          {boothProducts.map((booth, index) => (
            <div
              key={booth.name}
              className="jad-zoomcard jad-reveal"
              style={boothCardStyle}
              role="button"
              tabIndex={0}
              onClick={() => setActiveBooth(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActiveBooth(index)
                }
              }}
            >
              <img src={booth.img} alt={booth.alt} style={boothImageStyle} />
              <div style={boothOverlayStyle} />
              <div style={boothBodyStyle}>
                <div style={boothTagStyle}>{booth.tag}</div>
                <div style={boothNameStyle}>{booth.name}</div>
                <div style={boothViewStyle}>VIEW DETAILS →</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DetailModal
        variant="products"
        item={activeBooth >= 0 ? boothProducts[activeBooth] : null}
        label="PHOTO BOOTH"
        ctaLabel="Ask about this booth →"
        ctaHref="/contact"
        onClose={() => setActiveBooth(-1)}
      />

      <div id="booth-accessories" className="container" style={catalogSectionStyle}>
        <div className="jad-reveal" style={catalogHeaderStyle}>
          <h2 style={catalogHeadingStyle}>Photo Booth Accessories</h2>
          <span style={catalogTagStyle}>XRIA &amp; MORE</span>
        </div>
        {boothAccessories.map((item) => (
          <div key={item.name} className="product-row" style={accessoryRowStyle}>
            <div style={productNameStyle}>{item.name}</div>
            <div style={productDescStyle}>{item.desc}</div>
          </div>
        ))}
      </div>

      <div id="commercial-audio" className="container" style={catalogSectionStyle}>
        <div className="jad-reveal" style={featuredHeaderStyle}>
          <h2 style={catalogHeadingStyle}>Commercial Audio</h2>
          <span style={catalogTagStyle}>SHOPS · RESTAURANTS · CAFÉS</span>
        </div>
        <div style={commercialGridStyle}>
          {commercialAudio.map((item) => (
            <div key={item.name} className="jad-lift jad-reveal" style={commercialCardStyle}>
              <div style={commercialNameStyle}>{item.name}</div>
              <div style={productDescStyle}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div id="live-sound" className="container" style={catalogSectionStyle}>
        <div style={catalogHeaderStyle}>
          <h2 style={catalogHeadingStyle}>Live Sound Systems</h2>
          <span style={catalogTagStyle}>JBL · YAMAHA · DYNACORD · SHURE</span>
        </div>
        {soundProducts.map((product) => (
          <div key={product.name} className="product-row" style={productRowStyle}>
            <div style={productNameStyle}>{product.name}</div>
            <div style={productDescStyle}>{product.desc}</div>
          </div>
        ))}
      </div>

      <div id="lighting" className="container" style={lightingSectionStyle}>
        <div style={catalogHeaderStyle}>
          <h2 style={catalogHeadingStyle}>Lighting Systems</h2>
          <span style={catalogTagStyle}>TIGER TOUCH · SUNNY · KING · QUARTZ</span>
        </div>
        <div style={lightingImageWrapStyle}>
          <img src={lightingImg} alt="Moving heads and LED screen lighting rig" style={imageStyle} />
        </div>
        <div style={lightingGridStyle}>
          {lightingProducts.map((item) => (
            <div key={item.name} className="jad-lift jad-reveal" style={lightingCardStyle}>
              <div style={lightingNameStyle}>{item.name}</div>
              <div style={lightingDescStyle}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={warrantySectionStyle}>
        <div className="container" style={warrantyInnerStyle}>
          <div style={warrantyImageWrapStyle}>
            <img src={speakers33Img} alt="33 years of JAD Studio" style={imageStyle} />
          </div>
          <div style={warrantyHeadingStyle}>
            Every device carries a <span style={warrantyAccentStyle}>one-year company warranty.</span>
          </div>
          <div style={warrantyTextStyle}>
            Coverage includes manufacturing defects and damage to the operating board and programming. The warranty
            does not cover usage errors, breakage, liquid spills or power-supply fluctuations. Annual maintenance
            contracts are available after the warranty ends.
          </div>
        </div>
      </div>

      <CTABand heading="Ask for current stock and rental rates." primary={{ href: '/contact', label: 'Request the price list →' }} />
    </div>
  )
}

export default Products
