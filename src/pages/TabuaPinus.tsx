
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const TabuaPinus = () => {
  const tabuas = [
    {
      id: "tabua-1",  
      name: "Tábua Pinus 2,5cm x 15cm",
      price: "R$ 12,50",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
      images: [
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png"
      ],
      description: "Tábua de pinus tratado e seco em estufa com dimensões 2,5cm x 15cm. Material de alta qualidade, ideal para construção civil, marcenaria e projetos de acabamento. Oferece excelente resistência e durabilidade.",
      specifications: {
        material: "Pinus Tratado",
        dimensoes: "2,5cm x 15cm x 3m",
        acabamento: "Aplainado",
        aplicacao: "Construção e marcenaria"
      }
    },
    {
      id: "tabua-2",
      name: "Tábua Pinus 2,5cm x 20cm", 
      price: "R$ 16,50",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
      images: [
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png"
      ],
      description: "Tábua de pinus 2,5cm x 20cm, perfeita para projetos que exigem maior largura. Seca em estufa para garantir estabilidade dimensional e evitar rachaduras. Ideal para prateleiras e estruturas.",
      specifications: {
        material: "Pinus Tratado",
        dimensoes: "2,5cm x 20cm x 3m",
        acabamento: "Aplainado",
        aplicacao: "Prateleiras e estruturas"
      }
    },
    {
      id: "tabua-3",
      name: "Tábua Pinus 2,5cm x 25cm",
      price: "R$ 20,50", 
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
      images: [
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png"
      ],
      description: "Tábua de pinus de maior largura (25cm), ideal para tampos de mesa, bancadas e projetos que necessitam de peças mais largas. Excelente qualidade e acabamento liso.",
      specifications: {
        material: "Pinus Tratado",
        dimensoes: "2,5cm x 25cm x 3m",
        acabamento: "Aplainado",
        aplicacao: "Tampos e bancadas"
      }
    },
    {
      id: "tabua-4",
      name: "Tábua Pinus 3cm x 15cm",
      price: "R$ 15,00",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
      images: [
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png"
      ],
      description: "Tábua de pinus com espessura maior (3cm) para aplicações que necessitam de mais resistência estrutural. Ideal para estruturas de móveis e construções que demandam maior solidez.",
      specifications: {
        material: "Pinus Tratado",
        dimensoes: "3cm x 15cm x 3m",
        acabamento: "Aplainado",
        aplicacao: "Estruturas resistentes"
      }
    },
    {
      id: "tabua-5",
      name: "Tábua Pinus 3cm x 20cm",
      price: "R$ 19,50",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
      images: [
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png"
      ],
      description: "Combinação perfeita de espessura e largura para projetos robustos. Tábua de pinus 3cm x 20cm oferece excelente relação resistência x aplicabilidade para diversos tipos de construção.",
      specifications: {
        material: "Pinus Tratado",
        dimensoes: "3cm x 20cm x 3m",
        acabamento: "Aplainado",
        aplicacao: "Construção robusta"
      }
    },
    {
      id: "tabua-6",
      name: "Tábua Pinus 3cm x 25cm",
      price: "R$ 24,00",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
      images: [
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
        "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png"
      ],
      description: "Nossa tábua mais robusta de pinus, com 3cm de espessura e 25cm de largura. Ideal para projetos que exigem máxima resistência e estabilidade, como estruturas pesadas e móveis de grande porte.",
      specifications: {
        material: "Pinus Tratado",
        dimensoes: "3cm x 25cm x 3m",
        acabamento: "Aplainado",
        aplicacao: "Estruturas pesadas"
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
            <h1 className="text-3xl md:text-4xl font-bold">Tábua de Pinus</h1>
            <p className="text-lg mt-2">Secas em estufa, excelente acabamento e diversas dimensões</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tabuas.map((tabua) => (
              <Card key={tabua.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={tabua.image}
                    alt={tabua.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#2F5233] mb-2">
                    {tabua.name}
                  </h3>
                  
                  <p className="text-[#5D4037] mb-4 text-sm line-clamp-3">
                    {tabua.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#D4A574]">
                      {tabua.price}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={`/produto/tabua-pinus/${tabua.id}`}
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
                      onClick={() => handleWhatsApp(tabua.name, tabua.price)}
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

export default TabuaPinus;
