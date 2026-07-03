function SectionTitle({ label, title, description }) {
  return (
    <header className="section-title">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </header>
  );
}

export default SectionTitle;
