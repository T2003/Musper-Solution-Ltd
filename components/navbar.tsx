"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Instagram, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Logo.jpg" alt="Musper Solutions Logo" width={40} height={40} className="rounded-md" />
            <span className="text-xl font-bold text-[#134B42]">Musper Solutions</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#134B42] font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#134B42] font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#134B42] font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#134B42] font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="https://www.instagram.com/muspersolutions" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-[#134B42]" />
            </Link>
            <Link href="https://twitter.com/muspersolutions" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-600 hover:text-[#134B42]" />
            </Link>
            <Link href="https://www.linkedin.com/company/musper-solutions" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-[#134B42]" />
            </Link>
            <Link href="/contact" className="bg-[#134B42] hover:bg-[#134B42]/90 text-white px-4 py-2 rounded-md">
              Get Started
            </Link>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#134B42] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#134B42] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-[#134B42] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#134B42] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex gap-4 mt-4">
                <Link href="https://www.instagram.com/muspersolutions" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-[#134B42]" />
                </Link>
                <Link href="https://twitter.com/muspersolutions" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-[#134B42]" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/musper-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-[#134B42]" />
                </Link>
              </div>
              <Link
                href="/contact"
                className="bg-[#134B42] hover:bg-[#134B42]/90 text-white px-4 py-2 rounded-md inline-block mt-2 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

