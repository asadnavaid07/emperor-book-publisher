"use client"

import { ChevronRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative w-full py-20 lg:py-32 px-6 lg:px-16 bg-zinc-50 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-teal-light rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-black text-black mb-6 text-balance">
            Ready to Bring Your Book to Life?
          </h2>

          <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto text-balance">
            Schedule a free 30-minute consultation with our team. We'll discuss your vision, timeline, and the best
            services for your unique project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-teal-dark text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition flex items-center justify-center gap-2 group">
              Schedule Free Call
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition">
              Learn About Services
            </button>
          </div>

          {/* Contact Options */}
          <div className="mt-12 pt-12 border-t border-zinc-200">
            <p className="text-zinc-500 mb-6">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center text-black">
              <a
                href="mailto:info@emperorbookpublisher.com"
                className="flex flex-col items-center gap-2 hover:text-primary transition"
              >
                <span className="text-sm text-zinc-400">Email</span>
                <span className="font-semibold">info@emperorbookpublisher.com</span>
              </a>
              <a href="tel:+13057657102" className="flex flex-col items-center gap-2 hover:text-primary transition">
                <span className="text-sm text-zinc-400">Phone</span>
                <span className="font-semibold">+1 305-765-7102</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
