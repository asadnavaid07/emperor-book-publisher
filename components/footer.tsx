"use client"

import { BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-100 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Emperor Book Publisher Logo" className="w-20 h-20 object-contain" />
              {/* <span className="text-black font-sans font-black text-xl tracking-tight">Emperor</span> */}
            </div>
            <p className="text-zinc-600 text-sm">Empowering authors to share their stories with the world.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Ghostwriting", "Editing", "Publishing", "Marketing", "Design"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-600 hover:text-primary transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-black font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Blog", "Case Studies", "FAQs", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-600 hover:text-primary transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-black font-semibold mb-4">Stay Updated</h4>
            <p className="text-zinc-600 text-sm mb-3">Get exclusive author tips and publishing insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white border border-zinc-200 rounded-l-lg text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary flex-1 text-sm transition-all"
              />
              <button className="px-4 py-2 bg-primary text-white font-semibold rounded-r-lg hover:bg-primary-teal-dark transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">© 2025 Emperor Book Publisher. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookie Policy"].map((link) => (
              <a key={link} href="/privacy" className="text-zinc-500 hover:text-primary transition text-sm">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
