"use client";
import '../../styles/products.css';
import Ecosystem from "@/components/common/ecosystem/ecosystem";
import LeadershipSection from "@/components/common/leadership/LeadershipSection";
import PartnersSection from "@/components/common/partners/PartnersSection";
import companyData from './companyData.json';
import lead1 from '../../../public/images/lead1.png';
import lead2 from '../../../public/images/lead2.png';
import lead3 from '../../../public/images/lead3.png';
import logo1 from '../../../public/svgs/logo1.svg';
import logo2 from '../../../public/svgs/logo2.svg';
import logo3 from '../../../public/svgs/logo3.svg';
import logo4 from '../../../public/svgs/logo4.svg';
import logo5 from '../../../public/svgs/logo5.svg';
import logo6 from '../../../public/svgs/logo6.svg';
import HeroSection from '@/components/common/heroSection/HeroSection';

export default function CompanyPage() {
  const data = companyData;

  return (
    <>
      <HeroSection topSubtitle={data?.HeroData?.topSubtitle} title={data?.HeroData?.title} subtitle={data?.HeroData?.subtitle} btnOne={false} btnTwo={false} />

      <Ecosystem data={data?.ecosystem} sectionData={data?.ecosystemSection} showCounter={false} />

      <LeadershipSection
        eyebrow="Leadership"
        title="Built by operators and technologists"
        description="xMatix is led by a team with deep experience building and scaling enterprise platforms."
        members={[
          {
            id: "1",
            name: "Eddy Denison",
            role: "CFO",
            image: lead1,
            links: { linkedin: "#", twitter: "#" },
          },
          {
            id: "2",
            name: "Eddy Denison",
            role: "CFO",
            image: lead2,
            links: { linkedin: "#", twitter: "#" },
          },
          {
            id: "3",
            name: "Eddy Denison",
            role: "CFO",
            image: lead3,
            links: { linkedin: "#", twitter: "#" },
          },
        ]}
      />

      <Ecosystem
        data={data?.ecosystem2}
        sectionData={data?.ecosystemSection2}
        showCounter={false}
        showCTA={true}
        showFulltime={true}
        showInOffice={true}
        showLocation={true}
        showTime={true}
      />

      <PartnersSection
        eyebrow="Partners"
        title="A growing ecosystem"
        description="xMatix partners with integrators and cloud providers."
        partners={[
          { id: "slack", name: "Slack", logo: logo1 },
          { id: "slack", name: "Slack", logo: logo2 },
          { id: "slack", name: "Slack", logo: logo3 },
          { id: "slack", name: "Slack", logo: logo4 },
          { id: "slack", name: "Slack", logo: logo5 },
          { id: "slack", name: "Slack", logo: logo6 },
        ]}
      />
    </>
  );
}
