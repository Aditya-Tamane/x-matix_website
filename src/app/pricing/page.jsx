"use client";
import SectionCard from "../../components/common/Section-card/section-card";
import RequestDemo from "../../components/common/requestDemo/RequestDemo";
import '../../styles/products.css';

import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import PaymentPlans from "@/components/common/paymentPlans/PaymentPlans";
import FAQ from "@/components/common/faq/faq";
import HeroSection from "@/components/common/heroSection/HeroSection";
import pricingData from '../pricing/pricingData.json';
export default function pricingLayout() {      
const data = pricingData;
  return (
    <>
      <HeroSection topSubtitle={data?.HeroData?.topSubtitle} title={data?.HeroData?.title} subtitle={data?.HeroData?.subtitle} />
      <SectionCard
        data={data.whatIsIt}
        titleIcon={<PuzzlePieceIcon width={18.75} height={18.75} />}
      />

      <PaymentPlans pricingData={data.pricingData}/>
      <FAQ data={data.faqData}/>
      <RequestDemo data={data.requestDemoData} />
    </>
  );
}