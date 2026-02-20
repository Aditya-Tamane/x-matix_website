import Image from "next/image";
import "./PartnersSection.css";

export default function PartnersSection({
  eyebrow,
  title,
  description,
  partners = [],
}) {
  return (
    <section className="partners">
      <div className="partners__container">
        <div className="partners__logos">
          {partners.map((partner) => {
            const Wrapper = partner.href ? "a" : "div";

            return (
              <Wrapper
                key={partner.id}
                href={partner.href}
                className="partner-card"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={92}
                  height={68}
                />
              </Wrapper>
            );
          })}
        </div>

        <div className="partners__content">
          {eyebrow && <p className="partners__eyebrow">{eyebrow}</p>}
          <h2 className="partners__title">{title}</h2>
          {description && (
            <p className="partners__description">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
