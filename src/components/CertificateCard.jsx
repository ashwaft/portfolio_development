function CertificateCard({ item }) {
  return (
    <article className="card certificate-card reveal">
      <div>
        <h3>{item.title}</h3>
        <p>
          {item.issuer} · {item.year}
        </p>
      </div>
      <a href={item.link} target="_blank" rel="noreferrer">
        Verify
      </a>
    </article>
  );
}

export default CertificateCard;
