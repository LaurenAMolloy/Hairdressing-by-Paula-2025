'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-rose/20">
      <div className="w-[90%] max-w-275 mx-auto flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="shrink-0 w-36 md:w-44">
          <Image
            src="/img/logo/paula-lorraine-pink.png"
            alt="Paula Lorraine Hairdressing"
            width={2000}
            height={1090}
            className="w-full h-auto"
            priority
          />
        </Link>

        {/* Desktop nav — centred */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm tracking-widest uppercase text-brand-dark/70 hover:text-brand-dark transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Book Now CTA — desktop */}
        <Link
          href="tel:+447805287950"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-brand-dark text-white text-sm tracking-wide hover:bg-brand-rose hover:text-brand-dark transition-colors"
        >
          Book Now
        </Link>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-brand-rose/40 text-brand-dark hover:bg-brand-rose/10 transition-colors cursor-pointer"
            aria-label="open navigation"
          >
            <Menu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-brand-cream">
            <nav className="mt-10">
              <ul className="list-none p-0 m-0 space-y-5">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-lg tracking-widest uppercase text-brand-dark/70 hover:text-brand-dark transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Link
                    href="tel:+447805287950"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-brand-dark text-white text-sm tracking-wide"
                  >
                    Book Now
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}
