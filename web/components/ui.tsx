import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'accent' | 'onDark'
type Size = 'sm' | 'md'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-[transform,background-color,border-color,box-shadow] duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white'

// Acento (vermilion) usado com parcimônia. Botão primário neutro (near-black) tem contraste
// AA de sobra; `accent` (texto near-black sobre vermilion, 5.3:1) é o pop, usado pontualmente.
const variants: Record<Variant, string> = {
  primary: 'bg-gray-950 text-white hover:bg-gray-800',
  secondary:
    'border border-gray-300 bg-white text-gray-900 hover:border-gray-950 hover:bg-gray-50',
  accent: 'bg-brand-500 text-gray-950 hover:bg-brand-400',
  onDark: 'bg-white text-gray-950 hover:bg-gray-100',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  size?: Size
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </a>
  )
}

export function Container({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
