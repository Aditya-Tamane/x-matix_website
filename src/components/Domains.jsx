import { Card } from "./common/Card/card"

const domains = [
  { title: "Sales", desc: "End-to-end lead-to-cash execution", icon: "🛒" },
  { title: "Field Sales", desc: "Distributed sales execution in the field", icon: "🗺️" },
  { title: "Service", desc: "End-to-end service execution", icon: "🔧" },
  { title: "Field Service", desc: "End-to-end service execution", icon: "🎛️" },
  { title: "Warranty", desc: "Automated warranty and claims execution", icon: "🛡️" },

  { title: "Warehouse", desc: "Real-time warehouse execution", icon: "🏪" },
  { title: "Inventory", desc: "Continuous inventory accuracy", icon: "📦" },
  { title: "Procurement", desc: "Connected procurement execution", icon: "🔁" },
  { title: "Finance", desc: "Execution-linked operational finance", icon: "💰" },
  { title: "Payroll", desc: "Accurate, compliant payroll execution", icon: "🧾" },

  { title: "People", desc: "Workforce execution and management", icon: "👥" },
  { title: "Partners", desc: "Workforce execution and management", icon: "🤝" },
  { title: "Analytics", desc: "Execution-driven operational insights", icon: "📊" },
];

export default function Domains() {
  const topDomains = domains.slice(0, 10);
  const bottomDomains = domains.slice(10);

  return (
    <section className="domains-section">
      <div className="heading-wrapper">
        <span className="badge">What you can run</span>
        <h2>
          <span className="highlight">One platform.</span> Multiple execution domains.
        </h2>
      </div>

      <div className="domains-grid">
        {topDomains.map((domain) => (
          <Card
            key={domain.title}
            icon={domain.icon}
            title={domain.title}
            description={domain.desc}
          />
        ))}

        <div className="domains-last-row">
          {bottomDomains.map((domain) => (
            <Card
              key={domain.title}
              icon={domain.icon}
              title={domain.title}
              description={domain.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}