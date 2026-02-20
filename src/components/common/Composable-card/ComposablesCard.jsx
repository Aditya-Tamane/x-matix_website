'use client';
import React from 'react';
import Image from 'next/image';
import './ComposablesCard.css'
import Button from '../Button/button';

function ComposablesCard({
  index,
  title,
  subtitle,
  highlight,
  features = [],
  imageSrc,
  imageAlt,
  buttons = null,
  inverse = false,
  hasBackground = true,
}) {
  return (
    <div className={`composables-card ${inverse ? 'flex-reverse' : ''} ${hasBackground ? 'card-background' : ''} `}>
        <div className={`card-content`}>
          {index && (<span className="card-badge">{index}</span>)}
          {title && (<h3 className="card-title">{title}</h3>)}
          {subtitle && (<p className="card-subtitle">{subtitle}</p>)}
          {highlight && (<p className="card-subtitle">{highlight}</p>)}
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
          {buttons &&
            <Button title={buttons.label} hasIcon={true} type='secondary'/>
          }
        </div>

        <div className={`card-image-container`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="card-image"
            loading="lazy"
            width={400}
            height={300}
          />
        </div>
    </div>
  );
}

export default ComposablesCard;