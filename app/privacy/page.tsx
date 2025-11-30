import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"
import Footer from "@/components/footer"
import PrivacyClientPage from "./PrivacyClientPage"

export const metadata = {
  title: "Privacy Policy | Emperor Book Publisher",
  description: "Our privacy policy and data protection practices for authors and clients.",
}

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <header className="w-full bg-dark border-b border-dark-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-light" />
            </div>
            <span className="text-light font-serif font-bold text-lg">AAP</span>
          </div>
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary-dark transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <PrivacyClientPage />

      <Footer />
    </>
  )
}
