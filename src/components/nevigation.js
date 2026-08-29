'use client'

import LoginModal from '@/components/LoginModal'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // ตรวจจับการเลื่อน Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'บ้าน', href: '/' },
    { name: 'เกี่ยวกับ', href: '/about' },
    { name: 'บริการ', href: '/service' },
    { name: 'ติดต่อ', href: '/contact' },
    { name: 'สมัคร', href: '/register' }
  ]

  return (
    <nav className={`sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-md">
              M
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">My Website</h1>
              <p className="text-xs text-gray-500">Next.js + Tailwind</p>
            </div>
          </Link>

          {/* Desktop Menu & Login Button */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 transition-all duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}

            {/* Login Button */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-md'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm'
              }`}
            >
              เข้าสู่ระบบ
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
            <button 
                onClick={() => { setIsLoginModalOpen(true); setIsOpen(false); }}
                className="text-left rounded-lg px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
                เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </nav>
  )
}