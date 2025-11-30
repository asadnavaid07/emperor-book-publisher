import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
