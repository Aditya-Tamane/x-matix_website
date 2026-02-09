'use client';
import React from 'react';
import Button from '../Button/button';
import { ArrowDownTrayIcon, CpuChipIcon, CurrencyRupeeIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
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

      <div className="hero-content">
        <h5 className="section-card-title">
          <CurrencyRupeeIcon width={18.75} height={18.75} /> {topSubtitle ? topSubtitle : 'The Next Generation of Dealer Management'}
        </h5>
        <h1 className="hero-title">
            {renderHighlightedTitle(
                title || 'A composable, agentic business execution platform'
            )}
        </h1>

        <p className="hero-subtitle">
          {subtitle ? subtitle : 'Run sales, service, supply chain, finance, and people on a single no-code foundation — powered by unified data and autonomous intelligence.'}
        </p>
        {/* <div className="hero-buttons">
        {btnOne && <Button title='Request a Demo' type='primary' size='large' onClick={() => window.location.href = 'mailto:xmatix@xmatix.com'}  icon={<ArrowDownTrayIcon width={18} height={18} className="icon-rotate"/>} />}
        {btnTwo && <Button title='See How it Works' type='secondary' size='large'icon={<VideoCameraIcon width={18} height={18}/>}/>}
        </div> */}
        <div className="hero-buttons-container">
            <Button title='Request a Demo' type='primary' size='medium' hasIcon={true} icon={<ArrowDownTrayIcon width={18} height={18}/>} />
            <Button title='See how it works' type='secondary' size='medium' hasIcon={true} icon={<VideoCameraIcon width={18} height={18} className='icon-rotate'/>}/>
        </div>
      </div>
    </section>
  );
}