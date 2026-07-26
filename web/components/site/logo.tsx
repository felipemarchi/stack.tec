import { cn } from '@/lib/cn'

/** Marca da stack.tec: wordmark puro, com o ponto em vermilion (o único acento). */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'text-lg font-semibold tracking-tight text-gray-950',
        className,
      )}
    >
      stack<span className="text-brand-500">.</span>tec
    </span>
  )
}
