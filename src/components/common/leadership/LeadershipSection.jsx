import Image from "next/image";
import "./LeadershipSection.css";

export default function LeadershipSection({
  eyebrow,
  title,
  description,
  members = [],
}) {
  return (
    <section className="leadership">
      <div className="leadership__container">
        <div className="leadership__header">
          {eyebrow && <p className="leadership__eyebrow">{eyebrow}</p>}
          <h2 className="leadership__title">{title}</h2>
          {description && (
            <p className="leadership__description">{description}</p>
          )}
        </div>

        <div className="leadership__grid">
          {members.map((member) => (
            <div key={member.id} className="leader-card">
              <div className="leader-card__imageWrapper">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="leader-card__image"
                />
                <div className="leader-card__gradient" />
              </div>

              <div className="leader-card__content">
                <div>
                  <h3 className="leader-card__name">{member.name}</h3>
                  <p className="leader-card__role">{member.role}</p>
                </div>

                <div className="leader-card__socials">
                  {member.links?.twitter && (
                    <a href={member.links.twitter} target="_blank">
                      X
                    </a>
                  )}
                  {member.links?.linkedin && (
                    <a href={member.links.linkedin} target="_blank">
                      in
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
