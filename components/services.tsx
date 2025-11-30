"use client"

import { BookOpen, PenTool, Globe, Sparkles, Megaphone, Headphones } from "lucide-react"

const services = [
  {
    icon: PenTool,
    title: "Ghostwriting",
    description: "Expert writers craft your manuscript while capturing your unique voice and vision.",
    color: "from-primary to-primary-light",
  },
  {
    icon: BookOpen,
    title: "Editing & Proofreading",
    description:
      "Professional editing at multiple levels—developmental, line, and proofreading to publish-house standards.",
    color: "from-primary-dark to-primary",
  },
  {
    icon: Globe,
    title: "Publishing & Distribution",
    description: "We handle formatting, ISBN assignment, and global distribution to major retailers worldwide.",
    color: "from-primary-dark to-primary",
  },
  {
    icon: Sparkles,
    title: "Cover & Interior Design",
    description: "Create unforgettable book covers and interior layouts that engage readers from first sight.",
    color: "from-primary-dark to-primary",
  },
  {
    icon: Megaphone,
    title: "Promotion & Marketing",
    description: "Data-driven marketing campaigns to help your book reach the right audience and drive sales.",
    color: "from-primary-dark to-primary",
  },
  {
    icon: Headphones,
    title: "E-Book & Audiobook",
    description: "Multi-format production to maximize reach across e-readers, audio platforms, and devices.",
    color: "from-primary-dark to-primary",
  },
]

export default function Services() {
  return (
    <section className="w-full py-20 lg:py-32 px-6 lg:px-16 bg-light-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark mt-4 mb-6 text-balance">
            Complete Publishing Solutions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-balance">
            From initial concept to global distribution, we provide a suite of tailored services to take your book from
            idea to bestseller.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group bg-light rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-light-secondary hover:border-primary/20"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-8 h-8 text-light" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-primary font-semibold hover:text-primary-dark flex items-center gap-2 group/link"
                >
                  Learn More
                  <span className="group-hover/link:translate-x-1 transition">→</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
