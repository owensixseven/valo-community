import { forwardRef } from 'react'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full rounded border border-brand-gray-500 bg-brand-dark px-4 py-2 text-white placeholder-brand-gray-400 transition focus:border-brand-red focus:outline-none ${className}`}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'

export { Textarea }
