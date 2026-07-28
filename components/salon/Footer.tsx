import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70">
      <div className="w-[90%] max-w-275 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block w-40 mb-4 brightness-0 invert opacity-80">
              <Image
                src="/img/logo/paula-lorraine-pink.png"
                alt="Paula Lorraine Hairdressing"
                width={800}
                height={436}
                sizes="160px"
                className="w-full h-auto"
              />
            </Link>
            <p className="font-dancing text-2xl text-brand-rose mb-2">Love is in the hair</p>
            <p className="text-sm text-white/50 leading-relaxed">
              A modern hair studio where craft meets personality.<br />
              Feel special, feel new — be you.
            </p>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-brand-rose mb-5 font-sans">Visit</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/80" />
                <address className="not-italic">B5106, Trefriw LL27 0JG</address>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-white/80" />
                <a href="tel:+447805287950" className="text-white/70 hover:text-white transition-colors">
                  07805 287950
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-white/80" />
                <a href="mailto:paulafinchhair@aol.com" className="text-white/70 hover:text-white transition-colors">
                  paulafinchhair@aol.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-brand-rose mb-5 font-sans">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-8">
                <span>Monday – Saturday</span>
                <span className="text-white/50">9:30am – 5:30pm</span>
              </li>
              <li className="flex justify-between gap-8">
                <span>Sunday</span>
                <span className="text-white/50">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} Hairdressing by Paula Lorraine</p>
          <p>
            Made with ❤ by{' '}
            <a
              href="https://www.linkedin.com/in/lauren-m-a9b63252/"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              Lauren M
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.iubenda.com/privacy-policy/43216588"
              className="iubenda-white iubenda-noiframe iubenda-embed hover:text-white/50 transition-colors"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/43216588/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed hover:text-white/50 transition-colors"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
