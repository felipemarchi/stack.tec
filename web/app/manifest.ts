import type { MetadataRoute } from 'next'

/**
 * Manifest do PWA (§7 do CLAUDE.md da base). Habilita "instalar app". Service worker fica de
 * fora nesta v1: landing institucional não precisa de offline, e a base também não embarca SW.
 * Divergência registrada no CLAUDE.md do projeto.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'stack.tec',
    short_name: 'stack.tec',
    description: 'Uma pilha de soluções digitais pro seu negócio.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  }
}
