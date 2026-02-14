const root = document.documentElement
const toggle = document.getElementById('themeToggle')
const key = 'lemon-theme'

function applyTheme(t) {
  if (t === 'light') root.setAttribute('data-theme', 'light')
  else if (t === 'dark') root.setAttribute('data-theme', 'dark')
  else root.removeAttribute('data-theme')
  toggle.textContent = root.getAttribute('data-theme') === 'dark' ? '🌙' : '☀️'
}

function initTheme() {
  const saved = localStorage.getItem(key)
  applyTheme(saved)
}

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme')
  const next = current === 'dark' ? 'light' : 'dark'
  localStorage.setItem(key, next)
  applyTheme(next)
})

const y = document.getElementById('year')
if (y) y.textContent = new Date().getFullYear()

initTheme()