'use client';

import React from 'react';
import ComposablesCard from "./ui/ComposablesCard"
import { SparklesIcon } from '@heroicons/react/24/outline';

const features = [
  {
    number: "001",
    title: "Composable",
    subtitle: "Deploy only what you need, evolve without rewrites",
    highlight:
      "xMatix modules are built to be adopted incrementally. Start with a single domain and expand over time without re-implementations or platform lock-in. Processes, rules, and workflows can be adapted as operations change.",
    imageSrc: "/images/001.png",
    imageAlt: "Composables settings interface",
    layout: "left-content",
  },
  {
    number: "002",
    title: "Unified",
    subtitle: "Shared data fabric across all operations",
    highlight:
      "All modules run on a common operational data fabric. This preserves context across sales, service, supply chain, finance, and workforce execution — eliminating silos and duplication.",
    imageSrc: "/images/002.png",
    imageAlt: "Unified data fabric illustration",
    layout: "left-image",
  },
  {
    number: "003",
    title: "Agentic",
    subtitle: "Intelligence that acts — not just analyzes",
    highlight:
      "xMatix embeds agentic intelligence directly into workflows. Agents predict outcomes, recommend actions, and resolve exceptions within policy and governance — moving beyond insights to real operational execution.",
    imageSrc: "/images/003.png",
    imageAlt: "Agentic intelligence visualization",
    layout: "left-content",
  },
];

export default function Why() {
  return (
    <section className="why-section">
      <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5 className="section-card-title">
            <SparklesIcon width={18.75} height={18.75} /> Why xMatix
          </h5>
          <h2> <span className="highlight">Built for execution</span>, not just record-keeping </h2>
          <p className='sub-text'>Most enterprise systems are designed to store data and manage transactions. xMatix is designed to execute work,<br/> orchestrating people, systems, and intelligent agents to deliver operational outcomes in real time.</p>
        

        <div className="features-grid">
          {features.map((feature) => (
            <ComposablesCard
              key={feature.number}
              layout={feature.layout}
              badge={feature.number}
              title={feature.title}
              subtitle={feature.subtitle}
              highlight={feature.highlight}
            //   features={["bullet 1", "bullet 2"]} 
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              cta={{
                label: "View More",
                // href: `/feature/${feature.number.toLowerCase()}`,   
                onClick: () => console.log("clicked"), 
              }}
              // className="custom-card-class"    
              // reverseMobile={false}         
            />
          ))}
        </div>
      </div>
    </section>
  );
}