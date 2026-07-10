const wrapStyle = {
  maxWidth: 'var(--content-max-width)',
  margin: '0 auto',
  padding: 'clamp(40px,6vw,80px) clamp(20px,4vw,48px) clamp(32px,4vw,56px)',
}

const eyebrowStyle = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 3,
  color: 'var(--color-blue)',
  marginBottom: 18,
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
    <div style={wrapStyle}>
      <div style={eyebrowStyle}>{eyebrow}</div>
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
