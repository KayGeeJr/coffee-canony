import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { asset } from '../lib/assets'
import styles from './Gallery.module.css'

const IMAGES = [
  { src: asset('images/img.jpg'), alt: 'Interior seating area' },
  { src: asset('images/download.jpeg'), alt: 'Coffee preparation' },
  { src: asset('images/2025-04-21.webp'), alt: 'Latte art' },
  { src: asset('images/2025-04-21 (1).jpg'), alt: 'Coffee Canony atmosphere' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Gallery() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="gallery" className={styles.gallery} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.eyebrow}>Inside the shop</span>
        <h2 className={styles.title}>Gallery</h2>
      </motion.div>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        animate={visible ? 'show' : 'hidden'}
      >
        {IMAGES.map((img, i) => (
          <motion.figure
            key={img.src}
            className={`${styles.item} ${i === 0 ? styles.featured : ''}`}
            variants={item}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </motion.figure>
        ))}
      </motion.div>
    </section>
  )
}
