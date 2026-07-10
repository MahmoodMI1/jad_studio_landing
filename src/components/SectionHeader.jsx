const wrapStyle = {
  paddingTop: 'clamp(24px,4vw,48px)',
  paddingBottom: 'clamp(32px,4vw,56px)',
}

const titleStyle = {
  margin: '0 0 24px',
  fontSize: 'clamp(32px,5.2vw,54px)',
  fontWeight: 800,
  lineHeight: 1.06,
  letterSpacing: '-1.5px',
  maxWidth: 820,
  textWrap: 'balance',
}

const descriptionStyle = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.75,
  color: 'var(--color-text-muted)',
  maxWidth: 600,
}

function SectionHeader({ eyebrow, title, description, titleSize, titleMaxWidth, descriptionMaxWidth }) {
  return (
    <div className="container jad-reveal" style={wrapStyle}>
      <div className="eyebrow">{eyebrow}</div>
      <h1
        style={{
          ...titleStyle,
          ...(titleSize && { fontSize: titleSize }),
          ...(titleMaxWidth && { maxWidth: titleMaxWidth }),
        }}
      >
        {title}
      </h1>
      {description && (
        <p style={{ ...descriptionStyle, ...(descriptionMaxWidth && { maxWidth: descriptionMaxWidth }) }}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
