import { Reveal } from '@/components/motion/reveal'
import { ButtonLink, Container } from '@/components/ui'
import { ctaLabels, leadMessages, mailtoUrl, whatsappUrl } from '@/content/site'

export function FinalCta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-gray-950 py-24 lg:py-32"
    >
      {/* Luzes sobre o preto: fonte suave no topo + feixe diagonal + brilho vermilion embaixo. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 80% at 22% -10%, rgba(255,255,255,0.16), transparent 55%)',
          }}
        />
        <div
          className="absolute -top-1/3 left-[6%] h-[170%] w-[38%] -rotate-[24deg] blur-2xl"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0) 72%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 45% at 50% 128%, rgba(253,67,17,0.22), transparent 60%)',
          }}
        />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-title-sm font-semibold tracking-tight text-white sm:text-title-md">
            Vamos <span className="text-brand-500">simplificar</span> o seu
            negócio?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-gray-400">
            Conta o que você precisa resolver. A primeira conversa é rápida e sem
            compromisso.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <ButtonLink
              href={whatsappUrl(leadMessages.empresa.body)}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              className="w-full sm:w-auto sm:min-w-[260px]"
            >
              {ctaLabels.empresa}
            </ButtonLink>
            <p className="text-sm text-gray-400">
              É dev?{' '}
              <a
                href={mailtoUrl(leadMessages.dev.subject, leadMessages.dev.body)}
                className="font-semibold text-white underline underline-offset-4 hover:no-underline"
              >
                {ctaLabels.dev}
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
