"use client";
import "./outcomes.css";

export default function Outcomes({ data = [] }) {
  return (
    <section className="feature-wrapper">
      <div className="feature-grid">
        {data.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-card-inner">
              <span className="feature-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}