import { useInsertionEffect } from 'react'

const footerColumns = {
  quick: ['Services', 'Case Studies', 'About', 'Contact', 'Blogs', 'Q&A'],
  services: ['Game Development', 'Game Art', 'Animation', 'Unity Development', 'Unreal Development', 'AR / VR Games'],
  hire: ['Hire Game Developer', 'Hire Game Designer', 'Hire Unity Developer', 'Hire Unreal Developer', 'Hire 3D Artist'],
}

const footerMarqueeItems = [
  { label: 'Let&apos;s Talk', type: 'text' },
  { label: '&#9995;', type: 'hand' },
  { label: 'Get In Touch', type: 'text' },
  { label: '&#10022;', type: 'gem' },
]

const FOOTER_STYLE_ID = 'gamegenesis-footer-styles'

const FOOTER_STYLES = `
.why-section + .footer-section {
  margin-top: clamp(0.9rem, 2.4vw, 2.2rem);
}

.footer-section {
  position: relative;
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: clamp(0.35rem, 1vw, 0.7rem) clamp(1.2rem, 4.5vw, 4.2rem) clamp(0.55rem, 1.8vw, 1.1rem);
  background: linear-gradient(180deg, rgba(11, 6, 20, 0.98), rgba(10, 5, 18, 0.99));
  border-top: 1px solid rgba(247, 121, 166, 0.55);
  overflow: hidden;
}

.footer-section::before,
.footer-section::after {
  content: '';
  position: absolute;
  pointer-events: none;
  z-index: 0;
  filter: blur(56px);
}

.footer-section::before {
  width: 24rem;
  height: 24rem;
  left: -11rem;
  bottom: -10rem;
  background: rgba(247, 121, 166, 0.28);
}

.footer-section::after {
  width: 22rem;
  height: 22rem;
  right: -10rem;
  top: 18rem;
  background: rgba(136, 245, 255, 0.18);
}

.footer-marquee {
  position: relative;
  z-index: 2;
  margin-inline: calc(50% - 50vw);
  padding: 0.5rem 0 0.62rem;
  border-top: none;
  border-bottom: 2px solid rgba(136, 245, 255, 0.96);
  background: rgba(4, 3, 12, 0.8);
  display: flex;
  overflow: hidden;
}

.footer-marquee::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 2px;
  background:
    linear-gradient(90deg,
      rgba(247, 121, 166, 0.96) 0 36%,
      transparent 36% 48%,
      rgba(247, 121, 166, 0.96) 48% 64%,
      transparent 64% 100%);
  z-index: 1;
}

.footer-marquee::after {
  content: '';
  position: absolute;
  left: 0.18rem;
  top: 50%;
  width: 0;
  height: 0;
  transform: translateY(-50%);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #95fbf6;
  z-index: 4;
}

.footer-marquee-track {
  min-width: max-content;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: clamp(1.4rem, 2.8vw, 2.7rem);
  padding-left: clamp(2.4rem, 3.2vw, 3.6rem);
  animation: footerMarqueeScroll 26s linear infinite;
  will-change: transform;
}

.footer-marquee span {
  font-family: 'Nova Flat', cursive;
  font-size: clamp(1.5rem, 1.8vw, 2rem);
  color: rgba(247, 249, 255, 0.98);
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.footer-marquee .is-icon {
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.footer-marquee .is-hand {
  color: #f782b2;
  font-size: clamp(2rem, 2.45vw, 2.75rem);
  transform: translateY(-0.02em);
}

.footer-marquee .is-gem {
  color: #95fbf6;
  font-size: clamp(1.9rem, 2.3vw, 2.45rem);
  transform: translateY(-0.02em);
}

.footer-grid {
  position: relative;
  z-index: 2;
  width: 100%;
  margin: clamp(2.1rem, 4.2vw, 3.2rem) auto 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1.4rem, 3vw, 2.8rem);
}

.footer-grid h3 {
  margin: 0 0 1.1rem;
  color: #f78aaa;
  font-family: 'Nova Flat', cursive;
  font-size: clamp(2rem, 2.35vw, 2.8rem);
  font-weight: 400;
  letter-spacing: 0.03em;
}

.footer-grid a,
.footer-grid p {
  display: block;
  margin: 0 0 0.7rem;
  color: rgba(247, 249, 255, 0.93);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.18rem, 1.22vw, 1.45rem);
  font-weight: 400;
  line-height: 1.35;
}

.footer-grid a:hover {
  color: #95fbf6;
}

.footer-contact {
  display: grid;
  gap: 0.62rem;
}

.footer-contact .contact-item {
  position: relative;
  margin: 0;
  padding-left: 2.3rem;
}

.footer-contact .contact-item::before {
  position: absolute;
  left: 0;
  top: 0.03rem;
  color: rgba(247, 249, 255, 0.92);
  font-size: 1.35rem;
  line-height: 1;
}

.footer-contact .contact-address::before {
  content: '⌖';
}

.footer-contact .contact-email::before {
  content: '✉';
}

.footer-contact .contact-handle::before {
  content: '◉';
}

.footer-cta-buttons {
  position: relative;
  z-index: 2;
  width: 100%;
  margin: clamp(2.2rem, 4.6vw, 3.2rem) auto 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.3rem, 2.8vw, 2.4rem);
}

.footer-cta-buttons button {
  position: relative;
  min-height: clamp(6rem, 8.4vw, 7.9rem);
  border: 1.5px solid rgba(247, 121, 166, 0.92);
  border-radius: 1rem;
  background: rgba(13, 8, 23, 0.84);
  color: #f78aaa;
  font-family: 'Nova Flat', cursive;
  font-size: clamp(2.2rem, 3.7vw, 4.2rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  cursor: pointer;
}

.footer-cta-buttons button::before {
  content: '';
  position: absolute;
  left: 7%;
  right: 55%;
  top: -6px;
  border-top: 1px solid currentColor;
  opacity: 0.85;
}

.footer-cta-buttons button::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1.5px solid currentColor;
  border-radius: inherit;
  transform: translate(0.46rem, 0.38rem);
  opacity: 0.85;
  pointer-events: none;
}

.footer-cta-buttons button:last-child {
  border-color: rgba(136, 245, 255, 0.94);
  color: #95fbf6;
}

.footer-brand {
  position: relative;
  z-index: 2;
  width: 100%;
  margin: clamp(1.8rem, 3.7vw, 2.8rem) auto 0;
  text-align: center;
  color: rgba(130, 78, 100, 0.92);
  font-family: 'Nova Flat', cursive;
  font-size: clamp(5.4rem, 14.2vw, 16rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
  text-shadow: 4px 4px 0 rgba(136, 245, 255, 0.55);
}

.footer-bottom {
  position: relative;
  z-index: 2;
  width: 100%;
  margin: clamp(1.2rem, 2.4vw, 1.8rem) auto 0;
  padding-top: clamp(0.85rem, 1.8vw, 1.25rem);
  border-top: 1px solid rgba(247, 121, 166, 0.52);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  color: rgba(247, 249, 255, 0.94);
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 1.02vw, 1.2rem);
}

.footer-bottom > div {
  display: inline-flex;
  align-items: center;
  gap: 0;
}

.footer-bottom a {
  color: rgba(247, 249, 255, 0.94);
  text-decoration: none;
  margin: 0;
  padding: 0 0.72rem;
  position: relative;
}

.footer-bottom a + a::before {
  content: '';
  position: absolute;
  left: -1px;
  top: 0.18rem;
  bottom: 0.18rem;
  width: 1px;
  background: rgba(247, 249, 255, 0.62);
}

@keyframes footerMarqueeScroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

@media (max-width: 980px) {
  .footer-marquee {
    padding: 0.34rem 0 0.42rem;
  }

  .footer-marquee span {
    font-size: clamp(1.08rem, 2.7vw, 1.45rem);
  }

  .footer-grid {
    margin-top: 1.35rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.15rem 1.5rem;
  }

  .footer-grid h3 {
    margin-bottom: 0.62rem;
    font-size: clamp(1.3rem, 2.6vw, 1.85rem);
  }

  .footer-grid a,
  .footer-grid p {
    margin-bottom: 0.45rem;
    font-size: clamp(0.9rem, 1.7vw, 1.08rem);
  }

  .footer-cta-buttons {
    margin-top: 1.45rem;
    gap: 1rem;
  }

  .footer-cta-buttons button {
    min-height: 4.3rem;
    font-size: clamp(1.35rem, 3.3vw, 2rem);
    border-radius: 0.7rem;
  }

  .footer-cta-buttons button::after {
    transform: translate(0.27rem, 0.21rem);
  }

  .footer-brand {
    margin-top: 1rem;
    font-size: clamp(3rem, 12.8vw, 7.4rem);
  }

  .footer-bottom {
    margin-top: 0.85rem;
    padding-top: 0.7rem;
    font-size: 0.88rem;
  }
}

@media (max-width: 640px) {
  .why-section + .footer-section {
    margin-top: 0.8rem;
  }

  .footer-section {
    padding-inline: 0.8rem;
  }

  .footer-marquee::before {
    height: 1px;
  }

  .footer-marquee::after {
    border-top-width: 7px;
    border-bottom-width: 7px;
    border-left-width: 7px;
    left: 0.1rem;
  }

  .footer-marquee-track {
    gap: 1rem;
    padding-left: 1.4rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 0.95rem;
    margin-top: 1rem;
  }

  .footer-grid h3 {
    font-size: 1.2rem;
  }

  .footer-grid a,
  .footer-grid p {
    font-size: 0.82rem;
    margin-bottom: 0.34rem;
  }

  .footer-contact .contact-item {
    padding-left: 1.65rem;
  }

  .footer-contact .contact-item::before {
    font-size: 0.95rem;
    top: 0.08rem;
  }

  .footer-cta-buttons {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin-top: 1.05rem;
  }

  .footer-cta-buttons button {
    min-height: 3.1rem;
    font-size: 1.2rem;
  }

  .footer-brand {
    margin-top: 0.7rem;
    font-size: clamp(2.2rem, 15vw, 4rem);
    text-shadow: 2px 2px 0 rgba(136, 245, 255, 0.5);
  }

  .footer-bottom {
    justify-content: center;
    text-align: center;
    font-size: 0.74rem;
  }

  .footer-bottom > div {
    justify-content: center;
    flex-wrap: wrap;
  }
}
`

