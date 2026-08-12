import { forwardRef } from 'react'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`mx-auto max-w-6xl px-6 md:px-8 ${className}`} {...props} />
  ),
)
Container.displayName = 'Container'

export { Container }
