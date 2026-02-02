'use client';
import React from 'react';
import CTA from '../common/Button/button';

function ComposablesCard({
  layout = 'left-content', 
  badge,
  title,
  textContent,
  subtitle,
  highlight,
  features = [],
  imageSrc,
  imageAlt,
  cta,
  className = '',
  imageClassName = '',
  contentClassName = '',
  reverseMobile = true,
  onClick = () => {},
  showBackground = true
}) {
  const isLeftContent = layout === 'left-content';

  return (
    <div className={showBackground ? `composables-card ${className}` : null}>
      

      <div className="card-grid">
        <div
          className={`card-content 
            ${reverseMobile ? 'mobile-order-2' : ''} 
            ${isLeftContent ? 'desktop-order-1' : 'desktop-order-2'}
            ${contentClassName}`}
        >
          {badge && (
            <span className="card-badge">{badge}</span>
          )}
          {title && (
            <h3 className="card-title">{title}</h3>
          )}

          {textContent && (
            <p className="card-subtitle">{textContent}</p>
          )}

          {subtitle && (
            <p className="card-subtitle">{subtitle}</p>
          )}

          {highlight && (
            <p className="card-highlight">{highlight}</p>
          )}

          {features.length > 0 && (
            <ul className="features-list">
              {features.map((item, idx) => (
                <li key={idx} className="feature-item">
                  <span className="bullet">•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {cta && (
            <div className="cta-wrapper">
              {cta.href ? (
                <a
                  href={cta.href}
                  className="cta-link"
                >
                  {cta.label}
                  <span className="arrow">→</span>
                </a>
              ) : (
                // <button
                //   onClick={cta.onClick || onClick}
                //   className="cta-button"
                // >
                //   {cta.label}
                //   <span className="arrow">→</span>
                // </button>
                <CTA title={cta.label} hasIcon={true} type='secondary'/>
              )}
            </div>
          )}
        </div>

        <div
          className={`card-image-container 
            ${reverseMobile ? 'mobile-order-1' : ''} 
            ${isLeftContent ? 'desktop-order-2' : 'desktop-order-1'}
            ${imageClassName}`}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="card-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default ComposablesCard;