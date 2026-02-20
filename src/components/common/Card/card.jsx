import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export function Card({
  icon='📊',
  title='Heading',
  description='Here goes the content',
  children=<></>,
  className = "",
  iconClassName = "",
  titleClassName = "",
}) {
  return (
    <div className={`domain-card ${className}`}>
      <div style={{display: "flex", alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
        {icon && icon}
        <ArrowUpRightIcon width={16} height={16} className="domain-card-hover"/>
      </div>
      <h3 className={titleClassName}>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}