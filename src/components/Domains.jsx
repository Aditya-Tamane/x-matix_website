import { AdjustmentsVerticalIcon, ArchiveBoxIcon, ArrowLeftEndOnRectangleIcon, BuildingStorefrontIcon, ChartBarIcon, CircleStackIcon, ComputerDesktopIcon, DocumentCurrencyRupeeIcon, MapIcon, ShieldCheckIcon, ShoppingCartIcon, UserGroupIcon, UsersIcon, WrenchIcon } from "@heroicons/react/24/outline";import { Card } from "./common/Card/card"

const domains = [
  { title: "Sales", desc: "End-to-end lead-to-cash execution", icon: <ShoppingCartIcon width={20} height={20} /> },
  { title: "Field Sales", desc: "Distributed sales execution in the field", icon: <MapIcon width={20} height={20} /> },
  { title: "Service", desc: "End-to-end service execution", icon: <WrenchIcon width={20} height={20} /> },
  { title: "Field Service", desc: "End-to-end service execution", icon: <AdjustmentsVerticalIcon width={20} height={20} /> },
  { title: "Warranty", desc: "Automated warranty and claims execution", icon: <ShieldCheckIcon width={20} height={20} /> },

  { title: "Warehouse", desc: "Real-time warehouse execution", icon: <BuildingStorefrontIcon width={20} height={20} /> },
  { title: "Inventory", desc: "Continuous inventory accuracy", icon: <ArchiveBoxIcon width={20} height={20} /> },
  { title: "Procurement", desc: "Connected procurement execution", icon: <ArrowLeftEndOnRectangleIcon width={20} height={20} /> },
  { title: "Finance", desc: "Execution-linked operational finance", icon: <CircleStackIcon width={20} height={20} /> },
  { title: "Payroll", desc: "Accurate, compliant payroll execution", icon: <DocumentCurrencyRupeeIcon width={20} height={20} /> },

  { title: "People", desc: "Workforce execution and management", icon: <UserGroupIcon width={20} height={20} /> },
  { title: "Partners", desc: "Workforce execution and management", icon: <UsersIcon width={20} height={20} /> },
  { title: "Analytics", desc: "Execution-driven operational insights", icon: <ChartBarIcon width={20} height={20} /> },
];

export default function Domains() {
  const topDomains = domains.slice(0, 10);
  const bottomDomains = domains.slice(10);

  return (
    <section className="domains-section">
      <div className="heading-wrapper" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h5 className="section-card-title">
            <ComputerDesktopIcon width={18.75} height={18.75} /> What you can run
          </h5>
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