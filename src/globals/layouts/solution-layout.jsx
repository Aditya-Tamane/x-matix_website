"use client";
import Button from "../../components/common/Button/button";
import SectionCard from "../../components/common/Section-card/section-card";
import CoreCapabilitiesCard from "../../components/common/Core-capabilities-card/CoreCapabilities";
import RequestDemo from "../../components/common/requestDemo/RequestDemo";
import Image from "next/image";
import ModulesImage from '../../../public/images/Modules.png';
import '../../styles/products.css';

import {
  CommandLineIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  CheckCircleIcon,
  DocumentIcon,
  AdjustmentsVerticalIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
  BoltIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import Accordian from "@/components/common/accordian/accordian-component";
import Ecosystem from "@/components/common/ecosystem/ecosystem";
import BigCard from "@/components/common/long-card/BigCard";

export default function solutionLayout(props) {
        const cardLayoutData = {
  imageUrl: '/images/image2_card.png',
  imageAlt: 'xMatix Sense Platform',
  imagePosition: 'right',
  contentType: 'cards',
  theme: 'dark',
  accentColor: '#00d9ff',
  topSubtitle: 'Powered by xMatix Sense platform',
  title: '{{highlight}}Agentic intelligence{{/highlight}} that executes, not just analyzes',
  subtitle: 'Powered by xMatix Sense',
  description: 'xMatix Sense embeds agentic intelligence directly into lead to cash workflows. It continuously monitors execution signals, anticipates risks, and guides teams with policy bound actions that improve speed, accuracy, and outcomes.',
  features: [
    {
      icon: '🚨',
      title: 'Deal Risk Prediction',
      description: 'Detect stalled deals early using real time execution signals across sales, approvals, and fulfillment.'
    },
    {
      icon: '🛡️',
      title: 'Pricing Governance',
      description: 'Automatically flag pricing and discount anomalies to protect margins and ensure policy compliance.'
    },
    {
      icon: '🚚',
      title: 'Fulfillment Risk Detection',
      description: 'Identify inventory and delivery risks before they impact customer commitments.'
    },
    {
      icon: '📈',
      title: 'Next Best Action Guidance',
      description: 'Recommend context aware actions that help teams resolve issues and close faster.'
    }
  ],
  ctaText: 'Explore xMatix Sense',
  ctaLink: '#'
};

// Example data for Steps Layout (like second image)
const stepsLayoutData = {
  imageUrl: '/images/mobileSolution.png',
  imageAlt: 'Lead-to-Cash Workflow',
  imagePosition: 'left',
  contentType: 'steps',
  theme: 'dark',
  accentColor: '#00d9ff',
  subtitle: 'Lead-to-Cash Execution Flow',
  title: 'How {{highlight}}Lead-to-Cash{{/highlight}} Works on xMatix',
  steps: [
    {
      title: 'Lead and Opportunity',
      description: 'Capture and qualify leads, then progress opportunities through policy-driven approvals.'
    },
    {
      title: 'Quote and Order',
      description: 'Apply pricing and discount rules automatically and convert approved quotes into executable orders.'
    },
    {
      title: 'Fulfillment',
      description: 'Coordinate inventory and warehouse execution while resolving stock and delivery exceptions in real time.'
    },
    {
      title: 'Billing and Collections',
      description: 'Generate invoices automatically and track revenue and payments as part of the same execution flow.'
    }
  ],
  description: 'Every stage runs on a single execution layer, ensuring continuity, control, and real-time visibility across the entire lead-to-cash lifecycle.'
};
  const { data, title, subtitle } = props;
  const displayTitle = title || data?.title || "xMatix Platform";
  const displaySubtitle = subtitle || data?.subtitle || "";
  return (
    <>
      <SectionCard
        data={data.xMatixPlatform}
        titleIcon={<CommandLineIcon width={18.75} height={18.75} />}
        buttons={
          <>
            <Button title="Request a Demo" hasIcon={true} />
            <Button title="See How it Works" type="secondary" />
          </>
        }
      />

      <Ecosystem data={data.ecosystem} sectionData={data.ecosystemSection}/>

      <SectionCard
        data={data.whatIsIt}
        titleIcon={<PuzzlePieceIcon width={18.75} height={18.75} />}
      />

      <BigCard {...stepsLayoutData} />
      <BigCard {...cardLayoutData} />

      <RequestDemo />
    </>
  );
}