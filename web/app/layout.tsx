import './globals.css'

import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Outfit } from 'next/font/google'

import { siteUrl } from '@/content/site'
import { ThemeProvider } from '@/context/ThemeContext'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const description =
  'Software pronto e sob medida para vários segmentos. Você descreve o problema, a gente entrega a solução. É dev? Cadastre sua solução e deixe a stack vender por você.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'stack.tec · uma pilha de soluções digitais pro seu negócio',
  description,
  applicationName: 'stack.tec',
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  appleWebApp: { capable: true, title: 'stack.tec', statusBarStyle: 'default' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'stack.tec',
    url: '/',
    title: 'stack.tec · uma pilha de soluções digitais pro seu negócio',
    description,
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

/**
 * Aplica a classe `.dark` do localStorage ANTES da 1ª pintura (mata o flash de tema). Roda no
 * <html> com suppressHydrationWarning, então a mutação da classe não gera mismatch. v1 fica
 * sempre light (nada grava 'dark'), mas o gancho já está pronto.
 */
const themeInitScript = `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${outfit.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
