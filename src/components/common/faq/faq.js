'use client';
import { useState } from 'react';
import { QuestionMarkCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import './faq.css';

export default function FAQ(data = {}) {
    const faqData = data?.data
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <div className="faq-badge">
          <QuestionMarkCircleIcon className="faq-icon" />
          <span>FAQs</span>
        </div>
        <h1 className="faq-title">
          {faqData.title.text}
          <span className="faq-highlight">{faqData.title.highlight}</span>
        </h1>
      </div>

      <div className="faq-list">
        {faqData.faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <ChevronDownIcon
                className={`faq-chevron ${openIndex === index ? 'rotated' : ''}`}
              />
            </button>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-cta">
        <p className="faq-cta-text">{faqData.cta.text}</p>
        <button className="faq-cta-button" onClick={() => window.location.href = 'mailto:xmatix@xmatix.com'}>
          {faqData.cta.buttonText}
        </button>
      </div>
    </div>
  );
}