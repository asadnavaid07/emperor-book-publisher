"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function PopupForm({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call for email submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsOpen(false)
      setTimeout(() => setIsSuccess(false), 300)
    }, 3000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto p-5 sm:p-6 w-[95vw] rounded-xl">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <DialogTitle className="text-2xl font-bold mb-2">Request Sent!</DialogTitle>
            <DialogDescription className="text-base text-zinc-600">
              Thank you for reaching out. Our team will contact you shortly.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-bold font-display text-primary">Let's Discuss Your Book</DialogTitle>
              <DialogDescription className="text-sm">
                Fill out the form below and we'll schedule your free consultation.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-semibold">Full Name</Label>
                <Input id="name" required placeholder="John Doe" className="h-9" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold">Email Address</Label>
                <Input id="email" type="email" required placeholder="john@example.com" className="h-9" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="service" className="text-xs font-semibold">Service of Interest</Label>
                <select id="service" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="ghostwriting">Ghost Writing</option>
                  <option value="publishing">Publishing</option>
                  <option value="editing">Editing</option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-semibold">Additional Message (Optional)</Label>
                <Textarea id="message" placeholder="Tell us about your project..." className="resize-none min-h-[60px]" rows={2} />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-teal-dark text-white font-bold py-5 text-base" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Request"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
