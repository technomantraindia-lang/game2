import { useInsertionEffect } from 'react'

import Button from './Button'
import headerLogo from '../assets/logo.png'

const HEADER_STYLE_ID = 'gamegenesis-header-styles'

const HEADER_STYLES = `
.top-nav {
  width: min(1340px, calc(100% - 2.4rem));
  margin-inline: auto;
  margin-top: 0.3rem;
  min-height: 82px;
  padding: 0.85rem 0 0.7rem;
  border-top: 1px solid rgba(246, 125, 169, 0.28);
  border-bottom: 1px solid rgba(142, 244, 255, 0.22);
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-nav .logo-wrap {
  display: flex;
  align-items: center;
  gap: 0;
}

.top-nav .logo-mark {
  width: clamp(11rem, 18vw, 15rem);
  height: auto;
  display: block;
  border: none !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  filter:
    drop-shadow(0 0 0.7px rgba(237, 172, 205, 0.95))
    drop-shadow(0 0 6px rgba(142, 244, 255, 0.18))
    saturate(1.08)
    contrast(1.08);
}

.top-nav .logo-mark::after {
  content: none !important;
}

.menu-wrap {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.menu-wrap a {
  font-family: 'Nova Flat', cursive;
  font-size: clamp(1.45rem, 1.75vw, 2rem);
  font-weight: 400;
  color: #95fbf6;
  letter-spacing: 0.02em;
  text-decoration: none;
}

.menu-wrap a:last-of-type {
  color: #f78aaa;
}

@media (max-width: 980px) {
  .top-nav {
    width: min(1340px, calc(100% - 1.2rem));
    min-height: 62px;
    padding: 0.5rem 0;
  }

  .menu-wrap {
    gap: 0.85rem;
  }

  .menu-wrap a {
    font-size: 0.96rem;
  }

  .top-nav .logo-mark {
    width: 9rem;
    height: auto;
  }
}

@media (max-width: 640px) {
  .menu-wrap a {
    font-size: 0.82rem;
  }

  .top-nav .logo-mark {
    width: 7rem;
    height: auto;
  }
}
`

function ensureHeaderStyles() {
  if (typeof document === 'undefined') {
    return
  }

  if (document.getElementById(HEADER_STYLE_ID)) {
    return
  }

  const style = document.createElement('style')
  style.id = HEADER_STYLE_ID
  style.textContent = HEADER_STYLES
  document.head.appendChild(style)
}

function Header() {
  useInsertionEffect(() => {
    ensureHeaderStyles()
  }, [])

  return (
    <header className="top-nav">
      <div className="logo-wrap">
        <img className="logo-mark" src={headerLogo} alt="GameGenesis logo" />
      </div>
      <nav className="menu-wrap">
        <a href="#portfolio">Portfolio</a>
        <a href="#menu">Menu</a>
        <Button variant="menu" aria-label="menu">
          <span />
        </Button>
      </nav>
    </header>
  )
}

export default Header
