import { twMerge } from 'tailwind-merge'

/** Junta classes condicionais e resolve conflitos do Tailwind (última vence). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(' '))
}
