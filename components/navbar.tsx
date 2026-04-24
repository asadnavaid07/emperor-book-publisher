"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import PopupForm from "@/components/popup-form"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Process", href: "#process" },
        { name: "Testimonials", href: "#testimonials" },
    ]

    const servicesList = [
        { name: "Ghost Writing", href: "/services#ghostwriting" },
        { name: "Publishing", href: "/services#publishing" },
        { name: "Editing", href: "/services#editing" },
        { name: "Marketing", href: "/services#marketing" },
        { name: "Other Services", href: "/services#other" },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 flex items-center justify-between px-6 lg:px-16 py-3 transition-all duration-300">
            <div className="flex items-center gap-2">
                <Link href="/">
                    <Image src="/logo.png" alt="Emperor Book Publisher Logo" width={160} height={48} className="h-12 w-auto object-contain" />
                </Link>
                <span className="text-black font-sans font-black text-xl tracking-tight hidden sm:block">
                    Emperor Book Publisher
                </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-semibold text-zinc-600 hover:text-primary transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}

                <DropdownMenu>
                    <DropdownMenuTrigger className="text-sm font-semibold text-zinc-600 hover:text-black hover:bg-white px-3 py-2 rounded-md transition-colors flex items-center gap-1 focus:outline-none">
                        Services
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 bg-white border border-zinc-100 shadow-lg rounded-xl">
                        {servicesList.map((service) => (
                            <DropdownMenuItem key={service.name} asChild className="cursor-pointer hover:bg-black hover:text-white focus:bg-black focus:text-white transition-colors">
                                <Link href={service.href} className="w-full">
                                    {service.name}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <PopupForm>
                    <Button className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-teal-dark text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95 tracking-wide text-sm h-10">
                        Start Today
                    </Button>
                </PopupForm>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-primary">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <div className="flex flex-col gap-6 mt-8">
                            <div className="flex items-center gap-2 mb-4">
                                <Image src="/logo.png" alt="Logo" width={120} height={40} className="h-10 w-auto object-contain" />
                                <span className="font-black text-lg">Emperor Book</span>
                            </div>

                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-semibold text-zinc-800 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="space-y-3 mt-2">
                                    <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Services</h4>
                                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-zinc-100">
                                        {servicesList.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-base font-medium text-zinc-600 hover:bg-black hover:text-white focus:bg-black focus:text-white px-2 py-1 rounded-md transition-colors inline-block w-fit"
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pb-8">
                                <PopupForm>
                                    <Button className="w-full py-6 text-lg bg-gradient-to-r from-primary to-primary-teal-dark text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all" onClick={() => setIsOpen(false)}>
                                        Start Today
                                    </Button>
                                </PopupForm>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
