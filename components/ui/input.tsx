import { forwardRef } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`w-full rounded border border-brand-gray-500 bg-brand-dark px-4 py-2 text-white placeholder-brand-gray-400 transition focus:border-brand-red focus:outline-none ${className}`}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

export { Input }
