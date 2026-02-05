'use client';
import React from 'react';
import Button from '../Button/button';
import { CpuChipIcon } from '@heroicons/react/24/outline';
import './HeroSection.css';

export default function HeroSection({
// videoEnabled = true,
topSubtitle = '',
title = '',
subtitle = '',
btnOne = true,
btnTwo = true
}) {
    const renderHighlightedTitle = (text) =>
  text
    ? text.split('{{highlight}}').map((part, i) => {
        if (i === 0) return part;
        const [highlighted, ...rest] = part.split('{{/highlight}}');
        return (
          <React.Fragment key={i}>
            <span className="highlight">{highlighted}</span>
            {rest.join('{{/highlight}}')}
          </React.Fragment>
        );
      })
    : null;

  return (
    <section className="hero-section">
      {/* {videoEnabled && (
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
      )} */}

      <div className="hero-content">
        <h5 className="section-card-title">
          <CpuChipIcon width={18.75} height={18.75} /> {topSubtitle ? topSubtitle : 'The Next Generation of Dealer Management'}
        </h5>
        <h1 className="hero-title">
            {renderHighlightedTitle(
                title || 'A composable, agentic business execution platform'
            )}
        </h1>

        <p className="hero-subtitle">
          {subtitle ? subtitle : 'Run sales, service, supply chain, finance, and people on a single no-code foundation — powered by unified data and autonomous intelligence.'}
        </p>
        <div className="hero-buttons">
        {btnOne && <Button title='Request a Demo' type='primary' size='large' onClick={() => window.location.href = 'mailto:xmatix@xmatix.com'}/>}
        {btnTwo && <Button title='See How it Works' type='secondary' size='large'/>}
        </div>
      </div>
    </section>
  );
}