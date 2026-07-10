import CTABand from '../components/CTABand'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { soundProducts, lightingProducts } from '../data/products'

const gearImg = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=80'
const lightingImg = 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&q=80'
const speakers33Img = 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1600&q=80'

const headerSectionStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
  gap: 'clamp(28px,4vw,56px)',
  alignItems: 'center',
  paddingTop: 'clamp(40px,6vw,80px)',
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

const catalogSectionStyle = { paddingBottom: 'clamp(40px,6vw,72px)' }

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

const lightingSectionStyle = { paddingBottom: 'clamp(48px,7vw,96px)' }

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

  return (
    <div>
      <div className="container jad-reveal" style={headerSectionStyle}>
        <div>
          <div className="eyebrow">OUR PRODUCTS — BUY OR RENT</div>
          <h1 style={headerTitleStyle}>Trusted brands, company warranty.</h1>
          <p style={headerParagraphStyle}>
            Professional systems from JBL, Yamaha, Dynacord and Shure, plus lighting controllers from Tiger Touch,
            Sunny, King and Quartz. This catalog highlights core products but is not limited to what's shown — if
            you need it, we can supply it or source it for you.
          </p>
        </div>
        <div style={headerImageWrapStyle}>
          <img src={gearImg} alt="JAD Studio full production rig — line arrays, mixer and moving heads" style={imageStyle} />
        </div>
      </div>

      <div className="container" style={catalogSectionStyle}>
        <div style={catalogHeaderStyle}>
          <h2 style={catalogHeadingStyle}>Sound Systems</h2>
          <span style={catalogTagStyle}>JBL · YAMAHA · DYNACORD · SHURE</span>
        </div>
        {soundProducts.map((product) => (
          <div key={product.name} className="product-row" style={productRowStyle}>
            <div style={productNameStyle}>{product.name}</div>
            <div style={productDescStyle}>{product.desc}</div>
          </div>
        ))}
      </div>

      <div className="container" style={lightingSectionStyle}>
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
