import React from 'react';
import Button from './common/Button/button';
import { ArrowDownTrayIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h5 className="section-card-title">
          <CpuChipIcon width={24} height={24} /> The Next Generation of Dealer Management
        </h5>
        <h1 className="hero-title">
              A composable, agentic 
              <p className="highlight">business execution platform</p>
        </h1>
        <p className="hero-subtitle">
          Run sales, service, supply chain, finance, and people on a single no-code foundation — powered by unified data and autonomous intelligence.
        </p>
        <Button title='Request a Demo' type='primary' size='medium' hasIcon={true} icon={<ArrowDownTrayIcon width={18} height={18}/>}/>
      </div>
    </section>
  );
}