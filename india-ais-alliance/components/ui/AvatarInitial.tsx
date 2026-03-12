interface AvatarInitialProps {
  initial: string
  size?: 'sm' | 'md' | 'lg'
}

export default function AvatarInitial({ initial, size = 'md' }: AvatarInitialProps) {
  const sizes = {
    sm: { width: 46, height: 46, fontSize: 18 },
    md: { width: 54, height: 54, fontSize: 22 },
    lg: { width: 64, height: 64, fontSize: 26 },
  }
  const s = sizes[size]

  return (
    <div
      style={{
        width: s.width,
        height: s.height,
        borderRadius: '50%',
        background: 'var(--teal-light)',
        border: '1.5px solid var(--teal-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-fraunces)',
        fontSize: s.fontSize,
        color: 'var(--teal)',
        fontWeight: 600,
        flexShrink: 0,
      }}
    >
      {initial}
    </div>
  )
}
