import type { Icon } from '@phosphor-icons/react'
import {
  ForkKnife,
  GraduationCap,
  Heartbeat,
  Scissors,
  Storefront,
  Truck,
  Wallet,
  Wrench,
} from '@phosphor-icons/react/dist/ssr'

import { Reveal } from '@/components/motion/reveal'
import { Container } from '@/components/ui'

type Segment = { label: string; icon: Icon }

const segments: Segment[] = [
  { label: 'Varejo', icon: Storefront },
  { label: 'Alimentação', icon: ForkKnife },
  { label: 'Saúde', icon: Heartbeat },
  { label: 'Beleza', icon: Scissors },
  { label: 'Serviços', icon: Wrench },
  { label: 'Educação', icon: GraduationCap },
  { label: 'Logística', icon: Truck },
  { label: 'Finanças', icon: Wallet },
]

export function Segments() {
  return (
    <section
      id="segmentos"
      className="overflow-hidden border-y border-gray-200 bg-gray-50 py-20 lg:py-28"
    >
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-title-sm font-semibold tracking-tight text-gray-950 sm:text-title-md">
            Tecnologia para vários segmentos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Do balcão ao consultório, a stack se molda ao seu mercado. Se o seu
            segmento não está aqui, é só pedir.
          </p>
        </div>
      </Container>

      {/* Carrossel infinito (CSS marquee). Lista duplicada -> translada -50% sem emenda. */}
      <Reveal className="mt-12">
        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
          <div className="flex w-max animate-marquee items-stretch will-change-transform group-hover:[animation-play-state:paused]">
            {[...segments, ...segments].map((segment, i) => {
              const Icon = segment.icon
              return (
                <div
                  key={i}
                  className="mr-4 flex h-36 w-40 shrink-0 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-xs"
                >
                  <Icon size={28} weight="duotone" className="text-brand-500" />
                  <span className="text-base font-medium text-gray-900">
                    {segment.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
