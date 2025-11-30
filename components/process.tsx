"use client"

import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Discovery & Planning",
    description:
      "We begin with a one-on-one consultation to understand your goals, timeline, budget, and vision for your book.",
  },
  {
    number: "2",
    title: "Pre-Production",
    description:
      "Outline development, manuscript assessment, and comprehensive planning for design, marketing, and distribution.",
  },
  {
    number: "3",
    title: "Creation & Execution",
    description:
      "Manuscript development, editing rounds, design concepts, and formatting—completed under your guidance.",
  },
  {
    number: "4",
    title: "Quality Assurance",
    description:
      "Final proofing, technical compliance checks, and preparation for print and digital distribution formats.",
  },
  {
    number: "5",
    title: "Publishing & Launch",
    description: "Upload to retailers, manage metadata, arrange distribution, and execute your book launch strategy.",
  },
  {
    number: "6",
    title: "Marketing & Growth",
    description:
      "Post-launch support with marketing campaigns, reader engagement, and ongoing author brand development.",
  },
]

export default function Process() {
  return (
    <section className="w-full py-20 lg:py-32 px-6 lg:px-16 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-light mt-4 text-balance">
            Simple, Transparent, Effective
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-12 h-1 bg-gradient-to-r from-primary to-transparent"></div>
              )}

              <div className="bg-dark-secondary rounded-2xl p-8 border border-dark hover:border-primary/50 transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                    <span className="text-light font-serif font-bold text-xl">{step.number}</span>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                <h3 className="text-xl font-serif font-bold text-light mb-2">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-neutral-400 mb-6">Ready to start your publishing journey?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-dark font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition">
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
