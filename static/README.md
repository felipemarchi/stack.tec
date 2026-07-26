# stack.tec — versão estática (HTML/CSS/JS puro)

Reescrita da landing (que era Next.js) em site estático, sem framework e sem build.
São só arquivos que qualquer host serve direto.

## Arquivos

```
static/
  index.html            # a página inteira (inclui o sprite de ícones SVG inline)
  styles.css            # design system + todos os componentes
  main.js               # menu mobile, reveal-on-scroll, ano do rodapé
  icon.svg              # favicon / ícone do PWA
  manifest.webmanifest  # PWA (instalável)
```

## Rodar local

Abrir o `index.html` no navegador já funciona. Pra um preview fiel (com o manifest
e caminhos relativos certos), sirva por HTTP:

```bash
cd static
python -m http.server 8080
# abre http://localhost:8080
```

## Hospedar

Sobe a pasta `static/` inteira em qualquer host de site estático:

- **Netlify / Cloudflare Pages / Render (Static Site):** arrasta a pasta ou aponta o repo,
  publish directory = `static`.
- **GitHub Pages:** joga o conteúdo na branch/pasta publicada. Como os caminhos são
  relativos, funciona mesmo em subpasta (`usuario.github.io/repo/`).

## Editar conteúdo

- **Textos, seções, links:** direto no `index.html`.
- **WhatsApp / e-mail:** hoje são placeholders. Procure no `index.html`:
  - número: `5599999999999` (formato E.164, só dígitos: 55 + DDD + número)
  - e-mail: `contato@stack.tec`
  Os links de WhatsApp já vêm com mensagem pré-preenchida (texto codificado na URL);
  ao trocar o texto, mantenha a codificação (`%20` = espaço, `%0A` = quebra de linha).
- **Cores / tipografia / espaçamento:** tokens no topo do `styles.css` (`:root`).
  Acento único: `--brand-500: #fd4311`.

## Nota sobre as fontes

As fontes (Outfit + JetBrains Mono) vêm do Google Fonts via `<link>` no `<head>`.
É a única dependência externa. Para zerar isso (site 100% offline/self-contained),
baixe os `.woff2`, coloque numa pasta `fonts/` e troque o `<link>` por `@font-face`
no `styles.css`.
