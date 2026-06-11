import Script from 'next/script'
import { Header } from '@/components/salon/Header'
import { Footer } from '@/components/salon/Footer'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Script
        src="https://kit.fontawesome.com/6d728b4370.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <Script
        src="https://embeds.iubenda.com/widgets/019419f1-756f-4d50-b645-d4e774ff91fb.js"
        strategy="afterInteractive"
      />
    </>
  )
}
