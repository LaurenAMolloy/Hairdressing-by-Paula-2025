import Script from 'next/script'

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-center bg-brand-accent text-white">
      <div className="w-[65%] my-[50px]">
        <div className="flex flex-col md:flex-row md:justify-around">
          <div className="mb-8 md:mb-0">
            <h4 className="font-semibold">Opening Hours</h4>
            <p className="m-0 pb-4">Monday-Saturday: 9.30am–5.30pm</p>
            <p className="m-0 pb-4">Sunday: Closed</p>
          </div>
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <p className="m-0 pb-4">07805 287950</p>
            <p className="m-0 pb-4">paulafinchhair@aol.com</p>
            <address className="not-italic pb-8">B5106, Trefriw LL27 0JG</address>
          </div>
        </div>
      </div>

      <div className="text-[0.8rem] pb-4">
        <p className="m-0 pb-4">
          &copy; {new Date().getFullYear()} | Hairdressing by Paula Lorraine
        </p>
        <p className="m-0 pb-4">
          Made with ❤ by{' '}
          <a
            href="https://www.linkedin.com/in/lauren-m-a9b63252/"
            className="text-white hover:underline"
          >
            Lauren M
          </a>
        </p>
        <a
          href="https://www.iubenda.com/privacy-policy/81426361"
          className="iubenda-white iubenda-noiframe iubenda-embed"
          title="Privacy Policy"
        >
          Privacy Policy
        </a>{' '}
        <a
          href="https://www.iubenda.com/privacy-policy/81426361/cookie-policy"
          className="iubenda-white iubenda-noiframe iubenda-embed"
          title="Cookie Policy"
        >
          Cookie Policy
        </a>
      </div>

      <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
    </footer>
  )
}
