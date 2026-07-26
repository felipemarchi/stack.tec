'use client'

import { ArrowDown } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'

import { SolutionCover } from '@/components/site/solution-cover'
import { ButtonLink, Container } from '@/components/ui'
import { solutions } from '@/content/site'

const ease = [0.16, 1, 0.3, 1] as const

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

// Posições da "pilha" de capas (fan-out). Offsets em px, sobre um container relativo.
const stackLayout = [
  { rotate: -8, x: -40, y: 26, scale: 0.9, z: 10 },
  { rotate: 6, x: 42, y: -14, scale: 0.95, z: 20 },
  { rotate: -2, x: 0, y: 0, scale: 1, z: 30 },
]

export function Hero() {
  const reduce = useReducedMotion()
  const stackCards = solutions.slice(0, 3)

  return (
    <section id="top" className="relative overflow-hidden">
      {/* brilho silver muito sutil atrás do visual, sem gradiente de IA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_78%_28%,var(--color-gray-100),transparent_70%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-2 lg:gap-16 lg:pt-24 lg:pb-28">
          <motion.div
            initial={reduce ? false : 'hidden'}
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.h1
              variants={item}
              className="text-title-md font-semibold tracking-tight text-gray-950 sm:text-title-lg"
            >
              Uma <span className="text-brand-500">pilha</span> de soluções pro
              seu negócio.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg text-gray-600"
            >
              Software pronto e sob medida para vários segmentos, feito pra
              simplificar a sua operação. Você pede, a gente entrega.
            </motion.p>

            <motion.div variants={item} className="mt-9">
              <ButtonLink
                href="#solucoes"
                className="w-full sm:w-auto sm:min-w-[260px]"
              >
                Encontre uma solução
                <ArrowDown size={18} weight="bold" />
              </ButtonLink>
            </motion.div>
          </motion.div>

          {/* Visual: "pilha" de capas. Só no desktop (escondido em tablet/mobile). */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[400px] lg:mx-0 lg:ml-auto lg:block">
            {stackCards.map((solution, i) => {
              const cfg = stackLayout[i]
              return (
                <motion.div
                  key={solution.slug}
                  className="absolute inset-0 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-theme-xl"
                  style={{ zIndex: cfg.z }}
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, x: 0, y: 24, rotate: 0, scale: 0.9 }
                  }
                  animate={{
                    opacity: 1,
                    x: cfg.x,
                    y: cfg.y,
                    rotate: cfg.rotate,
                    scale: cfg.scale,
                  }}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.12, ease }}
                >
                  <div className="relative h-full w-full">
                    <SolutionCover
                      solution={solution}
                      sizes="(max-width: 1024px) 0px, 400px"
                      priority={i === stackLayout.length - 1}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
