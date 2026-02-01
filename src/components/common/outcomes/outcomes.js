"use client";
import "./outcomes.css";

export default function FeatureCards({ data = [] }) {
  return (
    <section className="feature-wrapper">
      <div className="feature-grid">
        {data.map((item, index) => (
          <div className="feature-card" key={index}>
            
            <span className="feature-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          
            

            <div className="feature-content">
              <span className="card-divider" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}