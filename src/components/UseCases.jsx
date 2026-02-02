import { BanknotesIcon, CheckBadgeIcon, ClipboardDocumentIcon, CurrencyRupeeIcon, ShareIcon, ShoppingCartIcon, Squares2X2Icon, TruckIcon } from "@heroicons/react/24/outline";
import { Card } from "./common/Card/card"

const useCases = [
  {
     icon: <CurrencyRupeeIcon width={20} height={20} />,
    title: "Lead-to-Cash Execution",
    description: "Orchestrate sales, fulfillment, billing, and collections with shared data and policy-driven workflows."
  },
  {
    icon: <CheckBadgeIcon width={20} height={20} />,
    title: "Service-to-Resolution",
    description: "Execute service requests end-to-end—from intake to field resolution—with real-time context and intelligence."
  },
  {
     icon: <TruckIcon width={20} height={20} />,
    title: "Warehouse Execution",
    description: "Run warehouse operations with connected inventory, workflows, and exception-aware execution."
  },
  {
    icon: <ClipboardDocumentIcon width={20} height={20} />,
    title: "Inventory Accuracy & Audit",
    description: "Maintain continuous inventory tracking, adjustments, and audit-ready execution."
  },
  {
     icon: <ShareIcon width={20} height={20} />,
    title: "Partner-Led Distribution",
    description: "Enable partners and dealers to execute sales and service with shared visibility and governance."
  },
  {
    icon: <BanknotesIcon width={20} height={20} />,
    title: "Workforce & Payroll Operations",
    description: "Execute workforce planning and payroll based on real work, incentives, and compliance rules."
  },
];

export default function UseCases() {
  return ( 
    <section className="use-cases-section" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h5 className="section-card-title">
            <Squares2X2Icon width={18.75} height={18.75} /> Use Cases
        </h5>
      <h2><span className="highlight">Execute outcomes</span> across your operations</h2>

      <div className="use-cases-grid">
        {useCases.map((useCase) => (
          <Card
            key={useCase.title}
            icon={useCase.icon}
            title={useCase.title}
            description={useCase.description}
          />
        ))}
      </div>
    </section>
  );
}