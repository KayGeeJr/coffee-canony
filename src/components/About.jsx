import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

export default function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.grid}>
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: -40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageMain}>
            <img src="/images/2025-04-21 (1).webp" alt="Coffee and pastries at Coffee Canony" />
          </div>
          <motion.div
            className={styles.imageAccent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img src="/images/unnamed.webp" alt="Freshly brewed espresso" />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, x: 40 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.eyebrow}>Welcome to</span>
          <h2 className={styles.title}>
            A warm corner in <em>Karaglen Mall</em>
          </h2>
          <p className={styles.lead}>
            Step into Coffee Canony and discover artisan coffee, handcrafted milkshakes,
            and homestyle treats — all served with a smile in our light-filled, wood-toned space.
          </p>
          <p className={styles.body}>
            From our signature espresso to carrot cake and milkshakes, every visit feels
            like catching up with friends. We open early for your morning ritual and
            stay ready to fuel your day.
          </p>
          <ul className={styles.highlights}>
            <li>Specialty espresso &amp; filter coffee</li>
            <li>Fresh milkshakes &amp; baked goods</li>
            <li>Comfortable seating · Free mall parking</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
