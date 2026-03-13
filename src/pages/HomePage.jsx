import './HomePage.css'
import heroMainImage from '../assets/home1.png'
import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import heroSubImage from '../assets/home2.png'
import aboutImage from '../assets/home3.png'
import serviceDevImage from '../assets/home4.png'
import serviceArtImage from '../assets/home5.png'
import serviceAnimImage from '../assets/home6.png'
import guardLeftImage from '../assets/home7.png'
import guardRightImage from '../assets/home8.png'
import finalCtaImage from '../assets/home9.png'
import fireGif from '../assets/fire.gif'
import testimonialImage1 from '../assets/testimobials/testimonials1.png'
import chooseCardImage from '../assets/choose.png'
import gameIcon1 from '../assets/game/game1.png'
import gameIcon2 from '../assets/game/game2.png'
import gameIcon3 from '../assets/game/game3.png'
import gameIcon4 from '../assets/game/game4.png'
import gameIcon5 from '../assets/game/game5.png'
import gameIcon6 from '../assets/game/game6.png'
import gameIcon7 from '../assets/game/game7.png'
import gameIcon8 from '../assets/game/game8.png'
import gameIcon9 from '../assets/game/game9.png'
import gameIcon10 from '../assets/game/game10.png'
import gameIcon11 from '../assets/game/game11.png'
import gameIcon12 from '../assets/game/game12.png'
import gameIcon13 from '../assets/game/game13.png'
import gameIcon14 from '../assets/game/game14.png'
import serviceIcon1 from '../assets/icon/image1.png'
import serviceIcon2 from '../assets/icon/image2.png'
import serviceIcon3 from '../assets/icon/image3.png'

const topRibbonItems = [
  { label: 'Game Concept Art', variant: '' },
  { label: 'Game Visuals', variant: 'is-underlined' },
  { label: 'Art for Games', variant: 'is-scribble' },
  { label: 'Game Art', variant: '' },
  { label: 'Visual Game Design', variant: 'is-burst' },
]

const bottomRibbonItems = [
  { label: 'Game Art', variant: 'is-rough-box' },
  { label: 'Game Art Services', variant: '' },
  { label: 'Creative Game Art', variant: 'is-sketch-underline' },
  { label: 'Concept Art', variant: '' },
  { label: 'Character Design', variant: '' },
]

const aboutStats = [
  { value: 18, suffix: '+', label: 'Game Artists And Developers' },
  { value: 6, suffix: '+', label: 'Years of Experience' },
  { value: 20, suffix: '+', label: 'Projects Delivered' },
  { value: 17, suffix: '+', label: 'Clients' },
]

const aboutHighlights = [
  { icon: '🎮', text: 'End-to-end game development' },
  { icon: '⚡', text: 'Indie-friendly, production-ready builds' },
  { icon: '🧠', text: 'Smart decisions when budgets are tight' },
]

const gameGenres = [
  { label: 'Action', icon: gameIcon14 },
  { label: 'Adventure', icon: gameIcon1 },
  { label: 'Role-Playing', icon: gameIcon2 },
  { label: 'Casual', icon: gameIcon3 },
  { label: 'Puzzle', icon: gameIcon4 },
  { label: 'Simulation', icon: gameIcon5 },
  { label: 'Survival', icon: gameIcon6 },
  { label: 'Strategy', icon: gameIcon7 },
  { label: 'Sports', icon: gameIcon8 },
  { label: 'Arcade', icon: gameIcon9 },
  { label: 'Casino', icon: gameIcon10 },
  { label: 'Educational', icon: gameIcon11 },
  { label: 'Sandbox', icon: gameIcon12 },
  { label: 'Battle Royal', icon: gameIcon13 },
]

const caseStudies = [
  {
    id: '01',
    title: 'Battle Arena X',
    text: 'A fast-paced multiplayer action game built for smooth performance and competitive gameplay.',
    services: 'Game Development, Game Art',
    tags: ['AI', 'Game Development', 'UI/UX'],
  },
  {
    id: '02',
    title: 'Mystic Quest',
    text: 'A story-driven RPG with rich environments, stylized visuals, and scalable quest systems.',
  },
  {
    id: '03',
    title: 'Racing Rivals',
    text: 'A high-speed racing game focused on responsive controls, leaderboard competition, and replay value.',
  },
  {
    id: '04',
    title: 'Zombie Survival VR',
    text: 'An intense VR experience built with realistic interactions, immersive environments, and survival systems.',
  },
  {
    id: '05',
    title: 'Fantasy World Builder',
    text: 'A sandbox-style game featuring deep world creation, modular systems, and large-scale performance optimization.',
  },
]

