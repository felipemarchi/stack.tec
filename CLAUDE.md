# CLAUDE.md — stack.tec (herda de /Code/CLAUDE.md)

**TIPO:** site institucional / landing marketing (**Next-only**). **Não** é SaaS multi-tenant.

## O que é
Vitrine/portfólio dos SaaS da stack.tec para dois públicos: **empresário** (solicita uma
solução) e **dev** (cadastra a sua e a stack vende). Nesta fase é só a landing; captação por
WhatsApp/e-mail. O marketplace com contas de dev, se acontecer, vira projeto próprio sobre a
base multi-tenant (aí sim herda a arquitetura de §3 da base).

## Divergências conscientes da base (§9 da base pede declarar)
- **Sem `api/`(.NET), sem `db/`(Postgres), sem multi-tenant/RLS, sem BFF.** Herda só o
  **tooling de front** do `_base/web`, não a arquitetura de SaaS.
- **PWA sem service worker** (só manifest instalável). Landing não precisa de offline; a base
  também não embarca SW.
- **Dark mode adiado** — v1 é **light-locked** (brief: "light-first premium"). A mecânica de
  tema (`ThemeContext` + script anti-FOUC no `layout.tsx`) fica pronta pra ligar depois.
- **Auth: N/A** nesta fase (sem login).

## Stack
Next 16 (App Router, Turbopack) + React 19 + **Tailwind v4** (CSS-first, tokens em
`web/app/globals.css`, sem `tailwind.config`) + **pnpm**. Fontes **Outfit** + **JetBrains
Mono** via `next/font`. **Motion** (`motion/react`) pro movimento. **Phosphor** (ícones, entrada
`/dist/ssr` nos server components). Alias `@/*`. ESLint 9 flat + Prettier (igual à base).

## Design system (construído sob a skill `design-taste-frontend`)
- **Light-locked** (Page Theme Lock). Nenhuma seção inverte.
- **Acento ÚNICO: `brand` = vermilion `#fd4311`** (Color Consistency Lock). Neutros = rampa
  **silver/gray fria** + off-black. Nada de 2º acento.
- **Shape lock:** soft (botões `rounded-xl`, cards `rounded-2xl/3xl`).
- **Contraste:** botão primário é **near-black** (`bg-gray-950`, AA de sobra); o vermilion
  aparece com parcimônia (marca, palavra de destaque, hovers, faixa final). `#fd4311` como
  texto só em tamanho grande.
- **Copy pt-BR, ZERO em-dash** na página (taste §9.G). Voz direta e humana.
- Pre-flight da taste rodado (sem em-dash, ≤1 eyebrow/3 seções, 5 células = 5 SaaS, sem
  scroll-listener na mão, reduced-motion honrado, sem overflow horizontal).

## Conteúdo (onde editar sem tocar em componente)
`web/content/site.ts` centraliza tudo. **Placeholders a preencher (TODO):**
- `contact.whatsapp` (E.164, só dígitos) e `contact.email` — hoje são placeholder.
- `siteUrl` — domínio real de produção.
- `solutions[]` — os **5 SaaS reais** (nome, segmento, pitch, url). Hoje são stand-ins; com
  `url === '#'` o card mostra "Em breve".
- Capas: `solution.cover` (imagem em `web/public/`) quando gerar no **brandkit**. Sem isso, o
  `SolutionCover` cai num title card desenhado, coeso com o sistema.
- Segmentos: `web/components/site/segments.tsx` (label + ícone Phosphor).

## Rodar
```
cd web
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # produção (type-check + build)
pnpm lint
```

## Deploy (follow-up, não configurado)
**Render** (§8 da base). Cabe static export ou SSR. Medir cold start antes de prometer.

## Backlog
1. **5 SaaS reais** + **capas brandkit** + wiring das URLs.
2. WhatsApp/e-mail reais + `siteUrl`.
3. OG image (social) e ícones PNG do manifest (hoje o manifest usa o `icon.svg`).
4. (Futuro) marketplace com contas de dev → SaaS sobre a base multi-tenant.
