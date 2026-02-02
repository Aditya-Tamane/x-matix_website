'use client';

import React from 'react';
import ComposablesCard from "./common/Composable-card/ComposablesCard"
import { SparklesIcon } from '@heroicons/react/24/outline';

const whyXmatix = {
  title: "Why xMatix",
  mainHeading: [
    {
      heading: "Built for execution",
      color: "#00A4EF"
    },
    {
      heading: ", not just record-keeping",
      color: "#fff"
    },
  ],
  description: "Most enterprise systems are designed to store data and manage transactions. xMatix is designed to execute work, orchestrating people, systems, and intelligent agents to deliver operational outcomes in real time.",
  cardsData: [
    {
      sNo: "001",
      title: "Composable",
      subtitle: "Deploy only what you need, evolve without rewrites",
      highlight:
        "xMatix modules are built to be adopted incrementally. Start with a single domain and expand over time without re-implementations or platform lock-in. Processes, rules, and workflows can be adapted as operations change.",
      imageSrc: "/images/001.png",
      imageAlt: "Composables settings interface",
    },
    {
      sNo: "002",
      title: "Unified",
      subtitle: "Shared data fabric across all operations",
      highlight:
        "All modules run on a common operational data fabric. This preserves context across sales, service, supply chain, finance, and workforce execution — eliminating silos and duplication.",
      imageSrc: "/images/002.png",
      imageAlt: "Unified data fabric illustration",
      inverse: true
    },
    {
      sNo: "003",
      title: "Agentic",
      subtitle: "Intelligence that acts — not just analyzes",
      highlight:
        "xMatix embeds agentic intelligence directly into workflows. Agents predict outcomes, recommend actions, and resolve exceptions within policy and governance — moving beyond insights to real operational execution.",
      imageSrc: "/images/003.png",
      imageAlt: "Agentic intelligence visualization",
    },
  ]
};

export default function Why() {
  return (
    <section>
      <div className="heading-wrapper">
        <h5 className="heading-title"><SparklesIcon width={18.75} height={18.75} /> {whyXmatix.title}</h5>
        <h2 className="main-heading">
          {whyXmatix?.mainHeading?.map(e => (
            <span key={e?.index} style={{color: e.color}}>{e.heading}</span>
          ))}
        </h2>
        <p className="description">{whyXmatix?.description}</p>
      </div>
      <div className="features-grid">
        {whyXmatix?.cardsData.map((feature) => (
          <ComposablesCard
            key={feature.sNo}
            index={feature.sNo}
            title={feature.title}
            subtitle={feature.subtitle}
            highlight={feature.highlight}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            inverse={feature.inverse}
            buttons={{
              label: "View More",   
              onClick: () => console.log("clicked"), 
            }} 
          />
        ))}
      </div>
    </section>
  );
}