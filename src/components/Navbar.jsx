import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const LINKS = [
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#visit', label: 'Visit Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>☺</span>
          <span className={styles.logoText}>
            coffee <em>canony</em>
          </span>
        </a>

        <nav className={styles.desktop}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <a href="#visit" className={styles.cta}>
            Get Directions
          </a>
        </nav>

        <button
          type="button"
          className={`${styles.toggle} ${menuOpen ? styles.toggleOpen : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobile}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#visit"
              className={styles.mobileCta}
              onClick={() => setMenuOpen(false)}
            >
              Get Directions
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
