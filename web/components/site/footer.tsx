import { EnvelopeSimple, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

import { Logo } from '@/components/site/logo'
import { Container } from '@/components/ui'
import {
  leadMessages,
  mailtoUrl,
  navLinks,
  solutions,
  whatsappUrl,
} from '@/content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-[15px] text-gray-600">
              Uma pilha de soluções digitais pra simplificar o seu negócio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl(leadMessages.empresa.body)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:border-gray-950"
              >
                <WhatsappLogo size={18} weight="fill" className="text-brand-500" />
                WhatsApp
              </a>
              <a
                href={mailtoUrl('Contato pela stack.tec', 'Olá! ')}
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:border-gray-950"
              >
                <EnvelopeSimple size={18} className="text-brand-500" />
                E-mail
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="text-sm font-semibold text-gray-950">Navegar</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Soluções no rodapé">
            <h3 className="text-sm font-semibold text-gray-950">Soluções</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {solutions.map((solution) => {
                const isLive = solution.url !== '#'
                return (
                  <li key={solution.slug}>
                    <a
                      href={isLive ? solution.url : '#solucoes'}
                      {...(isLive
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="text-sm text-gray-600 transition-colors hover:text-gray-950"
                    >
                      {solution.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-gray-200 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} stack.tec</span>
          <span>Feito para simplificar.</span>
        </div>
      </Container>
    </footer>
  )
}
