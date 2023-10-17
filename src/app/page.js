//Component
import Header from "./components/Header"
import Aboute from "./components/Aboute"
import BackToTopBtn from "./components/BackToTopBtn"
import Cta from "./components/Cta"
import Cars from "./components/Cars"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"
import Why from "./components/Why"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className='max-w-[1920px] bg-white mx-auto relative overflow-hidden '>
      <Header />
      <Hero />
      <Cars />
      <Aboute />
      <Why />
      <Testimonial />
      <BackToTopBtn />
      <Cta />
      <Footer />
    </main>
  )
}
