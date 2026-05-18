import { motion } from 'framer-motion'
import styles from './TrustBar.module.css'

const STATS = [
  { value: '5.0', label: 'Google Rating', sub: '38 reviews' },
  { value: 'R100–200', label: 'Price Range', sub: 'per person' },
  { value: 'Coffee Shop', label: 'Karaglen Mall', sub: 'Shop 15' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function TrustBar() {
  return (
    <section className={styles.bar}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
      >
        {STATS.map((stat) => (
          <motion.div key={stat.label} className={styles.stat} variants={item}>
            <div className={styles.valueRow}>
              {stat.value === '5.0' && <span className={styles.stars}>★★★★★</span>}
              <span className={styles.value}>{stat.value}</span>
            </div>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.sub}>{stat.sub}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.blockquote
        className={styles.quote}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <p>&ldquo;Amazing coffee, warm and welcoming atmosphere.&rdquo;</p>
      </motion.blockquote>
    </section>
  )
}
