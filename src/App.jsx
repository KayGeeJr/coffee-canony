import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Visit from './components/Visit'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
