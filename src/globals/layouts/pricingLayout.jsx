import SectionCard from "../../components/common/Section-card/section-card";
import RequestDemo from "../../components/RequestDemo";
import '../../styles/products.css';

import { PuzzlePieceIcon } from '@heroicons/react/24/outline';
import Hero from "@/components/Hero";
import PaymentPlans from "@/components/common/paymentPlans/PaymentPlans";
import FAQ from "@/components/common/faq/faq";

export default function pricingLayout(props) {      
  const { data } = props;
  return (
    <>
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