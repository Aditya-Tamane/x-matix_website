'use client';
import React from 'react'
import ComposablesCard from './ui/ComposablesCard'

const img = {
  src: '/images/RequestDemo.png',
  alt: 'Business handshake',
}

function RequestDemo() {
  return (
    <section className="section">
      <ComposablesCard
        layout="left-content"
        title="See how xMatix fits your operations"
        subtitle={
          <div className="cta-pill">
            <input
              type="email"
              placeholder="Enter your email"
              className="cta-pill-input"
            />
            <button
              className="cta-pill-button"
              onClick={() => console.log('Request demo')}
            >
              Request a Demo <span>→</span>
            </button>
          </div>
        }
        imageSrc={img.src}
        imageAlt="Business handshake"
        className="cta-card"
        showBackground={false}
      />
    </section>
  )
}

export default RequestDemo
