"use client"

import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-primary-teal-light rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-3 border-b border-zinc-100">
        <div className="flex items-center">
          <img src="/logo.png" alt="Emperor Book Publisher Logo" className="h-20 w-auto object-contain" />
        </div>
        <span className="text-black font-sans font-black text-2xl tracking-tight hidden sm:block">
          Emperor Book Publisher
        </span>
        <button className="px-6 py-2.5 bg-gradient-to-r from-[#0F5052] to-[#0a3a3c] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#0F5052]/20 transition tracking-wide text-sm">
          Start Today
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-20 max-w-7xl mx-auto">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary-teal bg-opacity-10 text-white rounded-full text-sm font-semibold border border-primary-teal border-opacity-30">
              ✨ Empowering Authors Worldwide
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-display font-black text-black mb-6 leading-tight text-balance tracking-tight">
            Your Story. Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F5052] to-[#1a7a7d]">
              Expertise
            </span>
            . The World Reading You.
          </h1>

          <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-xl text-balance font-medium">
            From concept to bestseller—we help authors craft, polish, and publish their work with confidence and
            creativity. End-to-end publishing solutions tailored to your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#0F5052] to-[#0a3a3c] text-white font-black rounded-full hover:shadow-lg hover:shadow-[#0F5052]/30 transition flex items-center justify-center gap-2 group text-lg tracking-wide">
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[#0F5052] text-[#0F5052] font-black rounded-full hover:bg-[#0F5052] hover:text-white transition text-lg tracking-wide">
              Free Consultation
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-zinc-100">
            <div>
              <p className="text-3xl font-black text-[#0F5052]">150+</p>
              <p className="text-zinc-500 text-sm font-medium">Books Published</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#0F5052]">300+</p>
              <p className="text-zinc-500 text-sm font-medium">Authors Served</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#0F5052]">100K+</p>
              <p className="text-zinc-500 text-sm font-medium">Readers Reached</p>
            </div>
          </div>
        </div>

        {/* Hero Image Mock */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-[#0F5052] via-[#0a3a3c] to-[#082a2b] rounded-2xl p-1 shadow-2xl hover:shadow-[0_0_30px_rgba(15,80,82,0.2)] transition-shadow duration-300">
            <div className="w-full h-full bg-white rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/cover10.jpg"
                alt="Author creating legacy with professional publishing"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex flex-col items-center justify-end p-8">
                <p className="text-white font-sans text-3xl font-black mb-2 tracking-tight">Your Masterpiece</p>
                <p className="text-[#0F5052] font-sans text-lg font-bold">Starts Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
