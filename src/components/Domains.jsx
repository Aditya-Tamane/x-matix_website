import { AdjustmentsVerticalIcon, ArchiveBoxIcon, ArrowLeftEndOnRectangleIcon, BuildingStorefrontIcon, ChartBarIcon, CircleStackIcon, ComputerDesktopIcon, DocumentCurrencyRupeeIcon, MapIcon, ShieldCheckIcon, ShoppingCartIcon, UserGroupIcon, UsersIcon, WrenchIcon } from "@heroicons/react/24/outline";import { Card } from "./common/Card/card"
import Link from "next/link";

const whatYouCanRun = {
  title: "What you can run",
  mainHeading : [
    {
      heading: "One Platform. ",
      color: "#00A4EF"
    },
    {
      heading: "Multiple execution domains.",
      color: "#fff"
    },
  ],
  cardsData : [
    { title: "Sales", href:"sales", desc: "End-to-end lead-to-cash execution", icon: <ShoppingCartIcon width={24} height={24} /> },
    { title: "Field Sales", href:"field-sales", desc: "Distributed sales execution in the field", icon: <MapIcon width={24} height={24} /> },
    { title: "Incentives", href:"incentives", desc: "End-to-end service execution", icon: <WrenchIcon width={24} height={24} /> },
    { title: "Field Service", href:"field-services", desc: "End-to-end service execution", icon: <AdjustmentsVerticalIcon width={24} height={24} /> },
    { title: "Warranty", href:"warrenty", desc: "Automated warranty and claims execution", icon: <ShieldCheckIcon width={24} height={24} /> },

    { title: "Warehouse", href:"analytics", desc: "Real-time warehouse execution", icon: <BuildingStorefrontIcon width={24} height={24} /> },
    { title: "Inventory", href:"inventory", desc: "Continuous inventory accuracy", icon: <ArchiveBoxIcon width={24} height={24} /> },
    { title: "Procurement", href:"procurement", desc: "Connected procurement execution", icon: <ArrowLeftEndOnRectangleIcon width={24} height={24} /> },
    { title: "Finance", href:"finance", desc: "Execution-linked operational finance", icon: <CircleStackIcon width={24} height={24} /> },
    { title: "Payroll", href:"payroll", desc: "Accurate, compliant payroll execution", icon: <DocumentCurrencyRupeeIcon width={24} height={24} /> },

    { title: "People", href:"people", desc: "Workforce execution and management", icon: <UserGroupIcon width={24} height={24} /> },
    { title: "Partners", href:"partners", desc: "Workforce execution and management", icon: <UsersIcon width={24} height={24} /> },
    { title: "Analytics", href:"analytics", desc: "Execution-driven operational insights", icon: <ChartBarIcon width={24} height={24} /> },
  ]
};

export default function Domains() {
  const topDomains = whatYouCanRun.cardsData.slice(0, 10);
  const bottomDomains = whatYouCanRun.cardsData.slice(10);

  return (
    <section>
      <div className="heading-wrapper">
        <h5 className="heading-title">
          <ComputerDesktopIcon width={18.75} height={18.75} /> {whatYouCanRun?.title}
        </h5>
        <h2 className="main-heading">
          {whatYouCanRun?.mainHeading?.map((e, i) => {
            return <span key={i} style={{color: e?.color}}>{e?.heading}</span>
          })}
        </h2>
      </div>
      <div className="domains-grid">
        {topDomains.map((domain) => (
          <Link href={`/products/${domain.href}`} key={domain.title} >
            <Card
              icon={domain.icon}
              title={domain.title}
              description={domain.desc}
            />
          </Link>
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