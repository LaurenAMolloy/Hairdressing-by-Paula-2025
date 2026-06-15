import React from 'react'

const ITEMS = ['See You Soon!', 'See You Soon!', 'See You Soon!', 'See You Soon!', 'See You Soon!']

export function SeeYouSoon() {
  return (
    <section className="see-you-soon">
      <div className="content-wrapper">
        <div className="scrolling-text-container">
          <div
            className="scrolling-text-inner"
            style={
              { '--marquee-speed': '20s', '--direction': 'scroll-left' } as React.CSSProperties
            }
            role="marquee"
          >
            <div className="scrolling-text">
              {ITEMS.map((text, i) => (
                <div key={i} className="scrolling-text-item">
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
