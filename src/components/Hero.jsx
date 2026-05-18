import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { asset } from '../lib/assets'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div className={styles.bg} style={{ y: imageY }}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={asset('images/banner2.jpg')} />
          <img src={asset('images/banner.jpg')} alt="Coffee Canony storefront at Karaglen Mall" />
        </picture>
        <div className={styles.overlay} />
      </motion.div>

      <motion.div className={styles.content} style={{ opacity }}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Not just your average coffee
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          coffee <span>canony</span>
        </motion.h1>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          The best coffee in the East
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#menu" className={styles.primary}>
            View Menu
          </a>
          <a href="#visit" className={styles.secondary}>
            Visit Us
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span>Scroll</span>
        <motion.div
          className={styles.scrollLine}
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
