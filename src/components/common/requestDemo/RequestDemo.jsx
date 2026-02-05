'use client';
import React from 'react';
import Button from '../Button/button';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import './RequestDemo.css';

const img = {
  src: '/images/RequestDemo.png',
  alt: 'Business handshake',
}

function RequestDemo({data={}}) {
  return (
    <section>
      <div className="request-demo-wrapper">
        <div className="request-demo-left">
          <h3 className="request-demo-title">{data?.heading || "See how xMatix fits your operations"}</h3>
          {data.subHeading && <p className="request-demo-description"><b>{data?.subHeading}</b></p>}
          {data.description && <p className="request-demo-description">{data?.description}</p>}
          <div className="cta-pill">
            <input
              type="email"
              placeholder="Enter your email"
              className="cta-pill-input"
            />
            <Button title='Request a Demo' type='primary' size='medium' hasIcon={true} icon={<ArrowDownTrayIcon width={20} height={20} className="icon-rotate"/>}/>
          </div>
        </div>
        <div className="request-demo-right">
          <Image
            src={data?.imageSrc || img.src}
            alt={data?.imageAlt  || img.alt}
            width={600}
            height={400}
            style={{width: '100%', height: 'auto'}}
          />
        </div>
      </div>
    </section>
  )
}

export default RequestDemo
