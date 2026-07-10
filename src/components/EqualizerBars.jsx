const BAR_DURATIONS = [1.1, 0.9, 1.3, 0.8, 1.2, 1, 1.4]
const BAR_DELAYS = [0, -0.17, -0.34, -0.51, -0.68, -0.85, -1.02]

const wrapStyle = { display: 'flex', gap: 5, alignItems: 'flex-end', height: 28 }

function EqualizerBars({ color, marginBottom }) {
  return (
    <div style={{ ...wrapStyle, marginBottom }}>
      {BAR_DURATIONS.map((duration, index) => (
        <span
          key={index}
          style={{
            display: 'block',
            width: 5,
            height: '100%',
            background: color,
            transformOrigin: 'bottom',
            animation: `jadeq ${duration}s ease-in-out ${BAR_DELAYS[index]}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

export default EqualizerBars
