import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { asset } from '../lib/assets'
import styles from './Menu.module.css'

const TABS = [
  { id: 'coffee', label: 'Coffee & Drinks', image: asset('images/coffe_menu.webp'), alt: 'Coffee Canony drinks menu' },
  { id: 'food', label: 'Food & Treats', image: asset('images/food_menu.webp'), alt: 'Coffee Canony food menu' },
]

export default function Menu() {
  const [active, setActive] = useState('coffee')
  const [ref, visible] = useScrollReveal()
  const current = TABS.find((t) => t.id === active)

  return (
    <section id="menu" className={styles.menu} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.eyebrow}>What we serve</span>
        <h2 className={styles.title}>Our Menu</h2>
        <p className={styles.sub}>
          Specialty coffee, milkshakes, carrot cake &amp; more — typically R100–200 per visit.
        </p>
      </motion.div>

      <motion.div
        className={styles.tabs}
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tab} ${active === tab.id ? styles.active : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        className={styles.viewer}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={visible ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.25, duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.menuFrame}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <img src={current.image} alt={current.alt} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.p
        className={styles.note}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        Menus displayed at the shop. Ask our baristas about seasonal specials.
      </motion.p>
    </section>
  )
}
