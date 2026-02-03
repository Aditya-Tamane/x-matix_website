import Button from "../../components/common/Button/button";
import SectionCard from "../../components/common/Section-card/section-card";
import CoreCapabilitiesCard from "../../components/common/Core-capabilities-card/CoreCapabilities";
import RequestDemo from "../../components/RequestDemo";
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
import Hero from "@/components/Hero";
import PaymentPlans from "@/components/common/paymentPlans/PaymentPlans";
import FAQ from "@/components/common/faq/faq";

export default function pricingLayout(props) {      
  const { data, title, subtitle } = props;
  const displayTitle = title || data?.title || "xMatix Platform";
  const displaySubtitle = subtitle || data?.subtitle || "";
  return (
    <>
      
      <Hero videoEnabled={false} title={data?.pricingTitle} subtitle={data?.pricingSubtitle} />

      <SectionCard
        data={data.whatIsIt}
        titleIcon={<PuzzlePieceIcon width={18.75} height={18.75} />}
      />

      <PaymentPlans stepsLayoutData={data.stepsLayoutData} cardLayoutData={data.cardLayoutData}/>
      <FAQ data={data.faqData}/>
      <RequestDemo />
    </>
  );
}