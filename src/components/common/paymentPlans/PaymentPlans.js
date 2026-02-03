'use client';
import { useState } from 'react';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import './paymentPlans.css';

export default function PaymentPlans() {
    const data = {
  "title": {
    "text": "Choose a plan that matches your",
    "highlight": "execution maturity"
  },
  "subtitle": "Plans define the breadth of platform capabilities, governance controls, and scale limits. Modules can be added to any plan.",
  "plans": [
    {
      "name": "Starter",
      "price": "10",
      "description": "For teams beginning their execution modernization journey.",
      "featured": false,
      "features": [
        "Core execution platform",
        "Limited workflows and automation",
        "Standard governance and access controls",
        "Suitable for single use case or pilot"
      ]
    },
    {
      "name": "Growth",
      "price": "39",
      "description": "For organizations scaling execution across teams and domains.",
      "featured": true,
      "features": [
        "Expanded workflow and automation limits",
        "Advanced governance and lifecycle management",
        "Supports multiple modules and domains",
        "Designed for production-grade execution"
      ]
    },
    {
      "name": "Enterprise",
      "price": "52",
      "description": "For complex, large-scale operational environments.",
      "featured": false,
      "features": [
        "Unlimited execution scale",
        "Advanced security and compliance",
        "Multi-entity and partner support",
        "Enterprise SLAs and deployments"
      ]
    }
  ]
}

  // State to track active card index
  const [activeIndex, setActiveIndex] = useState(() => {
    // Set initial active index to the featured plan
    return data.plans.findIndex(plan => plan.featured);
  });

  // Handle card click
  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <div className="contentWrapper">
        <h5 className="heading-title">
          <ComputerDesktopIcon width={18.75} height={18.75} /> hii
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}