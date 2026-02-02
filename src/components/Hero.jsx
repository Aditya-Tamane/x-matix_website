import React from 'react';
import CTA from './common/Button/button';
import { CpuChipIcon } from '@heroicons/react/24/outline';

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
            <CpuChipIcon width={18.75} height={18.75} /> The Next Generation of Dealer Management
          </h5>

        <h1
          className="hero-title"
          dangerouslySetInnerHTML={{ __html: "A composable, agentic business execution platform" }}
        />

        <p className="hero-subtitle">
          Run sales, service, supply chain, finance, and people on a single no-code foundation
          — powered by unified data and autonomous intelligence.
        </p>

        <CTA title='Request a Demo' type='primary' size='large'/>
      </div>
    </section>
  );
}