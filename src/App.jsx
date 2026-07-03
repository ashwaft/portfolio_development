import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSection from "./sections/HomeSection";
import PortfolioSection from "./sections/PortfolioSection";
import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <PortfolioSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
