interface ChipProps {
  children: React.ReactNode
  variant?: 'teal' | 'gray'
}

export default function Chip({ children, variant = 'teal' }: ChipProps) {
  return (
    <span className={variant === 'teal' ? 'chip-teal' : 'chip-gray'}>
      {children}
    </span>
  )
}
