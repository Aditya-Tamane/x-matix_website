import React from 'react';
import './ecosystem.css';
import Link from 'next/link';
import { LightBulbIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Ecosystem = ({
  data,
  sectionData,
  showCounter = true,
  showCTA = false,
  showLocation = false,
  showTime = false,
  showInOffice = false,
  showFulltime = false,
  fulltimeText = 'Fulltime',
  inOfficeText = 'In Office',
  locationText,
  timeText,
  ctaText = 'Apply',
  ctaHref,
}) => {
  
  if (!data || !Array.isArray(data)) {
    console.log("No data provided");
    return null;
  }

  // Helper function to render text with colored spans
  const renderDynamicText = (plane1 = '', colored1 = '', plane2 = '', colored2 = '') => {
    return (
      <>
        {plane1 && <span className='heading-plane'>{plane1}</span>}
        {colored1 && <span className='heading-colored'> {colored1}</span>}
        {plane2 && <span className='heading-plane'> {plane2}</span>}
        {colored2 && <span className='heading-colored'> {colored2}</span>}
      </>
    );
  };

  return (
      <section>
        <div className="section-inner-padding flex-column">
          <h5 className="ecosystem-section-card-title">
            <LightBulbIcon width={18.75} height={18.75} /> 
            {sectionData?.title || 'The Problem'}
          </h5>
          <h2 className="section-card-heading text-center">
            {sectionData ? 
              renderDynamicText(
                sectionData.headingPlane1,
                sectionData.headingColored1,
                sectionData.headingPlane2,
                sectionData.headingColored2
              ) :
              <><span className="heading-colored">Execution breaks</span> across CRM, ERP, and operations</>
            }
          </h2>
          <p className="section-card-description2 text-center">
            {sectionData?.description || 
              'Lead-to-cash execution is fragmented across systems. Each tool manages a step, but no system owns the full process.'}
          </p>
     
          <div className="ecosystem">
            {data.map((item, index) => (
              <div key={index} className="card">
                <div className="outer-card">
                  {showCounter && item.number !== undefined && item.number !== null && (
                    <span className="ecosystems-number">{item.number}</span>
                  )}
                  <h3 className="ecosystems-title">{item.title}</h3>
                </div>
                <p className="ecosystems-description">{item.description}</p>

                {(showFulltime || showInOffice) && (
                  <div className="ecosystem-pills">
                    {showFulltime && (
                      <span className="ecosystem-pill">
                        {typeof item.fulltime === 'string'
                          ? item.fulltime
                          : typeof item.fullTime === 'string'
                            ? item.fullTime
                            : typeof item.employmentType === 'string'
                              ? item.employmentType
                              : fulltimeText}
                      </span>
                    )}
                    {showInOffice && (
                      <span className="ecosystem-pill">
                        {typeof item.inOffice === 'string'
                          ? item.inOffice
                          : typeof item.in_office === 'string'
                            ? item.in_office
                            : typeof item.workMode === 'string'
                              ? item.workMode
                              : inOfficeText}
                      </span>
                    )}
                  </div>
                )}

                {(showLocation || showTime || showCTA) && (
                  <div className="ecosystem-footer">
                    <div className="ecosystem-meta">
                      {showLocation && (item.location || locationText) && (
                        <span className="ecosystem-meta-item">
                          <MapPinIcon width={16} height={16} />
                          {item.location || locationText}
                        </span>
                      )}
                      {showTime && (item.time || item.postedAt || timeText) && (
                        <span className="ecosystem-meta-item">
                          <ClockIcon width={16} height={16} />
                          {item.time || item.postedAt || timeText}
                        </span>
                      )}
                    </div>

                    {showCTA && (
                      (() => {
                        const href = item.cta?.href || item.ctaHref || item.href || item.ctaLink || ctaHref;
                        const text = item.cta?.text || item.ctaText || ctaText;

                        return href ? (
                          <Link className="ecosystem-cta" href={href}>
                            {text}
                            <ArrowRightIcon width={16} height={16} />
                          </Link>
                        ) : (
                          <span className="ecosystem-cta ecosystem-cta-disabled">
                            {text}
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                          </span>
                        );
                      })()
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Ecosystem;