
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const MadeiraCoberta = () => {
  const madeiras = [
    {
      id: "madeira-1",
      name: "Caibros 5x7cm",
      price: "R$ 18,50",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
      images: [
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png"
      ],
      description: "Caibros de madeira tratada 5x7cm para estrutura de telhado. Peças fundamentais para o madeiramento, proporcionando sustentação adequada para telhas. Tratamento contra cupins e umidade.",
      specifications: {
        material: "Eucalipto Tratado",
        dimensoes: "5cm x 7cm x 3m",
        acabamento: "Tratado autoclave",
        aplicacao: "Estrutura de telhado"
      }
    },
    {
      id: "madeira-2",
      name: "Ripas 2x5cm",
      price: "R$ 8,50",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
      images: [
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png"
      ],
      description: "Ripas 2x5cm para acabamento e fixação de telhas. Essenciais para completar a estrutura do telhado, garantindo o alinhamento perfeito das telhas e facilitando a instalação.",
      specifications: {
        material: "Eucalipto Tratado",
        dimensoes: "2cm x 5cm x 3m",
        acabamento: "Tratado autoclave",
        aplicacao: "Acabamento de telhado"
      }
    },
    {
      id: "madeira-3",
      name: "Vigas 6x12cm",
      price: "R$ 45,00",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
      images: [
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png"
      ],
      description: "Vigas estruturais 6x12cm para suporte de grandes cargas. Ideais para construções que exigem máxima resistência estrutural, como galpões, casas de grande porte e estruturas industriais.",
      specifications: {
        material: "Eucalipto Tratado",
        dimensoes: "6cm x 12cm x 4m",
        acabamento: "Tratado autoclave",
        aplicacao: "Estruturas pesadas"
      }
    },
    {
      id: "madeira-4",
      name: "Barrotes 5x10cm",
      price: "R$ 28,00",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
      images: [
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png"
      ],
      description: "Barrotes 5x10cm para estruturas intermediárias. Versáteis e resistentes, são utilizados em diversas aplicações na construção civil, desde estruturas de piso até elementos de suporte.",
      specifications: {
        material: "Eucalipto Tratado",
        dimensoes: "5cm x 10cm x 3m",
        acabamento: "Tratado autoclave",
        aplicacao: "Estruturas intermediárias"
      }
    },
    {
      id: "madeira-5",
      name: "Terças 5x15cm",
      price: "R$ 38,50",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
      images: [
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png"
      ],
      description: "Terças 5x15cm, elementos fundamentais na estrutura do telhado. Responsáveis por distribuir o peso das telhas para os demais elementos estruturais, garantindo estabilidade e segurança.",
      specifications: {
        material: "Eucalipto Tratado",
        dimensoes: "5cm x 15cm x 4m",
        acabamento: "Tratado autoclave",
        aplicacao: "Estrutura principal do telhado"
      }
    },
    {
      id: "madeira-6",
      name: "Pontaletes 7x7cm",
      price: "R$ 22,00",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
      images: [
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
        "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png"
      ],
      description: "Pontaletes estruturais 7x7cm para suporte vertical. Utilizados como pilares de sustentação em construções, oferecendo excelente resistência à compressão e estabilidade estrutural.",
      specifications: {
        material: "Eucalipto Tratado",
        dimensoes: "7cm x 7cm x 3m",
        acabamento: "Tratado autoclave",
        aplicacao: "Pilares e suportes verticais"
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
            <h1 className="text-3xl md:text-4xl font-bold">Madeira de Coberta</h1>
            <p className="text-lg mt-2">Estruturas completas para telhados e cobertas tratadas</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {madeiras.map((madeira) => (
              <Card key={madeira.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={madeira.image}
                    alt={madeira.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#2F5233] mb-2">
                    {madeira.name}
                  </h3>
                  
                  <p className="text-[#5D4037] mb-4 text-sm line-clamp-3">
                    {madeira.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#D4A574]">
                      {madeira.price}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={`/produto/madeira-coberta/${madeira.id}`}
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
                      onClick={() => handleWhatsApp(madeira.name, madeira.price)}
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

export default MadeiraCoberta;
