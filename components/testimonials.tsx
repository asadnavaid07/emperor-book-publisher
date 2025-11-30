"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jane D.",
    title: "Thriller Author",
    quote:
      "Amazon Author Partners transformed my rough draft into a book I'm proud of. Their team guided me through every step, and now my book is selling consistently.",
    rating: 5,
    initials: "JD",
  },
  {
    name: "Mark P.",
    title: "Business Author",
    quote:
      "They took care of everything from design to marketing. I focused on the writing while they handled the technical side. Best decision I made for my book.",
    rating: 5,
    initials: "MP",
  },
  {
    name: "Sarah Lee",
    title: "Non-Fiction Writer",
    quote:
      "The editing team was rigorous, the cover design outstanding. Before launch day, I already had 500+ engaged readers thanks to their marketing campaigns.",
    rating: 5,
    initials: "SL",
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-20 lg:py-32 px-6 lg:px-16 bg-light-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark mt-4 text-balance">
            Real Authors, Real Results
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-light rounded-2xl p-8 border border-light-secondary hover:shadow-xl hover:border-primary/20 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 font-serif text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-light font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="bg-gradient-to-r from-dark to-dark-secondary rounded-2xl p-12 text-center">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">150+</p>
              <p className="text-light">Books Published</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">4.9★</p>
              <p className="text-light">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-light">Author Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
