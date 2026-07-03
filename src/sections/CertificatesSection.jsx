import SectionTitle from "../components/SectionTitle";
import CertificateCard from "../components/CertificateCard";
import certificates from "../data/certificates";

function CertificatesSection() {
  return (
    <section id="certificates" className="section container">
      <SectionTitle
        label="Certificates"
        title="Certifications & Achievements"
        description="Credentials that support my technical foundation and continuous learning mindset."
      />
      <div className="grid certificates-grid">
        {certificates.map((item) => (
          <CertificateCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default CertificatesSection;
