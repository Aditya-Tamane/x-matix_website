'use client';
import { useState } from 'react';
import { ArrowTopRightOnSquareIcon, ComputerDesktopIcon, CreditCardIcon, SparklesIcon } from '@heroicons/react/24/outline';
import './paymentPlans.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faStar } from '@fortawesome/free-solid-svg-icons';

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
                {plan.featured && <SparklesIcon width={20} height={20} className='featuredIcon'/>}
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
                    <FontAwesomeIcon icon={faStar} height={16} width={16} color='#00A4EF'/>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="ctaButton">
              <span>Get Started</span>
             <FontAwesomeIcon icon={faArrowRightToBracket} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}