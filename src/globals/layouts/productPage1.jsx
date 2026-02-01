// import Button from "../../components/common/Button/button";
// import SectionCard from "../../components/common/Section-card/section-card";
// import xMatixPlatform from "../../data/xMatixPlatform.json";
// import { CommandLineIcon, LightBulbIcon, PuzzlePieceIcon, CheckCircleIcon, DocumentIcon, AdjustmentsVerticalIcon, DevicePhoneMobileIcon, ClockIcon, BoltIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
// import CoreCapabilitiesCard from "../../components/common/Core-capabilities-card/CoreCapabilities";
// import RequestDemo from "../../components/RequestDemo";
// import Image from "next/image";
// import ModulesImage from '../../../public/images/Modules.png';

// export default function Products() {
//     return(
//         <>
//             <SectionCard
//                 data={xMatixPlatform.xMatixPlatform}
//                 titleIcon={<CommandLineIcon width={18.75} height={18.75}/>}
//                 buttons={
//                 <>
//                     <Button title='Request a Demo' hasIcon={true}/>
//                     <Button title='See How it Works' type='secondary'/>
//                 </>
//                 } 
//             />
//             <SectionCard data={xMatixPlatform.whatIsIt} titleIcon={<PuzzlePieceIcon width={18.75} height={18.75}/>}/>
//             <section>
//                 <div className="section-inner-padding flex-column">
//                     <h5 className="section-card-title"><LightBulbIcon width={18.75} height={18.75}/> {"Core Capabilities"}</h5>
//                     <h2 className="section-card-heading text-center">Execution capabilities that power every module</h2>
//                     <p className="section-card-description2 text-center">Core Capabilities Execution capabilities that power every module These shared capabilities enable xMatix to orchestrate workflows, enforce policies, and automate execution consistently across all operational domains.</p>
//                     <div className="cards-wrapper mt-24">
//                         <CoreCapabilitiesCard icon={<CheckCircleIcon width={28} height={28}/>}/>
//                         <CoreCapabilitiesCard icon={<DocumentIcon width={28} height={28}/>}/>
//                         <CoreCapabilitiesCard icon={<DevicePhoneMobileIcon width={28} height={28}/>}/>
//                     </div>
//                     <div className="cards-wrapper mt-12">
//                         <CoreCapabilitiesCard icon={<AdjustmentsVerticalIcon width={28} height={28}/>}/>
//                         <CoreCapabilitiesCard icon={<ClockIcon width={28} height={28}/>}/>
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <div className="section-inner-padding flex-column">
//                     <h5 className="section-card-title"><BoltIcon width={18.75} height={18.75}/> {"Execution Model"}</h5>
//                     <h2 className="section-card-heading text-center">Built for teams running and modernizing operations</h2>
//                     <p className="section-card-description2 text-center">xMatix supports teams modernizing operations with faster execution, governed adaptability, and incremental replacement of rigid CRM and ERP execution layers.</p>
//                     <div className="mt-24">
                        
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <div className="section-inner-padding flex-column">
//                     <h5 className="section-card-title"><Cog6ToothIcon width={18.75} height={18.75}/> {"Works With"}</h5>
//                     <h2 className="section-card-heading text-center">One platform. Every execution domain.</h2>
//                     <p className="section-card-description2 text-center">All xMatix modules run on the same execution platform.  Sales, Service, Warehouse, Inventory, Procurement, Finance, Payroll, People, and Partners share a common foundation for workflows, data context, & governance.</p>
//                     <div className="mt-24">
//                             <Image
//                             src={ModulesImage}
//                             alt={"Modules Image"}
//                             className="card-image"
//                             loading="lazy"
//                             width={400}
//                             height={300}
//                             style={{ width: "100%", height: "auto" }}
//                         />  
//                     </div>
//                 </div>
//             </section>
//             <RequestDemo/>
//         </>
//     )
// }

// src/globals/layouts/PlatformOverview.js

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
import Accordian from "@/components/common/accordian/accordian-component";

export default function ProductPage1(props) {
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

      <SectionCard
        data={data.whatIsIt}
        titleIcon={<PuzzlePieceIcon width={18.75} height={18.75} />}
      />

      {/* Core Capabilities */}
      <section>
        <div className="section-inner-padding flex-column">
          <h5 className="section-card-title">
            <LightBulbIcon width={18.75} height={18.75} /> Core Capabilities
          </h5>
          <h2 className="section-card-heading text-center">
            Execution capabilities that power every module
          </h2>
          <p className="section-card-description2 text-center">
            {data.coreCapabilitiesDescription ||
              "These shared capabilities enable xMatix to orchestrate workflows, enforce policies, and automate execution consistently across all operational domains."}
          </p>
          <div className="cards-wrapper mt-24">
            <CoreCapabilitiesCard icon={<CheckCircleIcon width={28} height={28} />} data={data.coreCapabilitiesCard1} />
            <CoreCapabilitiesCard icon={<DocumentIcon width={28} height={28} />} data={data.coreCapabilitiesCard2}/>
            <CoreCapabilitiesCard icon={<DevicePhoneMobileIcon width={28} height={28} />} data={data.coreCapabilitiesCard3}/>
          </div>
          <div className="cards-wrapper mt-12">
            <CoreCapabilitiesCard icon={<AdjustmentsVerticalIcon width={28} height={28} />} data={data.coreCapabilitiesCard4}/>
            <CoreCapabilitiesCard icon={<ClockIcon width={28} height={28} />} data={data.coreCapabilitiesCard5}/>
          </div>
        </div>
      </section>

      {/* Execution Model */}
      <section>
        <div className="section-inner-padding flex-column">
          <h5 className="section-card-title">
            <BoltIcon width={18.75} height={18.75} /> Execution Model
          </h5>
          <h2 className="section-card-heading text-center">
            Built for teams running and modernizing operations
          </h2>
          <p className="section-card-description2 text-center">
            {data.executionModelDescription ||
              "xMatix supports teams modernizing operations with faster execution, governed adaptability, and incremental replacement of rigid CRM and ERP execution layers."}
          </p>
          <div className="mt-24">
            <Accordian data={data.executionModelAccordian} />
          </div>
        </div>
      </section>

      {/* Works With / Modules */}
      <section>
        <div className="section-inner-padding flex-column">
          <h5 className="section-card-title">
            <Cog6ToothIcon width={18.75} height={18.75} /> Works With
          </h5>
          <h2 className="section-card-heading text-center">
            One platform. Every execution domain.
          </h2>
          <p className="section-card-description2 text-center">
            {data.worksWithDescription ||
              "All xMatix modules run on the same execution platform. Sales, Service, Warehouse, Inventory, Procurement, Finance, Payroll, People, and Partners share a common foundation for workflows, data context, & governance."}
          </p>
          <div className="mt-24">
            <Image
              src={ModulesImage}
              alt="Modules Image"
              className="card-image"
              loading="lazy"
              width={400}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <RequestDemo />
    </>
  );
}