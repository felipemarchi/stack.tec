'use client'

import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'

import { Logo } from '@/components/site/logo'
import { ButtonLink, Container } from '@/components/ui'
import { ctaLabels, leadMessages, navLinks, whatsappUrl } from '@/content/site'

export function Nav() {
  const [open, setOpen] = useState(false)
  const empresaHref = whatsappUrl(leadMessages.empresa.body)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            aria-label="stack.tec, ir para o topo"
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            <Logo />
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href={empresaHref}
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              {ctaLabels.empresa}
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 text-gray-900 transition-colors hover:bg-gray-50 md:hidden"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <Container>
            <nav
              className="flex flex-col gap-1 py-4"
              aria-label="Navegação principal (mobile)"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}
              <ButtonLink
                href={empresaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2"
              >
                {ctaLabels.empresa}
              </ButtonLink>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
