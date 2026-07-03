import SectionTitle from "../components/SectionTitle";
import contact from "../data/contact";

function ContactSection() {
  return (
    <section id="contact" className="section container contact-section">
      <SectionTitle
        label="Contact"
        title="Let us connect"
        description="I am currently open to internships, graduate roles, and collaboration opportunities."
      />
      <div className="contact-panel reveal">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
