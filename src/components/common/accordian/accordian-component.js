"use client";

import { useState } from "react";
import "./accordian.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Accordian({ data }) {
  const [activeId, setActiveId] = useState(data?.sections[0].id || "");

  const activeSection = data.sections.find(
    (item) => item.id === activeId
  );

  return (
    <div className="dicto-container">
      <div className="dicto-left">
        {data.sections.map((item) => (
          <div
            key={item.id}
            className={`dicto-accordion ${
              activeId === item.id ? "active" : ""
            }`}
          >
            <button
              className="dicto-header"
              onClick={() => setActiveId(item.id)}
            >
              <span>{item.title}</span>
              <span className="dicto-arrow">
                {activeId === item.id ? <ChevronUpIcon width={18} height={18}/> : <ChevronDownIcon width={18} height={18}/>}
              </span>
            </button>

            {activeId === item.id && (
              <p className="dicto-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>

      <div className="dicto-right">
        <Image
          src={activeSection.image}
          alt={activeSection.title}
          className="dicto-image"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
