
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Compensado = () => {
  const compensados = [
    {
      id: "compensado-1",
      name: "Compensado Naval 10mm",
      price: "R$ 85,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
      images: [
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png"
      ],
      description: "Compensado naval 10mm de alta qualidade, resistente à umidade e ideal para uso em ambientes úmidos. Fabricado com lâminas de madeira selecionada e cola fenólica à prova d'água. Perfeito para construção naval, móveis e estruturas externas.",
      specifications: {
        material: "Madeira Compensada Naval",
        dimensoes: "220cm x 160cm x 10mm",
        acabamento: "Natural",
        aplicacao: "Ambientes úmidos e externos"
      }
    },
    {
      id: "compensado-2",
      name: "Compensado Naval 12mm",
      price: "R$ 105,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
      images: [
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png"
      ],
      description: "Compensado naval 12mm com excelente resistência estrutural e durabilidade. Ideal para aplicações que exigem maior resistência mecânica, como pisos de embarcações e móveis pesados.",
      specifications: {
        material: "Madeira Compensada Naval",
        dimensoes: "220cm x 160cm x 12mm",
        acabamento: "Natural",
        aplicacao: "Estruturas e móveis pesados"
      }
    },
    {
      id: "compensado-3",
      name: "Compensado Naval 15mm",
      price: "R$ 125,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
      images: [
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png"
      ],
      description: "Compensado naval 15mm para aplicações estruturais robustas. Oferece excelente estabilidade dimensional e resistência superior. Ideal para construção civil e marcenaria especializada.",
      specifications: {
        material: "Madeira Compensada Naval",
        dimensoes: "220cm x 160cm x 15mm",
        acabamento: "Natural",
        aplicacao: "Construção civil e marcenaria"
      }
    },
    {
      id: "compensado-4",
      name: "Compensado Naval 18mm",
      price: "R$ 145,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
      images: [
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png"
      ],
      description: "Compensado naval 18mm, nossa opção mais robusta para aplicações que demandam máxima resistência. Perfeito para estruturas pesadas, formas de concreto e projetos industriais.",
      specifications: {
        material: "Madeira Compensada Naval",
        dimensoes: "220cm x 160cm x 18mm",
        acabamento: "Natural",
        aplicacao: "Estruturas pesadas e industriais"
      }
    },
    {
      id: "compensado-5",
      name: "Compensado Resinado 15mm",
      price: "R$ 95,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
      images: [
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png"
      ],
      description: "Compensado resinado 15mm com excelente qualidade e custo-benefício. Tratado com resina fenólica que garante resistência à umidade e durabilidade. Ideal para móveis e divisórias internas.",
      specifications: {
        material: "Madeira Compensada Resinada",
        dimensoes: "220cm x 160cm x 15mm",
        acabamento: "Resinado",
        aplicacao: "Móveis e divisórias"
      }
    },
    {
      id: "compensado-6",
      name: "Compensado Resinado 18mm",
      price: "R$ 115,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
      images: [
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
        "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png"
      ],
      description: "Compensado resinado 18mm para aplicações que exigem maior resistência estrutural. Acabamento resinado proporciona superfície lisa e uniforme, facilitando aplicação de tintas e vernizes.",
      specifications: {
        material: "Madeira Compensada Resinada",
        dimensoes: "220cm x 160cm x 18mm",
        acabamento: "Resinado",
        aplicacao: "Estruturas e acabamentos"
      }
    }
  ];

  const handleWhatsApp = (productName: string, price: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${productName} - ${price}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0]">
      <Header />
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-[#2F5233] text-white py-6">
          <div className="max-w-7xl mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-[#D4A574] transition-colors mb-4">
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Compensado</h1>
            <p className="text-lg mt-2">Diversos tipos e espessuras de compensado naval e resinado</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compensados.map((compensado) => (
              <Card key={compensado.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={compensado.image}
                    alt={compensado.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#2F5233] mb-2">
                    {compensado.name}
                  </h3>
                  
                  <p className="text-[#5D4037] mb-4 text-sm line-clamp-3">
                    {compensado.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#D4A574]">
                      {compensado.price}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={`/produto/compensado/${compensado.id}`}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-[#2F5233] text-[#2F5233] hover:bg-[#2F5233] hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Ver Detalhes
                      </Button>
                    </Link>
                    
                    <Button
                      onClick={() => handleWhatsApp(compensado.name, compensado.price)}
                      className="flex-1 bg-[#2F5233] hover:bg-[#D4A574] text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Orçamento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Compensado;
