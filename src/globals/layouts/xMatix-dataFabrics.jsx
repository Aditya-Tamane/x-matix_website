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
  ClockIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

export default function ProductPage2(props) {
  const { data } = props;
  return (
    <>
      <SectionCard
        data={data.xMatixDataFabrics}
        titleIcon={<CommandLineIcon width={18.75} height={18.75} />}
        buttons={
          <>
            <Button title="Request a Demo" hasIcon={true} />
            <Button title="See How it Works" type="secondary" />
          </>
        }
      />
      <SectionCard
        data={data.whatIsIt}
        titleIcon={<PuzzlePieceIcon width={18.75} height={18.75} />}
      />
      <SectionCard
        data={data.whyItMatters}
        titleIcon={<PuzzlePieceIcon width={18.75} height={18.75} />}
        inverse={true}
      />

      <section>
        <div className="heading-wrapper text-center">
          <h5 className="heading-title"><LightBulbIcon width={18.75} height={18.75} /> {data.coreCapabilities?.title}</h5>
          <h2 className="main-heading">
            {data.coreCapabilities?.mainHeading?.map(e => (
              <span key={e?.index} style={{color: e.color}}>{e.heading}</span>
            ))}
          </h2>
          <p className="description">{data.coreCapabilities?.description}</p>
        </div>
        <div className="cards-wrapper mt-12">
            <CoreCapabilitiesCard icon={<CheckCircleIcon width={28} height={28} />} data={data.coreCapabilities.coreCapabilitiesCard1} />
            <CoreCapabilitiesCard icon={<DocumentIcon width={28} height={28} />} data={data.coreCapabilities.coreCapabilitiesCard2}/>
        </div>
        <div className="cards-wrapper mt-12">
          <CoreCapabilitiesCard icon={<AdjustmentsVerticalIcon width={28} height={28} />} data={data.coreCapabilities.coreCapabilitiesCard3}/>
          <CoreCapabilitiesCard icon={<ClockIcon width={28} height={28} />} data={data.coreCapabilities.coreCapabilitiesCard4}/>
        </div>
      </section>

      <section>
        <div className="heading-wrapper text-center">
          <h5 className="heading-title"><Cog6ToothIcon width={18.75} height={18.75} /> {data.worksWith?.title}</h5>
          <h2 className="main-heading">
            {data.worksWith?.mainHeading?.map(e => (
              <span key={e?.index} style={{color: e.color}}>{e.heading}</span>
            ))}
          </h2>
          <p className="description">{data.worksWith?.description}</p>
        </div>
        <div className="mt-12 text-center">
          <Image
            src={ModulesImage}
            alt="Modules Image"
            className="card-image"
            loading="lazy"
            width={500}
            height={'auto'}
          />
        </div>
      </section>

      <RequestDemo />
    </>
  );
}