
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ProductCards } from "../components/ProductCards";
import { DifferentialsSection } from "../components/DifferentialsSection";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F0]">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <ProductCards />
        <DifferentialsSection />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
