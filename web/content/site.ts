/**
 * Conteúdo central da landing. É aqui que se troca texto/links sem mexer em componente.
 * Os campos marcados com TODO são PLACEHOLDER — preencher com os dados reais da stack.tec.
 */

// TODO: domínio real de produção (usado no metadataBase / OpenGraph).
export const siteUrl = 'https://stack.tec'

export const contact = {
  // TODO: número real no formato E.164, só dígitos (55 + DDD + número). Ex.: 5511988887777
  whatsapp: '5599999999999',
  // TODO: e-mail real de captação de leads.
  email: 'contato@stack.tec',
}

/** Um rótulo por intenção (a taste bane 2 CTAs com a mesma intenção usando textos diferentes). */
export const ctaLabels = {
  empresa: 'Solicite uma solução',
  dev: 'Cadastre sua solução',
} as const

/** Mensagens pré-preenchidas (WhatsApp/e-mail) por intenção. */
export const leadMessages = {
  empresa: {
    subject: 'Quero uma solução pra minha empresa',
    body: 'Olá! Tenho uma empresa e quero uma solução da stack.tec.\n\nSegmento: \nO que preciso resolver: ',
  },
  dev: {
    subject: 'Quero cadastrar minha solução na stack.tec',
    body: 'Olá! Sou dev e quero cadastrar minha solução na stack.tec.\n\nSolução: \nLink: \nSegmento que atende: ',
  },
} as const

export function whatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export function mailtoUrl(subject: string, body: string) {
  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return `mailto:${contact.email}?${query}`
}

export type Solution = {
  slug: string
  name: string
  segment: string
  pitch: string
  /** '#' enquanto não há site público (o card vira "em breve", sem link quebrado). */
  url: string
  /** Caminho de imagem em /public (capa brandkit). Sem isso, cai no cover desenhado. */
  cover?: string
}

// TODO: PLACEHOLDER — trocar pelos 5 SaaS reais (nome, segmento, pitch curto, url pública).
// Enquanto url === '#', o card mostra "em breve" em vez de link.
export const solutions: Solution[] = [
  {
    slug: 'mercado',
    name: 'Mercado',
    segment: 'Varejo de bairro',
    pitch: 'Caixa, estoque e fiado do comércio no controle, sem planilha.',
    url: '#',
  },
  {
    slug: 'carteira',
    name: 'Carteira',
    segment: 'Finanças',
    pitch: 'Cobrança, recibos e fluxo de caixa pra quem trabalha por conta.',
    url: '#',
  },
  {
    slug: 'atelie',
    name: 'Ateliê',
    segment: 'Beleza e serviços',
    pitch: 'Agenda, catálogo e clientes do salão num lugar só.',
    url: '#',
  },
  {
    slug: 'cardapio',
    name: 'Cardápio',
    segment: 'Alimentação',
    pitch: 'Cardápio digital e pedidos no QR, direto pra cozinha.',
    url: '#',
  },
  {
    slug: 'clinica',
    name: 'Clínica',
    segment: 'Saúde',
    pitch: 'Agenda, prontuário e lembretes pra clínicas pequenas.',
    url: '#',
  },
]

export const navLinks = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#segmentos', label: 'Segmentos' },
  { href: '#empresas', label: 'Para empresas' },
  { href: '#devs', label: 'Para devs' },
] as const
