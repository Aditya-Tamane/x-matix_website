import React from 'react';
import './ecosystem.css';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const Ecosystem = ({ data, sectionData }) => {
  console.log("ecosystem data:", data);
  
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
                  <span className="ecosystem-number">{item.number}</span>
                  <h3 className="ecosystem-title">{item.title}</h3>
                </div>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Ecosystem;