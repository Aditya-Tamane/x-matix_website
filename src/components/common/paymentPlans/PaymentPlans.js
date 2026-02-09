'use client';
import { useState } from 'react';
import { ArrowTopRightOnSquareIcon, ComputerDesktopIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import './paymentPlans.css';

export default function PaymentPlans(pricingData) {
  const data = pricingData?.pricingData;
  const [activeIndex, setActiveIndex] = useState(() => {
    return data.plans.findIndex(plan => plan.featured);
  });

  const handleCardClick = (index) => {
    setActiveIndex(1);
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <div className="payment-contentWrapper">
        <h5 className="heading-title">
          <CreditCardIcon width={18.75} height={18.75} /> {data.title.topSubtitle}
        </h5>
        </div>
        <h1 className="title">
          {data.title.text}
          <span className="highlight"> {data.title.highlight}</span>
        </h1>
        <p className="subtitle">{data.subtitle}</p>
      </div>

      <div className="plansGrid">
        {data.plans.map((plan, index) => (
          <div 
            key={index} 
            className={`planCard ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
          >

            <div className="planHeader">
              <h2 className="planName">{plan.name}</h2>
              <div className="priceContainer">
                <span className="currency">$</span>
                <span className="price">{plan.price}</span>
                <span className="period">/mo</span>
              </div>
              <p className="planDescription">{plan.description}</p>
            </div>

            <div className="featuresSection">
              <h3 className="featuresTitle">Whats included:</h3>
              <ul className="featuresList">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="featureItem">
                    <svg className="checkIcon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="ctaButton">
              <span>Get Started</span>
             <ArrowTopRightOnSquareIcon width={18.75} height={18.75} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}