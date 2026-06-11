'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex justify-center bg-white">
      <div className="relative w-[90%] max-w-275 text-center md:flex md:justify-between md:items-center">
        <Sheet>
          <SheetTrigger
            className="absolute left-0 top-7.5 w-16 h-16 rounded-full bg-brand-primary text-white hover:opacity-75 cursor-pointer border-0 md:hidden"
            aria-label="open navigation"
          >
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="mt-6">
              <ul className="list-none p-0 m-0 space-y-3">
                <li>
                  <Link href="/contact" className="text-brand-accent uppercase hover:opacity-75">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-brand-accent uppercase hover:opacity-75">
                    Gallery
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="inline-block w-[60%] md:w-[40%]">
          <Image
            src="/img/logo/paula-lorraine-pink.png"
            alt="pink paula lorraine logo"
            width={2000}
            height={1090}
            className="w-full h-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center">
          <ul className="flex list-none m-0 p-0">
            <li className="ml-6">
              <Link href="/contact" className="text-brand-accent uppercase hover:opacity-75">
                Contact
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/gallery" className="text-brand-accent uppercase hover:opacity-75">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
