interface TagPillProps {
  children: React.ReactNode
  variant?: 'teal' | 'purple' | 'default'
}

export default function TagPill({ children, variant = 'teal' }: TagPillProps) {
  const styles: Record<string, React.CSSProperties> = {
    teal: {
      background: 'var(--teal-light)',
      color: 'var(--teal)',
      border: '1px solid var(--teal-border)',
    },
    purple: {
      background: '#F0EEFF',
      color: '#6B5CCC',
      border: '1px solid rgba(107,92,204,0.2)',
    },
    default: {
      background: 'var(--bg-2)',
      color: 'var(--ink-mid)',
      border: '1px solid var(--border)',
    },
  }

  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        borderRadius: 100,
        padding: '2px 10px',
        ...styles[variant],
      }}
    >
      {children}
    </span>
  )
}
