import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Visit.module.css'

const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Shop+15+Karaglen+Mall+48+Baker+Rd+Edenvale'

const HOURS = [
  { day: 'Mon', time: '5:30 am – 3:30 pm' },
  { day: 'Tue', time: '5:30 am – 3:30 pm' },
  { day: 'Wed', time: '5:30 am – 3:30 pm' },
  { day: 'Thu', time: '5:30 am – 3:30 pm' },
  { day: 'Fri', time: '5:30 am – 3:30 pm' },
  { day: 'Sat', time: '7:00 am – 3:30 pm' },
  { day: 'Sun', time: '7:00 am – 3:30 pm' },
]

function getOpenStatus() {
  const now = new Date()
  const day = now.getDay()
  const minutes = now.getHours() * 60 + now.getMinutes()
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const schedule = {
    0: { open: 7 * 60, close: 15 * 60, openLabel: '7:00 am Sun' },
    1: { open: 5 * 60 + 30, close: 17 * 60, openLabel: '5:30 am Mon' },
    2: { open: 5 * 60 + 30, close: 17 * 60, openLabel: '5:30 am Tue' },
    3: { open: 5 * 60 + 30, close: 17 * 60, openLabel: '5:30 am Wed' },
    4: { open: 5 * 60 + 30, close: 17 * 60, openLabel: '5:30 am Thu' },
    5: { open: 5 * 60 + 30, close: 17 * 60, openLabel: '5:30 am Fri' },
    6: { open: 6 * 60, close: 16 * 60, openLabel: '6:00 am Sat' },
  }

  const today = schedule[day]
  const isOpen = minutes >= today.open && minutes < today.close

  let nextOpenLabel = today.openLabel
  if (!isOpen && minutes >= today.close) {
    for (let i = 1; i <= 7; i++) {
      const d = (day + i) % 7
      nextOpenLabel = schedule[d].openLabel
      break
    }
  } else if (!isOpen) {
    nextOpenLabel = today.openLabel
  }

  return {
    isOpen,
    label: isOpen ? 'Open now' : 'Closed',
    sub: isOpen ? "We're serving until closing today" : `Opens ${nextOpenLabel}`,
  }
}

export default function Visit() {
  const [ref, visible] = useScrollReveal()
  const status = getOpenStatus()

  return (
    <section id="visit" className={styles.visit} ref={ref}>
      <div className={styles.grid}>
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.eyebrow}>Find us</span>
          <h2 className={styles.title}>Visit Coffee Canony</h2>

          <div className={`${styles.status} ${status.isOpen ? styles.open : styles.closed}`}>
            <span className={styles.statusDot} />
            <motion.div>
              <strong>{status.label}</strong>
              <span>{status.sub}</span>
            </motion.div>
          </div>

          <address className={styles.address}>
            <p>Shop 15, Karaglen Mall</p>
            <p>48 Baker Rd, Edenvale</p>
          </address>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directions}
          >
            Open in Google Maps
            <span aria-hidden>→</span>
          </a>

          <div className={styles.hours}>
            <h3>Opening Hours</h3>
            <ul>
              {HOURS.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className={styles.mapWrap}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <iframe
            title="Coffee Canony location at Karaglen Mall"
            src="https://maps.google.com/maps?q=Karaglen+Mall,+48+Baker+Rd,+Edenvale,+South+Africa&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className={styles.mapOverlay}>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
