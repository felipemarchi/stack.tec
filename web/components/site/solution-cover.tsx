import type { Icon } from '@phosphor-icons/react'
import {
  ForkKnife,
  Heartbeat,
  Scissors,
  Storefront,
  Wallet,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

import type { Solution } from '@/content/site'
import { cn } from '@/lib/cn'

type Tone = 'dark' | 'light' | 'tint' | 'grid'

/**
 * Identidade visual de cada solução (símbolo + tom de fundo). Fica no componente pra manter
 * o content/site.ts livre de presentation. Tons variados dão diversidade de fundo à galeria
 * (requisito da taste), sem sair do sistema: um acento só (vermilion), neutros silver.
 */
const visuals: Record<string, { icon: Icon; tone: Tone }> = {
  mercado: { icon: Storefront, tone: 'dark' },
  carteira: { icon: Wallet, tone: 'light' },
  atelie: { icon: Scissors, tone: 'tint' },
  cardapio: { icon: ForkKnife, tone: 'grid' },
  clinica: { icon: Heartbeat, tone: 'light' },
}

const fallbackVisual = { icon: Storefront, tone: 'light' as Tone }

const toneWrap: Record<Tone, string> = {
  dark: 'bg-gray-950',
  light: 'bg-gray-50',
  tint: 'bg-brand-50',
  grid: 'bg-white',
}

const toneIcon: Record<Tone, string> = {
  dark: 'text-brand-500',
  light: 'text-gray-300',
  tint: 'text-brand-500',
  grid: 'text-gray-300',
}

// Grade sutil ("blueprint") pro tom grid — nada de SVG na mão, só CSS.
const gridStyle = {
  backgroundImage:
    'linear-gradient(to right, var(--color-gray-100) 1px, transparent 1px), linear-gradient(to bottom, var(--color-gray-100) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

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
  // Capa real (screenshot/mockup em /public) tem prioridade quando existir.
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

  const { icon: Mark, tone } = visuals[solution.slug] ?? fallbackVisual

  return (
    <div
      aria-hidden="true"
      className={cn('relative h-full w-full overflow-hidden', toneWrap[tone], className)}
      style={tone === 'grid' ? gridStyle : undefined}
    >
      {/* Símbolo do produto, grande e deslocado (marca d'água). */}
      <Mark
        weight="duotone"
        className={cn(
          'absolute -right-6 -bottom-8 h-40 w-40 sm:h-44 sm:w-44',
          toneIcon[tone],
        )}
      />
    </div>
  )
}
