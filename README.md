# stack.tec

Uma pilha de soluções digitais pro seu negócio. Landing/portfólio dos SaaS da stack.tec, para
dois públicos: empresários (solicitam uma solução) e devs (cadastram a sua).

Site **Next-only** (sem backend próprio nesta fase). Decisões e divergências da base em
[`CLAUDE.md`](./CLAUDE.md).

## Stack
Next 16 (App Router) · React 19 · Tailwind v4 · pnpm · Outfit + JetBrains Mono · Motion ·
Phosphor. Construído sob a skill de design `taste` (light-first premium, acento único `#fd4311`).

## Rodar
```bash
cd web
pnpm install
pnpm dev      # http://localhost:3000
```
Build de produção: `pnpm build`. Lint: `pnpm lint`.

## Estrutura
```
stack.tec/
  web/                 # Next.js (App Router)
    app/               # layout, page, manifest, globals.css (design tokens)
    components/site/    # seções da landing (nav, hero, galeria, ...)
    components/         # ui primitivos + motion
    content/site.ts     # CONTEÚDO central (soluções, segmentos, contato) — editar aqui
    public/            # ícone + capas
  CLAUDE.md            # decisões do projeto
  README.md
```

## A preencher (placeholders)
Tudo em [`web/content/site.ts`](./web/content/site.ts):
- `contact.whatsapp` (formato E.164, ex. `5511988887777`) e `contact.email`
- `siteUrl` (domínio de produção)
- `solutions[]`: os 5 SaaS reais (nome, segmento, pitch curto, url). Enquanto `url` for `'#'`,
  o card aparece como "Em breve".
- Capas dos 5 (imagens em `web/public/`, campo `cover`) — a gerar no brandkit.
