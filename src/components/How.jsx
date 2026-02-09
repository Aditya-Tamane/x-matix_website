import Image from "next/image";
import dataFabric from "../../public/svgs/dataFabric.svg";
import modules from "../../public/svgs/modules.svg";
import platform from "../../public/svgs/platform.svg";
import sense from "../../public/svgs/sense.svg";
import { ArrowRightIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
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
      <div className="heading-wrapper">
        <h5 className="heading-title"><ClipboardDocumentIcon width={18.75} height={18.75} /> Execution Model</h5>
        <p className="description">xMatix combines a no-code execution platform, a unified operational data fabric, 
          and an embedded agentic <br/> intelligence layer to orchestrate business outcomes across domains.</p>
      </div>

      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <>
            <div className="step-item" key={index}>
              <span className="icon">{step.icon}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-subtitle">{step.subtitle}</p>
            </div>
            {index < steps.length - 1 && (
              <>
                <svg width="0" height="0" aria-hidden>
                  <defs>
                    <linearGradient id="icon-gradient" gradientTransform="rotate(11.22)">
                      <stop offset="-0.15%" stopColor="#00B2C2" />
                      <stop offset="74.97%" stopColor="#093493" />
                      <stop offset="138.88%" stopColor="#321F96" />
                    </linearGradient>
                  </defs>
                </svg>
                <ArrowRightIcon
                  width={50}
                  height={50}
                  stroke="url(#icon-gradient)"
                  strokeWidth={3.5}
                />
              </>
            )}
          </>
        ))}
      </div>
    </section>
  );
}