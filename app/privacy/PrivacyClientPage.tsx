"use client"

export default function PrivacyClientPage() {
  return (
    <main className="w-full bg-dark text-light">
      {/* Hero */}
      <section className="w-full py-10 lg:py-10 px-6 lg:px-16 bg-gradient-to-b from-dark-secondary to-dark">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance mb-4">Privacy Policy</h1>
          <p className="text-neutral-400 text-lg">Last updated: December 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-4 lg:py-4 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Introduction</h2>
            <p className="text-black-800 leading-relaxed">
              Emperor Book Publisher ("we," "us," "our," or "Company") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and otherwise process your information in
              connection with our website and publishing services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">Personal Information</h3>
                <p className="text-black-800 leading-relaxed">
                  When you contact us, submit a project inquiry, or engage our services, we collect personal information
                  including your name, email address, phone number, and information about your book project (genre,
                  manuscript details, publishing goals, and budget).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">Usage Information</h3>
                <p className="text-black-800 leading-relaxed">
                  We automatically collect information about your interactions with our website, including IP address,
                  browser type, pages visited, and the time and date of your visit through cookies and similar tracking
                  technologies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">Manuscript & Content Information</h3>
                <p className="text-black-800 leading-relaxed">
                  When using our services, you may provide manuscripts, manuscripts drafts, cover designs, marketing
                  materials, and other creative content. We securely store this information to provide our services and
                  support your book publishing journey.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">How We Use Your Information</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-black-800">
                  Provide, maintain, and improve our publishing and editorial services
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-black-800">Process your inquiries and provide customer support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-black-800">
                  Send promotional emails, updates, and newsletters (with your consent)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-black-800">Analyze website usage and improve user experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-black-800">Comply with legal obligations and enforce our terms</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span className="text-black-800">Prevent fraud and protect the security of our platform</span>
              </li>
            </ul>
          </div>

          {/* Data Protection & Security */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Data Protection & Security</h2>
            <p className="text-black-800 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. Your manuscript and project
              information are treated with strict confidentiality. All data transmissions are encrypted using SSL/TLS
              protocols.
            </p>
            <p className="text-black-800 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is completely secure. While we
              strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>

          {/* Intellectual Property Rights */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Intellectual Property Rights</h2>
            <p className="text-black-800 leading-relaxed">
              You retain full ownership of your manuscript, book content, and creative materials. Our services do not
              grant us any ownership rights to your intellectual property. We use your content solely to provide the
              services you've requested. Upon project completion, all rights to your published work remain with you, and
              you may use our work (cover designs, edited manuscripts, etc.) as permitted under our service agreements.
            </p>
          </div>

          {/* Information Sharing */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Information Sharing</h2>
            <p className="text-black-800 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="text-black-800">
                Service providers who assist us in operating our website and conducting our business (editors,
                designers, marketing partners)
              </li>
              <li className="text-black-800">
                Distribution partners necessary to publish and distribute your book to retailers and libraries
              </li>
              <li className="text-black-800">Legal authorities when required by law or to protect our rights</li>
            </ul>
          </div>

          {/* Your Rights & Choices */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Your Rights & Choices</h2>
            <p className="text-black-800 leading-relaxed mb-4">You have the right to:</p>
            <ul className="space-y-2 ml-4">
              <li className="text-black-800">Access, update, or correct your personal information</li>
              <li className="text-black-800">Opt-out of marketing communications at any time</li>
              <li className="text-black-800">
                Request deletion of your personal information (subject to legal obligations)
              </li>
              <li className="text-black-800">Download your manuscript and project files</li>
              <li className="text-black-800">Request information about how we use your data</li>
            </ul>
          </div>

          {/* Cookies & Tracking */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Cookies & Tracking Technologies</h2>
            <p className="text-black-800 leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, remember preferences, and
              analyze website traffic. You can control cookie settings through your browser. Disabling cookies may
              affect some website functionality.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Third-Party Links</h2>
            <p className="text-black-800 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
              We encourage you to review their privacy policies before providing any information.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Children's Privacy</h2>
            <p className="text-black-800 leading-relaxed">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal
              information from children. If we become aware that we have collected information from a child under 13, we
              will take steps to delete such information promptly.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-black-800 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-dark-secondary rounded-lg p-6 border border-primary/20">
              <p className="text-light font-semibold mb-2">Emperor Book Publisher</p>
              <p className="text-black-800">Email: info@amazonauthorpartners.com</p>
              <p className="text-black-800">Phone: +1 (713) 322-4829</p>
              <p className="text-black-800">Location: St. Petersburg, Florida</p>
            </div>
          </div>

          {/* Policy Changes */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Changes to This Policy</h2>
            <p className="text-black-800 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will notify you of significant changes by email or by posting the updated policy on our
              website with a new "Last Updated" date.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
