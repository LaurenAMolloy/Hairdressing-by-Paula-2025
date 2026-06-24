import React from 'react'

const ITEMS = ['See You Soon!', 'See You Soon!', 'See You Soon!', 'See You Soon!', 'See You Soon!']

export function SeeYouSoon() {
  return (
    <section className="bg-brand-cream py-12 border-t border-brand-rose/20">
      <div className="rounded overflow-hidden scrolling-text-container" aria-hidden="true">
        <div
          className="flex whitespace-nowrap text-[4rem] font-semibold py-2 text-brand-rose font-playfair scrolling-text-inner"
          style={
            { '--marquee-speed': '20s', '--direction': 'scroll-left' } as React.CSSProperties
          }
        >
          {/* Two identical strips for seamless looping — animation moves -50% (= one strip width) */}
          <div className="flex">
            {ITEMS.map((text, i) => (
              <div key={`a-${i}`} className="px-7.5">
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className="flex">
            {ITEMS.map((text, i) => (
              <div key={`b-${i}`} className="px-7.5">
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
