import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import Footer from "@/components/footer"
import CTA from "@/components/cta"

// In a real application, you might want a specialized hero or different content,
// but for now, we'll reuse the existing sections to showcase all services.
export default function ServicesPage() {
    return (
        <main className="w-full pt-20">
            <div className="bg-zinc-50 py-20 px-6 lg:px-16 text-center border-b border-zinc-100">
                <h1 className="text-5xl lg:text-6xl font-display font-black text-black mb-6 tracking-tight">
                    Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-teal-light">Services</span>
                </h1>
                <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-medium">
                    Comprehensive publishing solutions tailored to your unique journey and goals.
                </p>
            </div>
            <Services />
            <Process />
            <CTA />
            <Footer />
        </main>
    )
}
