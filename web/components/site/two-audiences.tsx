import { Check } from '@phosphor-icons/react/dist/ssr'

import { Reveal } from '@/components/motion/reveal'
import { ButtonLink, Container } from '@/components/ui'
import {
  ctaLabels,
  leadMessages,
  mailtoUrl,
  whatsappUrl,
} from '@/content/site'
import { cn } from '@/lib/cn'

const empresaPoints = [
  'Você fala a língua do seu negócio, o código é com a gente.',
  'A gente escolhe (ou monta) a solução certa pro seu caso.',
  'Suporte de quem construiu, não de call center.',
]

const devPoints = [
  'Sua solução na frente de quem já procura por ela.',
  'A stack cuida de venda, cobrança e primeira conversa.',
  'Você foca no produto, a distribuição é com a gente.',
]

function Points({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="mt-6 flex flex-col gap-3">
      {items.map((point) => (
        <li key={point} className="flex items-start gap-3">
          <Check
            size={20}
            weight="bold"
            className="mt-0.5 shrink-0 text-brand-500"
          />
          <span className={cn('text-[15px]', dark ? 'text-gray-300' : 'text-gray-600')}>
            {point}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function TwoAudiences() {
  return (
    <section id="empresas" className="py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-title-sm font-semibold tracking-tight text-gray-950 sm:text-title-md">
            A stack trabalha pros dois lados
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            De um lado, a empresa que precisa de software. Do outro, o dev que já
            fez software. A gente conecta os dois.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Empresário — painel claro */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 lg:p-10">
              <span className="font-mono text-xs text-gray-500">
                Para a sua empresa
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950">
                Descreve o problema. A gente resolve.
              </h3>
              <p className="mt-3 text-[15px] text-gray-600">
                Não precisa montar time de tecnologia nem entender de código. Conta
                o que trava a sua operação e recebe uma solução pronta pra usar.
              </p>
              <Points items={empresaPoints} />
              <div className="mt-8 pt-2">
                <ButtonLink
                  href={whatsappUrl(leadMessages.empresa.body)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ctaLabels.empresa}
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Dev — painel escuro (acento pop no near-black) */}
          <Reveal className="h-full" delay={0.08}>
            <div
              id="devs"
              className="flex h-full flex-col rounded-3xl bg-gray-950 p-8 lg:p-10"
            >
              <span className="font-mono text-xs text-gray-400">
                Para quem desenvolve
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Cadastre sua solução. A stack vende por você.
              </h3>
              <p className="mt-3 text-[15px] text-gray-300">
                Fez um bom SaaS e não curte a parte de vender? Coloca na pilha. A
                gente leva o seu produto pra quem precisa dele.
              </p>
              <Points items={devPoints} dark />
              <div className="mt-8 pt-2">
                <ButtonLink
                  href={mailtoUrl(
                    leadMessages.dev.subject,
                    leadMessages.dev.body,
                  )}
                  variant="accent"
                >
                  {ctaLabels.dev}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
