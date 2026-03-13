import { useInsertionEffect } from 'react'

const BUTTON_VARIANTS = {
  menu: 'menu-btn',
  hero: 'cta-btn',
  service: 'service-btn',
  idea: 'idea-btn',
  case: 'case-view-all',
  final: 'final-cta-btn',
  testimonialNav: 'testimonial-nav',
}

const BUTTON_STYLE_ID = 'gamegenesis-button-styles'

const BUTTON_STYLES = `
.menu-btn {
  width: 4.2rem;
  height: 3.15rem;
  border: none;
  border-radius: 999px;
  background: #95fbf6;
  box-shadow: 0 0 14px rgba(149, 251, 246, 0.24);
  cursor: pointer;
}

.menu-btn span {
  width: 1.05rem;
  height: 1.45rem;
  border: none;
  border-radius: 0;
  position: relative;
  display: block;
}

.menu-btn span::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: #060910;
  transform: translateX(-50%);
}

.menu-btn span::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0.43rem;
  width: 0.85rem;
  height: 0.95rem;
  transform: translateX(-50%);
  background: #060910;
  clip-path: polygon(48% 0, 62% 18%, 87% 16%, 70% 35%, 84% 54%, 58% 51%, 52% 100%, 45% 54%, 20% 52%, 34% 34%, 13% 16%, 39% 18%);
}

.cta-btn {
  position: relative;
  border: 1.5px solid rgba(247, 121, 166, 0.88);
  color: #f78aaa;
  background: rgba(10, 8, 18, 0.84);
  font-family: 'Nova Flat', cursive;
  font-size: clamp(1.02rem, 1.22vw, 1.3rem);
  font-weight: 400;
  letter-spacing: 0.02em;
  padding: 0.92rem 1.52rem 0.95rem;
  clip-path: polygon(0 38%, 6% 0, 40% 0, 44% 18%, 66% 18%, 70% 0, 100% 0, 100% 100%, 68% 100%, 64% 86%, 0 86%);
  cursor: pointer;
}

.cta-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1.5px solid rgba(247, 121, 166, 0.82);
  clip-path: inherit;
  transform: translate(0.48rem, 0.42rem);
  pointer-events: none;
}

.service-btn {
  margin-top: 2.2rem;
  position: relative;
  border: 1px solid #96faff;
  background: #9ee8eb;
  color: #0f1b1d;
  font-size: clamp(1.05rem, 1.35vw, 1.42rem);
  line-height: 1;
  padding: 1.05rem 1.95rem 1.08rem;
  clip-path: polygon(0 0, 92% 0, 100% 14%, 100% 78%, 88% 100%, 0 100%);
  cursor: pointer;
}

.service-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid #96faff;
  clip-path: polygon(0 0, 92% 0, 100% 14%, 100% 78%, 88% 100%, 0 100%);
  transform: translate(0.42rem, 0.36rem);
  pointer-events: none;
}

.idea-btn {
  margin-top: clamp(1.7rem, 2.6vw, 2.55rem);
  position: relative;
  border: 1px solid #96faff;
  background: #9ee8eb;
  color: #0f1b1d;
  font-family: 'Nova Flat', cursive;
  font-size: clamp(1.18rem, 1.42vw, 1.62rem);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1;
  padding: 1.22rem 2.3rem 1.24rem;
  min-width: clamp(19rem, 24vw, 24rem);
  clip-path: polygon(0 0, 35% 0, 39% 18%, 54% 18%, 58% 0, 100% 0, 100% 78%, 70% 78%, 64% 100%, 0 100%);
  cursor: pointer;
}

.idea-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid #96faff;
  clip-path: polygon(0 0, 35% 0, 39% 18%, 54% 18%, 58% 0, 100% 0, 100% 78%, 70% 78%, 64% 100%, 0 100%);
  transform: translate(0.78rem, 0.58rem);
  pointer-events: none;
}

.case-view-all {
  margin-top: 0.15rem;
  border: 1px solid rgba(247, 121, 166, 0.85);
  background: rgba(17, 8, 22, 0.85);
  color: #f6a4c1;
  font-size: clamp(0.95rem, 1.1vw, 1.15rem);
  line-height: 1;
  padding: 0.72rem 1.45rem;
  clip-path: polygon(0 36%, 8% 0, 30% 0, 34% 12%, 58% 12%, 62% 0, 100% 0, 100% 100%, 68% 100%, 64% 88%, 0 88%);
  cursor: pointer;
}

.final-cta-btn {
  margin-top: clamp(1.2rem, 2.4vw, 2.05rem);
  position: relative;
  border: 1px solid #96faff;
  background: #9ee8eb;
  color: #0f1b1d;
  font-size: clamp(1rem, 1.25vw, 1.35rem);
  line-height: 1;
  padding: 1rem 1.75rem 1.05rem;
  min-width: clamp(15rem, 26vw, 20rem);
  clip-path: polygon(0 0, 93% 0, 100% 14%, 100% 79%, 89% 100%, 0 100%);
  cursor: pointer;
}

.final-cta-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid #96faff;
  clip-path: polygon(0 0, 93% 0, 100% 14%, 100% 79%, 89% 100%, 0 100%);
  transform: translate(0.72rem, 0.6rem);
  pointer-events: none;
}

.testimonial-nav {
  position: relative;
  top: auto;
  transform: none;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  border: none;
  background: #92eef4;
  color: #0b1316;
  font-size: 2.4rem;
  line-height: 1;
  display: grid;
  place-items: center;
  padding: 0;
  cursor: pointer;
  z-index: 3;
}

.testimonial-nav-prev {
  grid-column: 1;
  left: auto;
}

.testimonial-nav-next {
  grid-column: 3;
  right: auto;
}

@media (max-width: 980px) {
  .menu-btn {
    width: 2.95rem;
    height: 2.2rem;
  }

  .cta-btn {
    margin-inline: auto;
    font-size: 0.9rem;
    padding: 0.62rem 1rem 0.66rem;
  }

  .cta-btn::after {
    transform: translate(0.24rem, 0.2rem);
  }

  .idea-btn {
    min-width: 15.5rem;
  }

  .testimonial-nav {
    width: 2.9rem;
    height: 2.9rem;
    font-size: 2rem;
  }
}

@media (max-width: 640px) {
  .menu-btn {
    width: 2.35rem;
    height: 1.8rem;
  }

  .service-btn {
    margin-top: 0.95rem;
    border-width: 1px;
    font-size: 0.78rem;
    padding: 0.52rem 0.9rem 0.56rem;
  }

  .service-btn::after {
    border-width: 1px;
    transform: translate(0.2rem, 0.17rem);
  }

  .idea-btn {
    margin-top: 0.7rem;
    border-width: 1px;
    font-size: 0.76rem;
    min-width: 12.8rem;
    padding: 0.62rem 1.05rem 0.66rem;
  }

  .idea-btn::after {
    border-width: 1px;
    transform: translate(0.3rem, 0.22rem);
  }

  .case-view-all {
    font-size: 0.62rem;
    padding: 0.38rem 0.62rem;
    border-width: 1px;
  }

  .final-cta-btn {
    margin-top: 0.8rem;
    border-width: 1px;
    min-width: 11.8rem;
    font-size: 0.74rem;
    padding: 0.55rem 0.95rem 0.58rem;
  }

  .final-cta-btn::after {
    border-width: 1px;
    transform: translate(0.28rem, 0.23rem);
  }

  .testimonial-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1.25rem;
  }

  .testimonial-nav-prev {
    left: 0.1rem;
  }

  .testimonial-nav-next {
    right: 0.1rem;
  }
}
`

function ensureButtonStyles() {
  if (typeof document === 'undefined') {
    return
  }

  if (document.getElementById(BUTTON_STYLE_ID)) {
    return
  }

  const style = document.createElement('style')
  style.id = BUTTON_STYLE_ID
  style.textContent = BUTTON_STYLES
  document.head.appendChild(style)
}

function Button({ variant, className = '', type = 'button', ...props }) {
  useInsertionEffect(() => {
    ensureButtonStyles()
  }, [])

  const variantClassName = BUTTON_VARIANTS[variant] || ''
  const combinedClassName = [variantClassName, className].filter(Boolean).join(' ')

  return <button type={type} className={combinedClassName || undefined} {...props} />
}

export default Button