function ensureFooterStyles() {
  if (typeof document === 'undefined') {
    return
  }

  if (document.getElementById(FOOTER_STYLE_ID)) {
    return
  }

  const style = document.createElement('style')
  style.id = FOOTER_STYLE_ID
  style.textContent = FOOTER_STYLES
  document.head.appendChild(style)
}

function Footer() {
  useInsertionEffect(() => {
    ensureFooterStyles()
  }, [])

  return (
    <footer className="footer-section">
      <div className="footer-marquee" aria-hidden="true">
        {[0, 1, 2].map((track) => (
          <div className="footer-marquee-track" key={track}>
            {Array.from({ length: 3 }).map((_, cycle) =>
              footerMarqueeItems.map((item, index) => (
                <span
                  className={item.type === 'text' ? undefined : `is-icon is-${item.type}`}
                  key={`${track}-${cycle}-${index}`}
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              )),
            )}
          </div>
        ))}
      </div>

      <div className="footer-grid">
        <div>
          <h3>Quick Links</h3>
          {footerColumns.quick.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </div>

        <div>
          <h3>Services</h3>
          {footerColumns.services.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </div>

        <div>
          <h3>Hire</h3>
          {footerColumns.hire.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </div>

        <div>
          <h3>Meet Us</h3>
          <div className="footer-contact">
            <p className="contact-item contact-address">3, Sagar Complex, 132 Feet Ring Rd, Satellite, Shyamal, Ahmedabad, Gujarat 380015</p>
            <p className="contact-item contact-email">getset@gamegenesis.studio</p>
            <p className="contact-item contact-handle">parth33</p>
          </div>
        </div>
      </div>

      <div className="footer-cta-buttons">
        <button type="button">Game Craft</button>
        <button type="button">Stalk Us</button>
      </div>

      <div className="footer-brand">GameGenesis</div>
      <div className="footer-bottom">
        <span>© 2026 GameGenesis. All rights reserved.</span>
        <div>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

