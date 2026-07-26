import { Reveal } from '@/components/motion/reveal'
import { ButtonLink, Container } from '@/components/ui'
import { ctaLabels, leadMessages, mailtoUrl, whatsappUrl } from '@/content/site'

export function FinalCta() {
  return (
    <section className="bg-brand-500 py-20 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-title-sm font-semibold tracking-tight text-gray-950 sm:text-title-md">
            Vamos simplificar o seu negócio?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-gray-950">
            Conta o que você precisa resolver. A primeira conversa é rápida e sem
            compromisso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <ButtonLink
              href={whatsappUrl(leadMessages.empresa.body)}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              {ctaLabels.empresa}
            </ButtonLink>
            <p className="text-sm text-gray-950">
              É dev?{' '}
              <a
                href={mailtoUrl(leadMessages.dev.subject, leadMessages.dev.body)}
                className="font-semibold underline underline-offset-4 hover:no-underline"
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
