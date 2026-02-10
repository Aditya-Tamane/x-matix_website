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

export default function ProductPage1(props) {
  const { data, title, subtitle } = props;
  return (
    <>
      <SectionCard
        data={data?.xMatixPlatform}
        titleIcon={<CommandLineIcon width={18.75} height={18.75} />}
        buttons={
          <>
            <Button title="Request a Demo" hasIcon={true} />
            <Button title="See How it Works" type="secondary" />
          </>
        }
      />
      <SectionCard
        data={data?.whatIsIt}
        titleIcon={<PuzzlePieceIcon width={18.75} height={18.75} />}
      />

      <section>
        <div className="heading-wrapper text-center">
          <h5 className="heading-title"><LightBulbIcon width={18.75} height={18.75} /> {data?.coreCapabilities?.title}</h5>
          <h2 className="main-heading">
            {data?.coreCapabilities?.mainHeading?.map(e => (
              <span key={e?.index} style={{color: e.color}}>{e.heading}</span>
            ))}
          </h2>
          <p className="description">{data?.coreCapabilities?.description}</p>
        </div>
        <div className="cards-wrapper mt-12">
          <CoreCapabilitiesCard icon={<CheckCircleIcon width={28} height={28} />} data={data?.coreCapabilities?.coreCapabilitiesCard1} />
          <CoreCapabilitiesCard icon={<DocumentIcon width={28} height={28} />} data={data?.coreCapabilities?.coreCapabilitiesCard2}/>
          <CoreCapabilitiesCard icon={<DevicePhoneMobileIcon width={28} height={28} />} data={data?.coreCapabilities?.coreCapabilitiesCard3}/>
        </div>
        <div className="cards-wrapper mt-12">
          <CoreCapabilitiesCard icon={<AdjustmentsVerticalIcon width={28} height={28} />} data={data?.coreCapabilities?.coreCapabilitiesCard4}/>
          <CoreCapabilitiesCard icon={<ClockIcon width={28} height={28} />} data={data?.coreCapabilities?.coreCapabilitiesCard5}/>
        </div>
      </section>

      <section>
        <div className="heading-wrapper text-center">
          <h5 className="heading-title"><BoltIcon width={18.75} height={18.75} /> {data?.executionModel?.title}</h5>
          <h2 className="main-heading">
            {data?.executionModel?.mainHeading?.map(e => (
              <span key={e?.index} style={{color: e.color}}>{e.heading}</span>
            ))}
          </h2>
          <p className="description">{data?.executionModel?.description}</p>
        </div>
        <Accordian data={data?.executionModelAccordian} />
      </section>

      <section>
        <div className="heading-wrapper text-center">
          <h5 className="heading-title"><Cog6ToothIcon width={18.75} height={18.75} /> {data?.worksWith?.title}</h5>
          <h2 className="main-heading">
            {data?.worksWith?.mainHeading?.map(e => (
              <span key={e?.index} style={{color: e.color}}>{e.heading}</span>
            ))}
          </h2>
          <p className="description">{data?.worksWith?.description}</p>
        </div>
        <div className="mt-12 text-center">
          <Image
            src={ModulesImage}
            alt="Modules Image"
            className="card-image"
            loading="lazy"
            width={500}
            height={'auto'}
            usemap="#workmap"
          />
          <map name="workmap">
            <area shape="poly" coords="54, 93, 54, 93, 96, 52, 146, 22, 160, 27, 160, 27, 205, 136, 205, 136, 203, 149, 203, 149, 180, 164, 180, 164, 163, 181, 151, 177, 56, 110, 56, 110" alt="Payroll" href="/products/payroll"/>
            <area shape="poly" coords="175, 21, 175, 21, 182, 8, 182, 8, 241, 0, 241, 0, 297, 6, 308, 19, 280, 132, 270, 140, 244, 140, 223, 145, 211, 136" alt="Finance" href="/products/finance"/>
            <area shape="poly" coords="325, 22, 336, 14, 336, 14, 388, 41, 435, 84, 432, 99, 344, 173, 328, 173, 312, 157, 289, 148, 286, 134" alt="Partners" href="/products/partners"/>
            <area shape="poly" coords="346, 182, 440, 108, 440, 108, 456, 112, 488, 171, 498, 228, 486, 233, 372, 242, 358, 237, 352, 212" alt="Sales" href="/products/field-sales"/>
            <area shape="poly" coords="359, 258, 359, 258, 370, 250, 486, 250, 499, 261, 492, 319, 465, 376, 452, 378, 349, 313, 344, 302, 356, 280" alt="Service" href="/products/field-service"/>
            <area shape="poly" coords="296, 362, 297, 349, 318, 338, 333, 319, 346, 324, 444, 392, 444, 406, 404, 445, 350, 476, 337, 472" alt="Warrenty" href="/products/warrenty"/>
            <area shape="poly" coords="219, 364, 230, 355, 254, 361, 275, 356, 289, 365, 323, 476, 319, 490, 252, 500, 195, 495, 189, 482" alt="Procurement" href="/products/procurement"/>
            <area shape="poly" coords="156, 328, 172, 327, 187, 342, 206, 350, 212, 364, 176, 479, 164, 483, 106, 454, 64, 416, 64, 401" alt="Warehouse" href="/products/warehouse"/>
            <area shape="poly" coords="3, 278, 10, 267, 128, 258, 141, 266, 145, 284, 156, 304, 154, 317, 56, 390, 42, 390, 13, 334" alt="Inventory" href="/products/inventory"/>
            <area shape="poly" coords="145, 184, 153, 198, 144, 219, 140, 240, 131, 247, 10, 250, 1, 238, 10, 176, 32, 127, 48, 122" alt="People" href="/products/people"/>
          </map>
        </div>
      </section>

      <RequestDemo data={data.requestADemo}/>
    </>
  );
}