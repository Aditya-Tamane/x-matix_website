export default function PageContent({ sections }) {
  if (!sections) return null;

  return (
    <div className="sections">
      {sections.map((section, i) => {
        if (section.type === 'text') {
          return (
            <div
              key={i}
              className="text-block"
              dangerouslySetInnerHTML={{ __html: section.content || '' }}
            />
          );
        }
        if (section.type === 'features') {
          return (
            <div key={i} className="features">
              {section.items?.map((item, idx) => (
                <div key={idx} className="feature-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          );
        }
        return <div key={i}>Unknown section: {section.type}</div>;
      })}
    </div>
  );
}