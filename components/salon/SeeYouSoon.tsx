import React from 'react'

const ITEMS = ['See You Soon!', 'See You Soon!', 'See You Soon!', 'See You Soon!', 'See You Soon!']

export function SeeYouSoon() {
  return (
    <section className="bg-white py-8 border-t border-brand-rose/20">
      <div className="w-[90%] mx-auto max-w-275 relative">
        <div className="rounded overflow-hidden scrolling-text-container">
          <div
            className="flex whitespace-nowrap text-[4rem] font-semibold py-2 text-brand-rose font-playfair scrolling-text-inner"
            style={
              { '--marquee-speed': '20s', '--direction': 'scroll-left' } as React.CSSProperties
            }
            role="marquee"
          >
            <div className="flex">
              {ITEMS.map((text, i) => (
                <div key={i} className="px-[30px]">
                  <h2>{text}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
