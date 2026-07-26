/* stack.tec — interações do site estático. Vanilla, sem dependências. */
;(function () {
  'use strict'

  /* ---------- Menu mobile ---------- */
  var toggle = document.getElementById('navToggle')
  var mobile = document.getElementById('navMobile')

  if (toggle && mobile) {
    var iconOpen = toggle.querySelector('[data-menu-open]')
    var iconClose = toggle.querySelector('[data-menu-close]')

    var setMenu = function (open) {
      mobile.hidden = !open
      toggle.setAttribute('aria-expanded', String(open))
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu')
      if (iconOpen) iconOpen.hidden = open
      if (iconClose) iconClose.hidden = !open
    }

    toggle.addEventListener('click', function () {
      setMenu(mobile.hidden)
    })

    // Fecha ao navegar por um link do menu.
    mobile.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false)
    })
  }

  /* ---------- Reveal on scroll ---------- */
  var revealables = document.querySelectorAll('.reveal, .reveal-stack')

  var showAll = function () {
    revealables.forEach(function (el) {
      el.classList.add('is-visible')
    })
  }

  if ('IntersectionObserver' in window && revealables.length) {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target) // once
          }
        })
      },
      { threshold: 0.2 },
    )
    revealables.forEach(function (el) {
      observer.observe(el)
    })
  } else {
    // Sem IntersectionObserver: mostra tudo (nada fica escondido).
    showAll()
  }

  /* ---------- Ano do rodapé ---------- */
  var year = document.getElementById('year')
  if (year) year.textContent = String(new Date().getFullYear())
})()
