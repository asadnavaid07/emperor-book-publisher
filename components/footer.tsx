"use client"

import { BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-dark-secondary border-t border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-light" />
              </div>
              <span className="text-light font-serif font-bold text-lg">AAP</span>
            </div>
            <p className="text-black-800 text-sm">Empowering authors to share their stories with the world.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-light font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Ghostwriting", "Editing", "Publishing", "Marketing", "Design"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-black-800 hover:text-primary transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-light font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Blog", "Case Studies", "FAQs", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-black-800 hover:text-primary transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-light font-semibold mb-4">Stay Updated</h4>
            <p className="text-black-800 text-sm mb-3">Get exclusive author tips and publishing insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-dark rounded-l-lg text-light placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary flex-1 text-sm"
              />
              <button className="px-4 py-2 bg-primary text-dark font-semibold rounded-r-lg hover:bg-primary-dark transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black-800 text-sm">© 2025 Amazon Author Partners. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookie Policy"].map((link) => (
              <a key={link} href="/privacy" className="text-black-800 hover:text-primary transition text-sm">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
