"use client"

import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-dark-secondary via-dark to-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-accent rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-6 border-b border-dark-secondary">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#eaa012] to-[#d4860a] rounded-lg flex items-center justify-center">
            <span className="text-black font-sans font-black text-xl">A</span>
          </div>
          <span className="text-light font-sans font-black text-2xl tracking-tight">Amazon Author Partners</span>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-[#eaa012] to-[#d4860a] text-black font-black rounded-full hover:shadow-lg hover:shadow-[#eaa012]/50 transition tracking-wide">
          Start Today
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-20 max-w-7xl mx-auto">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary-dark bg-opacity-20 text-primary rounded-full text-sm font-semibold border border-primary border-opacity-30">
              ✨ Empowering Authors Worldwide
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-sans font-black text-light mb-6 leading-tight text-balance tracking-tight">
            Your Story. Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eaa012] to-[#f4c661]">
              Expertise
            </span>
            . The World Reading You.
          </h1>

          <p className="text-lg text-black-800 mb-8 leading-relaxed max-w-xl text-balance font-medium">
            From concept to bestseller—we help authors craft, polish, and publish their work with confidence and
            creativity. End-to-end publishing solutions tailored to your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#eaa012] to-[#d4860a] text-black font-black rounded-full hover:shadow-lg hover:shadow-[#eaa012]/50 transition flex items-center justify-center gap-2 group text-lg tracking-wide">
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[#eaa012] text-[#eaa012] font-black rounded-full hover:bg-[#eaa012] hover:text-black transition text-lg tracking-wide">
              Free Consultation
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-dark-secondary">
            <div>
              <p className="text-3xl font-black text-[#eaa012]">150+</p>
              <p className="text-black-800 text-sm font-medium">Books Published</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#eaa012]">300+</p>
              <p className="text-black-800 text-sm font-medium">Authors Served</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#eaa012]">100K+</p>
              <p className="text-black-800 text-sm font-medium">Readers Reached</p>
            </div>
          </div>
        </div>

        {/* Hero Image Mock */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-[#eaa012] via-[#d4860a] to-[#b8700a] rounded-2xl p-1 shadow-2xl hover:shadow-[0_0_30px_rgba(234,160,18,0.4)] transition-shadow duration-300">
            <div className="w-full h-full bg-black rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/cover10.jpg"
                alt="Author creating legacy with professional publishing"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex flex-col items-center justify-end p-8">
                <p className="text-white font-sans text-3xl font-black mb-2 tracking-tight">Your Masterpiece</p>
                <p className="text-[#eaa012] font-sans text-lg font-bold">Starts Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
