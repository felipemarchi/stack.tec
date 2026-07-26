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
    <section id="segmentos" className="border-y border-gray-200 bg-gray-50 py-20 lg:py-28">
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

      <Reveal className="mt-12">
        {/* scroll-snap horizontal: leitura por deslize, distinta da galeria e dos painéis */}
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex gap-4">
            {segments.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex w-40 shrink-0 snap-start flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-theme-xs"
              >
                <Icon size={28} weight="duotone" className="text-brand-500" />
                <span className="mt-8 text-base font-medium text-gray-900">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
