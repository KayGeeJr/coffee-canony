import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>coffee <em>canony</em></span>
          <p>Not just your average coffee.</p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <a href="#about">Our Story</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#visit">Visit</a>
        </nav>
        <p className={styles.copy}>
          © {year} Coffee Canony · Karaglen Mall, Edenvale
        </p>
      </div>
    </footer>
  )
}
