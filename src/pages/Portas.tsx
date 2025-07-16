
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Portas = () => {
  const portas = [
    {
      id: "porta-1",
      name: "Porta de Madeira Maciça",
      price: "R$ 450,00",
      originalPrice: "R$ 580,00",
      discount: "22% OFF",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
      images: [
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png"
      ],
      description: "Porta de madeira maciça de eucalipto, ideal para ambientes internos. Fabricada com madeira selecionada e acabamento natural que realça a beleza das fibras da madeira. Oferece excelente resistência e durabilidade.",
      specifications: {
        material: "Madeira Maciça de Eucalipto",
        dimensoes: "210cm x 80cm x 3,5cm",
        acabamento: "Natural com verniz",
        aplicacao: "Ambientes internos"
      }
    },
    {
      id: "porta-2",
      name: "Porta de Entrada Colonial",  
      price: "R$ 680,00",
      originalPrice: "R$ 850,00",
      discount: "20% OFF",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
      images: [
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png"
      ],
      description: "Porta de entrada em estilo colonial com design clássico e elegante. Fabricada em madeira nobre com detalhes entalhados que conferem sofisticação à fachada. Resistente às intempéries e tratada contra umidade.",
      specifications: {
        material: "Madeira Nobre Tratada",
        dimensoes: "210cm x 90cm x 4,5cm",
        acabamento: "Verniz para externo",
        aplicacao: "Entrada principal"
      }
    },
    {
      id: "porta-3",
      name: "Porta Interna Lisa",
      price: "R$ 320,00", 
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
      images: [
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png"
      ],
      description: "Porta interna lisa com acabamento impecável e design minimalista. Ideal para ambientes modernos que buscam linhas limpas e elegância discreta. Fabricada em MDF de alta densidade.",
      specifications: {
        material: "MDF de Alta Densidade",
        dimensoes: "210cm x 70cm x 3cm",
        acabamento: "Primer branco",
        aplicacao: "Ambientes internos"
      }
    },
    {
      id: "porta-4",
      name: "Porta de Correr",
      price: "R$ 520,00",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
      images: [
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png"
      ],
      description: "Porta de correr para economia de espaço, perfeita para ambientes compactos. Sistema de deslizamento suave e silencioso. Inclui trilho e ferragens de alta qualidade.",
      specifications: {
        material: "Madeira de Pinus",
        dimensoes: "210cm x 80cm x 3,5cm",
        acabamento: "Verniz natural",
        aplicacao: "Ambientes internos"
      }
    },
    {
      id: "porta-5",
      name: "Porta Almofadada",
      price: "R$ 580,00",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
      images: [
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png"
      ],
      description: "Porta almofadada com design clássico e elegante. Os painéis em relevo conferem sofisticação e charme tradicional ao ambiente. Acabamento refinado e duradouro.",
      specifications: {
        material: "Madeira Maciça",
        dimensoes: "210cm x 80cm x 4cm",
        acabamento: "Verniz escuro",
        aplicacao: "Ambientes internos"
      }
    },
    {
      id: "porta-6",
      name: "Porta com Vidro",
      price: "R$ 420,00",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
      images: [
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
        "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png"
      ],
      description: "Porta com vidro temperado para maior luminosidade e integração entre ambientes. Design moderno que combina funcionalidade e estética. Vidro de segurança incluso.",
      specifications: {
        material: "Madeira e Vidro Temperado",
        dimensoes: "210cm x 80cm x 3,5cm",
        acabamento: "Verniz natural",
        aplicacao: "Ambientes internos"
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
            <h1 className="text-3xl md:text-4xl font-bold">Portas</h1>
            <p className="text-lg mt-2">Conheça nossa linha completa de portas de alta qualidade</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portas.map((porta) => (
              <Card key={porta.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={porta.image}
                    alt={porta.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {porta.discount && (
                    <div className="absolute top-4 left-4 bg-[#E67E22] text-white px-3 py-1 rounded-full font-bold text-sm">
                      {porta.discount}
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#2F5233] mb-2">
                    {porta.name}
                  </h3>
                  
                  <p className="text-[#5D4037] mb-4 text-sm line-clamp-3">
                    {porta.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#D4A574]">
                        {porta.price}
                      </span>
                      {porta.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {porta.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={`/produto/portas/${porta.id}`}
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
                      onClick={() => handleWhatsApp(porta.name, porta.price)}
                      className="flex-1 bg-[#2F5233] hover:bg-[#D4A574] text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Comprar
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

export default Portas;
