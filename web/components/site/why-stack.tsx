import { Lightning, Stack, Storefront } from '@phosphor-icons/react/dist/ssr'

import { Reveal } from '@/components/motion/reveal'
import { Container } from '@/components/ui'

const points = [
  {
    icon: Stack,
    title: 'Uma porta só',
    body: 'Você fala com a stack, não com cinco fornecedores diferentes.',
  },
  {
    icon: Storefront,
    title: 'Pensado por segmento',
    body: 'Cada solução nasce de um problema real de um mercado específico.',
  },
  {
    icon: Lightning,
    title: 'Do problema ao ar',
    body: 'A parte técnica é com a gente. Você cuida de tocar o negócio.',
  },
]

export function WhyStack() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-title-sm font-semibold tracking-tight text-gray-950 sm:text-title-md">
              Uma pilha, não peças soltas.
            </h2>
            <p className="mt-5 max-w-md text-lg text-gray-600">
              Software de verdade resolve o problema e some do seu caminho. A
              stack junta produtos que conversam entre si e com o seu jeito de
              trabalhar.
            </p>
          </div>
          <ul className="flex flex-col gap-8">
            {points.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={i * 0.08} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                  <Icon size={22} weight="duotone" className="text-brand-600" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-gray-950">
                    {title}
                  </h3>
                  <p className="mt-1 text-[15px] text-gray-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
