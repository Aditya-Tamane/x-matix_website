import Image from "next/image";
import dataFabric from "../../public/svgs/dataFabric.svg";
import modules from "../../public/svgs/modules.svg";
import platform from "../../public/svgs/platform.svg";
import sense from "../../public/svgs/sense.svg";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
export default function HowItWorks() {
  const steps = [
    {
      title: "Platform",
      subtitle: "No-code Execution",
      icon: (
    <Image
      src={platform}
      alt="Data Fabric"
      width={100}
      height={100}
    />
  ),
    },
   {
  title: "Data Fabric",
  subtitle: "Unified Data Layer",
  icon: (
    <Image
      src={dataFabric}
      alt="Data Fabric"
      width={100}
      height={100}
    />
  ),
},
    {
      title: "Sense",
      subtitle: "Agentic Intelligence",
      icon: (
    <Image
      src={sense}
      alt="Data Fabric"
      width={100}
      height={100}
    />
  ),
    },
    {
      title: "Modules",
      subtitle: "Business Operations",
     icon: (
    <Image
      src={modules}
      alt="Data Fabric"
      width={100}
      height={100}
    />
  ),
    },
  ];

  return (
    <section className="how-section">
      <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h5 className="section-card-title">
            <ClipboardDocumentIcon width={18.75} height={18.75} /> Execution Model
          </h5>

        <p className="sub-text">
          xMatix combines a no-code execution platform, a unified operational data fabric, 
          and an embedded agentic <br/> intelligence layer to orchestrate business outcomes across domains.
        </p>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step-item" key={step.title}>
            <span className="icon">{step.icon}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-subtitle">{step.subtitle}</p>

              {index < steps.length - 1 && (
                <Image
                  src="/images/rightArrow.png"
                  alt="connecting arrow" 
                  className="arrow-connector"
                  width={300}
                  height={300}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}