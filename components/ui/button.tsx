import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded font-bold uppercase letter-spacing-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-brand-red text-white hover:bg-white hover:text-brand-dark transform hover:-translate-y-0.5',
        secondary: 'border border-brand-gray-400 text-white hover:border-brand-red hover:text-brand-red',
        ghost: 'text-white hover:text-brand-red',
        discord: 'bg-blue-600 text-white hover:brightness-110 transform hover:-translate-y-0.5',
      },
      size: {
        sm: 'px-3 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-9 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  ),
)
Button.displayName = 'Button'

export { Button, buttonVariants }
