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
      {children}
      <Footer />
    </>
  )
}
