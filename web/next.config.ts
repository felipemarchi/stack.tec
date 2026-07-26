import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // SVGR: `import Icon from './x.svg'` vira componente React.
  // Precisa das duas regras: webpack (build) e turbopack (dev/build do Next 16).
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    // Permite servir SVGs do /public via next/image. "dangerous" só pra SVG remoto
    // não-confiável; aqui são assets próprios. Ainda assim blindamos (§6 CLAUDE.md): o
    // otimizador força download em vez de render inline e aplica uma CSP que neutraliza
    // script/objeto embutido. Sem `remotePatterns`, só assets locais chegam a este caminho.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig
