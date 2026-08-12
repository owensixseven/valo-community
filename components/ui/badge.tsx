import { forwardRef } from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md' | 'lg'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'primary', size = 'sm', ...props }, ref) => {
    const variantStyles = {
      primary: 'bg-brand-red/20 text-brand-red border border-brand-red/30',
      success: 'bg-green-500/20 text-green-400 border border-green-500/30',
      warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
      danger: 'bg-red-500/20 text-red-400 border border-red-500/30',
      info: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    }

    const sizeStyles = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
    }

    return (
      <span
        ref={ref}
        className={`inline-flex items-center rounded-full font-semibold ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    )
  },
)
Badge.displayName = 'Badge'

export { Badge }
