'use client'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-50 flex items-center justify-between my-5 mx-5">
      {/* Logo */}
      <h3 className="text-2xl font-semibold">Events</h3>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-5 font-medium">
        <h4 className="text-sm cursor-pointer">Solutions</h4>
        <h4 className="text-sm cursor-pointer">Blogs</h4>
        <h4 className="text-sm cursor-pointer">Case Studies</h4>
        <h4 className="text-sm cursor-pointer">Contact Us</h4>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
          Get Started
        </button>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="md:hidden text-3xl focus:outline-none"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full right-0 mt-4 w-56 rounded-xl bg-white shadow-lg transition-all ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col gap-4 p-5 font-medium">
          <h4 className="text-sm cursor-pointer">Solutions</h4>
          <h4 className="text-sm cursor-pointer">Blogs</h4>
          <h4 className="text-sm cursor-pointer">Case Studies</h4>
          <h4 className="text-sm cursor-pointer">Contact Us</h4>
          <button className="bg-blue-600 text-white py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
