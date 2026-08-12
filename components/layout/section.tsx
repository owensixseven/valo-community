import { forwardRef } from 'react'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className = '', ...props }, ref) => (
    <section ref={ref} className={`py-20 md:py-32 ${className}`} {...props} />
  ),
)
Section.displayName = 'Section'

export { Section }
