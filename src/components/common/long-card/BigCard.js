'use client';
import React from 'react';
import './BigCard.css';
import { ArrowTopRightOnSquareIcon, ArrowTrendingUpIcon, BoltIcon, ChartBarIcon, CloudIcon, ComputerDesktopIcon, CpuChipIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';

const BigCard = ({ 
  imageUrl, 
  imageAlt = "Feature image",
  imagePosition = 'right',
  contentType = 'cards',
  title,
  subtitle,
  topSubtitle,
  description,
  stats = [],
  features = [],
  steps = [],
  ctaText,
  ctaLink,
  theme = 'dark',
  accentColor = '#00d9ff'
}) => {

const featureIcons = [
  ChartBarIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowTrendingUpIcon,
];

  const renderTitle = () =>
    title
      ? title.split('{{highlight}}').map((part, i) => {
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

  const renderContent = () => {
    if (contentType === 'cards') {
      return (
        <div className="contentWrapper">
            {topSubtitle && <h5 className="BigCard-heading-title">
          <ComputerDesktopIcon width={18.75} height={18.75} /> {topSubtitle}
        </h5>}
          {title && <h2 className="card-title">{renderTitle()}</h2>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
          {description && <p className="card-description">{description}</p>}

          {stats.length > 0 && (
            <div className="statsGrid">
              {stats.map((stat, index) => (
                <div key={index} className="statCard">
                  <div className="statValue">{stat.value}</div>
                  <div className="statLabel">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {features.length > 0 && (
            <div className="featuresGrid">
                {features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                    <div key={index} className="featureCard">
                    <div className="featureIcon">
                        <Icon />
                    </div>

                    <div className="featureContent">
                        <h3 className="featureTitle">{feature.title}</h3>
                        <p className="featureDescription">
                        {feature.description}
                        </p>
                    </div>
                    </div>
                );
                })}
            </div>
            )}


          {ctaText && (
            <button
              className="big-card-ctaButton"
              onClick={() => {
                if (ctaLink) window.location.href = ctaLink;
              }}
            >
              {ctaText}
              <ArrowTopRightOnSquareIcon width={16} height={16}/>
            </button>
          )}
        </div>
      );
    }

    if (contentType === 'steps') {
      return (
        <div className="contentWrapper">
          {subtitle && <h5 className="BigCard-heading-title">
          <ComputerDesktopIcon width={18.75} height={18.75} /> {subtitle}
        </h5>}
          {title && <h2 className="title">{renderTitle()}</h2>}

          {steps.length > 0 && (
            <div className="stepsList">
              {steps.map((step, index) => (
                <div key={index} className="stepItem">
                  <div className="stepNumber">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="stepContent">
                    <h3 className="stepTitle">{step.title}</h3>
                    <p className="stepDescription">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {description && (
            <p className="bottomDescription">{description}</p>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={`${"bigCard"} ${[theme]}`}
      style={{ '--accent-color': accentColor }}
    >
      <div
        className={`${"container"} ${
          imagePosition === 'left' ? "imageLeft" : "imageRight"
        }`}
      >
        <div className="imageSection">
          <div className="imageWrapper">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={imageAlt}
                className={"image"}
              />
            )}
          </div>
        </div>

        <div className="contentSection">{renderContent()}</div>
      </div>
    </div>
  );
};

export default BigCard;
