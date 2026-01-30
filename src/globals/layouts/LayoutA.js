export default function LayoutA({ title, subtitle, heroImage, children }) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          {heroImage && <img src={heroImage} alt={title} className="hero-img" />}
        </div>
      </section>
      <div className="content">{children}</div>
    </>
  );
}