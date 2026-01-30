import React from 'react';
import CTA from './common/Button/button';

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
        <span className="badge">The Next Generation of Dealer Management</span>

        <h1
          className="hero-title"
          dangerouslySetInnerHTML={{ __html: "A composable, agentic<br/>business execution platform" }}
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