const whyChooseItems = [
  'Indie Team, Serious Craft',
  'Founder-Led Vision',
  'Built for Playability',
  'Multidisciplinary Crew',
  'End-to-End Partnership',
  'Art + Tech Alignment',
]

function Ribbon({ items, className, highlightText }) {
  const loopItems = [...items, ...items]

  return (
    <div className={`ticker ${className}`}>
      <div className="ticker-track">
        <div className="ticker-group">
          {loopItems.map((item, index) => (
            <span
              className={`ticker-item ${item.label === highlightText ? 'is-highlight' : ''} ${item.variant || ''}`}
              key={`a-${item.label}-${index}`}
            >
              <span className="ticker-label">{item.label}</span>
              <i className="ticker-dot" aria-hidden="true" />
            </span>
          ))}
        </div>
        <div className="ticker-group" aria-hidden="true">
          {loopItems.map((item, index) => (
            <span
              className={`ticker-item ${item.label === highlightText ? 'is-highlight' : ''} ${item.variant || ''}`}
              key={`b-${item.label}-${index}`}
            >
              <span className="ticker-label">{item.label}</span>
              <i className="ticker-dot" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function formatAboutStat({ value, suffix }) {
  return `${value}${suffix}`
}

function getRandomSlotValue({ value, suffix }) {
  const ceiling = Math.max(value * 2, 24)
  const randomValue = Math.floor(Math.random() * ceiling)
  return `${randomValue}${suffix}`
}

function useRevealOnIntersect(threshold = 0.28) {
  const ref = useRef(null)
  const [hasRevealed, setHasRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node || hasRevealed) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasRevealed(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [hasRevealed, threshold])

  return [ref, hasRevealed]
}

function HomePage() {
  const aboutSceneRef = useRef(null)
  const aboutStatsRef = useRef(null)
  const [aboutHeadingRef, hasPlayedAboutHeading] = useRevealOnIntersect(0.22)
  const [gamesSectionRef, hasPlayedGamesAccent] = useRevealOnIntersect(0.28)
  const [testimonialsSectionRef, hasPlayedTestimonialsAccent] = useRevealOnIntersect(0.25)
  const [whySectionRef, hasPlayedWhyAccent] = useRevealOnIntersect(0.28)
  const [hasPlayedAboutScene, setHasPlayedAboutScene] = useState(false)
  const [hasPlayedAboutStats, setHasPlayedAboutStats] = useState(false)
  const [displayedAboutStats, setDisplayedAboutStats] = useState(() => aboutStats.map(formatAboutStat))
  const [spinningAboutStats, setSpinningAboutStats] = useState(() => aboutStats.map(() => false))

  useEffect(() => {
    const node = aboutSceneRef.current

    if (!node || hasPlayedAboutScene) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasPlayedAboutScene(true)
          observer.disconnect()
        }
      },
      { threshold: 0.28 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [hasPlayedAboutScene])

  useEffect(() => {
    const node = aboutStatsRef.current

    if (!node || hasPlayedAboutStats) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasPlayedAboutStats(true)
          observer.disconnect()
        }
      },
      { threshold: 0.45 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [hasPlayedAboutStats])

  useEffect(() => {
    if (!hasPlayedAboutStats) {
      return undefined
    }

    const cleanups = []

    aboutStats.forEach((stat, index) => {
      const startTimeout = window.setTimeout(() => {
        setSpinningAboutStats((current) => current.map((item, itemIndex) => (itemIndex === index ? true : item)))

        const spinInterval = window.setInterval(() => {
          setDisplayedAboutStats((current) =>
            current.map((item, itemIndex) => (itemIndex === index ? getRandomSlotValue(stat) : item)),
          )
        }, 70)

        const stopTimeout = window.setTimeout(() => {
          window.clearInterval(spinInterval)
          setDisplayedAboutStats((current) =>
            current.map((item, itemIndex) => (itemIndex === index ? formatAboutStat(stat) : item)),
          )
          setSpinningAboutStats((current) => current.map((item, itemIndex) => (itemIndex === index ? false : item)))
        }, 900 + index * 180)

        cleanups.push(() => window.clearTimeout(stopTimeout))
        cleanups.push(() => window.clearInterval(spinInterval))
      }, index * 180)

      cleanups.push(() => window.clearTimeout(startTimeout))
    })

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [hasPlayedAboutStats])

  return (
    <main className="cyber-page">
      <Header />

      <section className="hero">
        <div className="hero-copy">
          <h1>Build Iconic Games</h1>
          <p>Igniting Your Game Vision</p>
          <Button variant="hero">
            Let&apos;s Build Your Game
          </Button>
        </div>

        <div className="hero-art">
          <div className="hero-glow-ring" aria-hidden="true" />

          <figure className="hero-frame hero-frame-sub">
            <img src={heroSubImage} alt="Secondary hero character" />
          </figure>

          <figure className="hero-frame hero-frame-main">
            <img src={heroMainImage} alt="Main hero character" />
          </figure>
        </div>
      </section>

      <section className="ticker-zone" aria-label="Game art keywords">
        <Ribbon items={topRibbonItems} className="ticker-top" highlightText="Art for Games" />
        <Ribbon items={bottomRibbonItems} className="ticker-bottom" highlightText="Game Art" />
      </section>

      <section className="about-section" id="about">
        <div className="about-head" ref={aboutHeadingRef}>
          <h2 className={`about-title ${hasPlayedAboutHeading ? 'is-drawn' : ''}`}>
            <span>Who We Are</span>
          </h2>
          <div className="about-stamp" aria-hidden="true">
            <span className="stamp-center">✌</span>
            <span className="stamp-text">* LET&apos;S TALK * IN TOUCH *</span>
          </div>
        </div>

        <div className="about-layout" ref={aboutSceneRef}>
          <div className={`about-visual ${hasPlayedAboutScene ? 'is-revealed' : ''}`}>
            <svg
              className={`about-orbit ${hasPlayedAboutScene ? 'is-drawn' : ''}`}
              viewBox="0 0 520 360"
              aria-hidden="true"
            >
              <path
                className="about-orbit-glow"
                d="M395 18C404 29 409 44 410 63C411 94 404 124 390 152C369 193 346 222 314 241C278 262 231 268 182 260C133 252 89 236 49 235C25 235 11 245 11 261C11 286 38 304 83 314C142 327 217 329 291 320C344 313 390 296 429 269"
              />
              <path
                className="about-orbit-line"
                d="M395 18C404 29 409 44 410 63C411 94 404 124 390 152C369 193 346 222 314 241C278 262 231 268 182 260C133 252 89 236 49 235C25 235 11 245 11 261C11 286 38 304 83 314C142 327 217 329 291 320C344 313 390 296 429 269"
              />
            </svg>
            <div className="about-signal" aria-hidden="true">
              <span>≈</span>
            </div>
            <img className="about-character" src={aboutImage} alt="About GameGenesis character" />
            <div className={`about-quote ${hasPlayedAboutScene ? 'is-drawn' : ''}`}>Built GameGenesis from the ground up - no shortcuts.</div>
          </div>

          <div className="about-copy">
            <h3>
              <span className="about-heading-line">An Indie Game Studio That Builds</span>
              <span className="about-heading-line">Games the Hard Way</span>
            </h3>
            <p>
              GameGenesis is an indie game development studio led by industry-experienced creators. We build production-ready games with
              smart design, tight budgets, and zero shortcuts.
            </p>
            <ul className="about-points">
              {aboutHighlights.map((item) => (
                <li key={item.text}>
                  <span className="about-point-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="about-stats-wrap" ref={aboutStatsRef}>
              <i className="about-stats-notch" aria-hidden="true" />
              <div className="about-stats">
                {aboutStats.map((item, index) => (
                  <div key={item.label}>
                    <strong className={`about-stat-value ${spinningAboutStats[index] ? 'is-spinning' : 'is-settled'}`}>
                      {displayedAboutStats[index]}
                    </strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className={`about-wire ${hasPlayedAboutStats ? 'is-pulling' : ''}`} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <h2 className="services-title">
          <span>Services</span>
        </h2>

        <div className="service-card service-card-primary">
          <div className="service-copy">
            <p className="service-eyebrow">
              Built to Play
              <span aria-hidden="true" />
            </p>

            <div className="service-icon" aria-hidden="true">
              <img className="service-icon-image" src={serviceIcon1} alt="" />
            </div>

            <h3>GAME DEVELOPMENT</h3>
            <p>
              We build end-to-end games for mobile, PC, and emerging platforms. Focused on performance, scalability, and great player
              experience.
            </p>

            <Button variant="service">
              View More
            </Button>
          </div>

          <div className="service-visual" aria-hidden="true">
            <div className="service-rings" />
            <img className="service-image" src={serviceDevImage} alt="" />
          </div>
        </div>

        <div className="service-card service-card-primary service-card-art">
          <div className="service-copy">
            <p className="service-eyebrow">
              Art That Plays
              <span aria-hidden="true" />
            </p>

            <div className="service-icon service-icon-art" aria-hidden="true">
              <img className="service-icon-image service-icon-image-art" src={serviceIcon2} alt="" />
            </div>

            <h3>GAME ART</h3>
            <p>
              We build end-to-end games for mobile, PC, and emerging platforms. Focused on performance, scalability, and great player
              experience.
            </p>

            <Button variant="service">
              View More
            </Button>
          </div>

          <div className="service-visual service-visual-art" aria-hidden="true">
            <div className="service-rings" />
            <img className="service-image service-image-art" src={serviceArtImage} alt="" />
          </div>
        </div>

        <div className="service-card service-card-primary service-card-animation">
          <div className="service-copy">
            <p className="service-eyebrow">
              Style with Purpose
              <span aria-hidden="true" />
            </p>

            <div className="service-icon service-icon-animation" aria-hidden="true">
              <img className="service-icon-image service-icon-image-animation" src={serviceIcon3} alt="" />
            </div>

            <h3>GAME ANIMATION</h3>
            <p>
              We build end-to-end games for mobile, PC, and emerging platforms. Focused on performance, scalability, and great player
              experience.
            </p>

            <Button variant="service">
              View More
            </Button>
          </div>

          <div className="service-visual service-visual-animation" aria-hidden="true">
            <div className="service-rings" />
            <img className="service-image service-image-animation" src={serviceAnimImage} alt="" />
          </div>
        </div>
      </section>

      <section className="idea-cta" id="idea-cta">
        <div className="guard guard-left" aria-hidden="true">
          <img src={guardLeftImage} alt="" />
        </div>

        <div className="idea-copy">
          <h2>
            <span className="idea-heading-line">Got a Game Idea?</span>
            <span className="idea-heading-line">Let&apos;s Make It Real.</span>
          </h2>
          <Button variant="idea">
            Let&apos;s Talk About Your Game
          </Button>
        </div>

        <div className="guard guard-right" aria-hidden="true">
          <img src={guardRightImage} alt="" />
        </div>
      </section>

      <section className="games-section" id="genres" ref={gamesSectionRef}>
        <div className="games-head">
          <h2>Games We&apos;re Built to Create</h2>
          <div className="games-scribble" aria-hidden="true" />
        </div>
        <p>
          We work across genres from fast-paced action to thoughtful simulations. If it&apos;s playable, scalable, and fun, we&apos;re in.
        </p>

        <div className="games-grid">
          {gameGenres.map((genre, index) => (
            <article
              key={genre.label}
              className={`genre-card ${index === 0 ? 'is-accent' : ''} ${index === 0 && hasPlayedGamesAccent ? 'is-drawn' : ''}`}
            >
              <div className="genre-icon-box">
                {index === 0 ? (
                  <svg className="genre-accent-orbit" viewBox="0 0 180 118" aria-hidden="true">
                    <ellipse className="genre-accent-ring" cx="90" cy="66" rx="66" ry="34" />
                    <path className="genre-accent-swoosh" d="M20 54C58 26 117 24 160 49" />
                  </svg>
                ) : null}
                <img className="genre-icon-image" src={genre.icon} alt="" />
              </div>
              <h3>{genre.label}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section" id="case-studies">
        <div className="case-head">
          <div className="case-title-wrap">
            <h2>Case Studies</h2>
            <div className="case-scribble" aria-hidden="true" />
          </div>
          <Button variant="case">
            View All
          </Button>
        </div>

        <div className="case-list">
          {caseStudies.map((item, index) => (
            <article className="case-item" key={item.id} style={{ '--case-layer': index + 1 }}>
              <div className="case-id">{item.id}</div>
              <div className="case-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.services ? <p className="case-services">Services: {item.services}</p> : null}
                {item.tags ? (
                  <div className="case-tags">
                    {item.tags.map((tag) => (
                      <span key={`${item.id}-${tag}`}>{tag}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-copy">
          <h2>
            <span className="final-heading-line">Got a Game Idea?</span>
            <span className="final-heading-line">Let&apos;s Build Something</span>
            <span className="final-heading-line">Players Remember.</span>
          </h2>
          <p>From prototype to launch, development, art, and animation under one roof.</p>
          <Button variant="final">Talk to Game Experts</Button>
        </div>
        <div className="final-cta-art" aria-hidden="true">
          <div className="mage-glow" />
          <img className="mage-flame mage-flame-gif" src={fireGif} alt="" />
          <img className="final-cta-image" src={finalCtaImage} alt="" />
        </div>
      </section>

      <section className="testimonials-section" ref={testimonialsSectionRef}>
        <div className="testimonials-head">
          <h2>
            <span className={hasPlayedTestimonialsAccent ? 'is-drawn' : ''}>
              <svg className="testimonials-accent-orbit" viewBox="0 0 700 220" aria-hidden="true">
                <path
                  className="testimonials-accent-path"
                  d="M62 109C79 47 143 23 247 26C346 29 461 33 563 39C635 43 675 72 678 112C681 153 643 187 573 193C469 201 347 196 230 192C146 189 89 181 62 150C54 141 50 126 62 109"
                />
              </svg>
              Testimonials
            </span>
          </h2>
        </div>

        <div className="testimonials-stage">
          <div className="testimonials-noise testimonials-noise-left" aria-hidden="true" />
          <div className="testimonials-noise testimonials-noise-right" aria-hidden="true" />

          <Button variant="testimonialNav" className="testimonial-nav-prev" aria-label="Previous testimonial">
            &lt;
          </Button>

          <article className="testimonial-card">
            <figure className="testimonial-avatar-wrap">
              <img className="testimonial-avatar" src={testimonialImage1} alt="Takumi Sato" />
              <i className="testimonial-play" />
            </figure>

            <div className="testimonial-copy">
              <p>
                I&apos;ve worked with other studios before, and most of them didn&apos;t take me seriously because I&apos;m solo. But this team
                actually listened. They didn&apos;t just follow instructions - they gave ideas, fixed small details I missed, and helped shape
                the final game. I got updates every couple of days, and the communication felt easy. I felt like they were just as excited
                about my game as I was.
              </p>
              <h3>Takumi Sato</h3>
              <span>Indie Game Creator @ PixelBushido</span>
            </div>
          </article>

          <Button variant="testimonialNav" className="testimonial-nav-next" aria-label="Next testimonial">
            &gt;
          </Button>
        </div>

        <div className="testimonial-dots" aria-hidden="true">
          <span className="is-active" />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="why-section" ref={whySectionRef}>
        <div className="why-head">
          <h2>Why Choose Us</h2>
          <svg className={`why-scribble ${hasPlayedWhyAccent ? 'is-drawn' : ''}`} viewBox="0 0 360 56" aria-hidden="true">
            <path className="why-scribble-path" d="M8 38C78 44 161 42 248 30C286 25 316 20 352 11" />
          </svg>
        </div>
        <div className="why-grid">
          {whyChooseItems.map((item) => (
            <article key={item} className="why-card">
              <img className="why-card-bg" src={chooseCardImage} alt="" loading="lazy" decoding="async" />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default HomePage
