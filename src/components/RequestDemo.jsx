'use client';
import React from 'react'
import ComposablesCard from './ui/ComposablesCard'
import Button from './common/Button/button';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const img = {
  src: '/images/RequestDemo.png',
  alt: 'Business handshake',
}

function RequestDemo({data={}}) {
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
            {/* <button
              className="cta-pill-button"
              onClick={() => console.log('Request demo')}
            >
              Request a Demo <span>→</span>
            </button> */}
            <Button title='Request a Demo' hasIcon={true} icon={<ArrowTopRightOnSquareIcon width={20} height={20}/>}/>
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
