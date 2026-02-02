
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
      {icon && icon}
      <h3 className={titleClassName}>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}