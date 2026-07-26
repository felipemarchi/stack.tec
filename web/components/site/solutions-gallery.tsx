import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

import { Reveal } from '@/components/motion/reveal'
import { SolutionCover } from '@/components/site/solution-cover'
import { ButtonLink, Container } from '@/components/ui'
import { solutions } from '@/content/site'
import { cn } from '@/lib/cn'

export function SolutionsGallery() {
  return (
    <section id="solucoes" className="py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-title-sm font-semibold tracking-tight text-gray-950 sm:text-title-md">
            As soluções da stack
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Produtos prontos para vários segmentos, num só lugar. A pilha cresce
            conforme novos problemas viram solução.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => {
            const featured = i === 0
            const isLive = solution.url !== '#'
            const spanClass = featured ? 'md:col-span-2' : ''

            const card = (
              <div
                className={cn(
                  'group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-200',
                  'hover:-translate-y-1 hover:border-brand-500 hover:shadow-theme-lg',
                )}
              >
                <div
                  className={cn(
                    'relative w-full',
                    featured ? 'aspect-[2/1]' : 'aspect-[16/10]',
                  )}
                >
                  <SolutionCover
                    solution={solution}
                    sizes={
                      featured
                        ? '(max-width: 768px) 100vw, 66vw'
                        : '(max-width: 768px) 100vw, 33vw'
                    }
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 lg:p-6">
                  <span className="font-mono text-xs text-gray-500">
                    {solution.segment}
                  </span>
                  <h3
                    className={cn(
                      'mt-2 font-semibold tracking-tight text-gray-950',
                      featured ? 'text-2xl' : 'text-xl',
                    )}
                  >
                    {solution.name}
                  </h3>
                  <p className="mt-2 text-[15px] text-gray-600">
                    {solution.pitch}
                  </p>
                  <span
                    className={cn(
                      'mt-5 inline-flex items-center gap-1 text-sm font-medium',
                      isLive
                        ? 'text-gray-950 group-hover:text-brand-600'
                        : 'text-gray-400',
                    )}
                  >
                    {isLive ? (
                      <>
                        Acessar
                        <ArrowUpRight
                          size={16}
                          weight="bold"
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </>
                    ) : (
                      'Em breve'
                    )}
                  </span>
                </div>
              </div>
            )

            return (
              <Reveal
                key={solution.slug}
                delay={i * 0.06}
                className={cn('h-full', spanClass)}
              >
                {isLive ? (
                  <a
                    href={solution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                    aria-label={`${solution.name}: ${solution.pitch}`}
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink
            href="#contato"
            variant="secondary"
            className="w-full sm:w-auto sm:min-w-[320px]"
          >
            Não encontrou o que procura?
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
