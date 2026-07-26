import Image from 'next/image'

import type { Solution } from '@/content/site'
import { cn } from '@/lib/cn'

/**
 * Capa de uma solução. Se `cover` estiver setado (imagem em /public, ex. gerada no brandkit),
 * usa next/image. Enquanto não há capa real, cai num cover desenhado (title card) — coeso com
 * o sistema, trocável por imagem sem tocar no layout.
 */
export function SolutionCover({
  solution,
  className,
  sizes,
  priority,
}: {
  solution: Solution
  className?: string
  sizes?: string
  priority?: boolean
}) {
  if (solution.cover) {
    return (
      <Image
        src={solution.cover}
        alt={`${solution.name}, ${solution.segment}`}
        fill
        sizes={sizes ?? '(max-width: 768px) 100vw, 40vw'}
        priority={priority}
        className={cn('object-cover', className)}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex h-full w-full flex-col justify-between bg-gray-100 p-6',
        className,
      )}
    >
      <span className="font-mono text-xs text-gray-500">{solution.segment}</span>
      <div>
        <span className="block h-1 w-8 rounded-full bg-brand-500" />
        <span className="mt-3 block text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          {solution.name}
        </span>
      </div>
    </div>
  )
}
