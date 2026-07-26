import { cn } from '@/lib/cn'

/** Marca da stack.tec: três camadas empilhadas (a "pilha") + wordmark. Acento no topo e no ponto. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-gray-950', className)}>
      <svg
        viewBox="0 0 512 512"
        aria-hidden="true"
        className="h-6 w-6 shrink-0"
      >
        <rect x="160" y="304" width="192" height="56" rx="16" fill="currentColor" />
        <rect x="160" y="228" width="192" height="56" rx="16" fill="currentColor" />
        <rect
          x="160"
          y="152"
          width="192"
          height="56"
          rx="16"
          className="fill-brand-500"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">
        stack<span className="text-brand-500">.</span>tec
      </span>
    </span>
  )
}
