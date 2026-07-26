import { ButtonLink } from '@/components/ui'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-sm text-gray-500">Erro 404</span>
      <h1 className="mt-3 text-title-sm font-semibold tracking-tight text-gray-950 sm:text-title-md">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-sm text-gray-600">
        O link que você abriu não existe ou foi movido. Volte pro início e siga
        pela pilha.
      </p>
      <ButtonLink href="/" className="mt-8">
        Voltar pro início
      </ButtonLink>
    </main>
  )
}
