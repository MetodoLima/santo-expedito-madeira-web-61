import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Truck, Shield, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Product {
  id: string;
  name: string;
  description?: string;
  price: string;
  image: string;
}

const productData: { [key: string]: Product[] } = {
  portas: [
    {
      id: "porta-1",
      name: "Porta de Madeira Maciça",
      description: "Porta de madeira maciça de eucalipto, ideal para ambientes internos. Fabricada com madeira selecionada e acabamento natural que realça a beleza das fibras da madeira. Oferece excelente resistência e durabilidade.",
      price: "R$ 450,00",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
    },
    {
      id: "porta-2",
      name: "Porta de Entrada Colonial",
      description: "Porta de entrada em estilo colonial com design clássico e elegante. Fabricada em madeira nobre com detalhes entalhados que conferem sofisticação à fachada. Resistente às intempéries e tratada contra umidade.",
      price: "R$ 680,00",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
    },
    {
      id: "porta-3",
      name: "Porta Interna Lisa",
      description: "Porta interna lisa com acabamento impecável e design minimalista. Ideal para ambientes modernos que buscam linhas limpas e elegância discreta. Fabricada em MDF de alta densidade.",
      price: "R$ 320,00",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
    },
    {
      id: "porta-4",
      name: "Porta de Correr",
      description: "Porta de correr para economia de espaço, perfeita para ambientes compactos. Sistema de deslizamento suave e silencioso. Inclui trilho e ferragens de alta qualidade.",
      price: "R$ 520,00",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
    },
    {
      id: "porta-5",
      name: "Porta Almofadada",
      description: "Porta almofadada com design clássico e elegante. Os painéis em relevo conferem sofisticação e charme tradicional ao ambiente. Acabamento refinado e duradouro.",
      price: "R$ 580,00",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
    },
    {
      id: "porta-6",
      name: "Porta com Vidro",
      description: "Porta com vidro temperado para maior luminosidade e integração entre ambientes. Design moderno que combina funcionalidade e estética. Vidro de segurança incluso.",
      price: "R$ 420,00",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
    },
  ],
  compensado: [
    {
      id: "compensado-1",
      name: "Compensado Naval 10mm",
      description: "Compensado naval 10mm de alta qualidade, resistente à umidade e ideal para uso em ambientes úmidos. Fabricado com lâminas de madeira selecionada e cola fenólica à prova d'água.",
      price: "R$ 85,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
    },
    {
      id: "compensado-2",
      name: "Compensado Naval 12mm",
      description: "Compensado naval 12mm com excelente resistência estrutural e durabilidade. Ideal para aplicações que exigem maior resistência mecânica, como pisos de embarcações e móveis pesados.",
      price: "R$ 105,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
    },
    {
      id: "compensado-3",
      name: "Compensado Naval 15mm",
      description: "Compensado naval 15mm para aplicações estruturais robustas. Oferece excelente estabilidade dimensional e resistência superior. Ideal para construção civil e marcenaria especializada.",
      price: "R$ 125,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
    },
    {
      id: "compensado-4",
      name: "Compensado Naval 18mm",
      description: "Compensado naval 18mm, nossa opção mais robusta para aplicações que demandam máxima resistência. Perfeito para estruturas pesadas, formas de concreto e projetos industriais.",
      price: "R$ 145,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
    },
    {
      id: "compensado-5",
      name: "Compensado Resinado 15mm",
      description: "Compensado resinado 15mm com excelente qualidade e custo-benefício. Tratado com resina fenólica que garante resistência à umidade e durabilidade. Ideal para móveis e divisórias internas.",
      price: "R$ 95,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
    },
    {
      id: "compensado-6",
      name: "Compensado Resinado 18mm",
      description: "Compensado resinado 18mm para aplicações que exigem maior resistência estrutural. Acabamento resinado proporciona superfície lisa e uniforme, facilitando aplicação de tintas e vernizes.",
      price: "R$ 115,00",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
    },
  ],
  "tabua-pinus": [
    {
      id: "tabua-1",
      name: "Tábua Pinus 2,5cm x 15cm",
      description: "Tábua de pinus tratado e seco em estufa com dimensões 2,5cm x 15cm. Material de alta qualidade, ideal para construção civil, marcenaria e projetos de acabamento. Oferece excelente resistência e durabilidade.",
      price: "R$ 12,50",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
    },
    {
      id: "tabua-2",
      name: "Tábua Pinus 2,5cm x 20cm",
      description: "Tábua de pinus 2,5cm x 20cm, perfeita para projetos que exigem maior largura. Seca em estufa para garantir estabilidade dimensional e evitar rachaduras. Ideal para prateleiras e estruturas.",
      price: "R$ 16,50",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
    },
    {
      id: "tabua-3",
      name: "Tábua Pinus 2,5cm x 25cm",
      description: "Tábua de pinus de maior largura (25cm), ideal para tampos de mesa, bancadas e projetos que necessitam de peças mais largas. Excelente qualidade e acabamento liso.",
      price: "R$ 20,50",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
    },
    {
      id: "tabua-4",
      name: "Tábua Pinus 3cm x 15cm",
      description: "Tábua de pinus com espessura maior (3cm) para aplicações que necessitam de mais resistência estrutural. Ideal para estruturas de móveis e construções que demandam maior solidez.",
      price: "R$ 15,00",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
    },
    {
      id: "tabua-5",
      name: "Tábua Pinus 3cm x 20cm",
      description: "Combinação perfeita de espessura e largura para projetos robustos. Tábua de pinus 3cm x 20cm oferece excelente relação resistência x aplicabilidade para diversos tipos de construção.",
      price: "R$ 19,50",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
    },
    {
      id: "tabua-6",
      name: "Tábua Pinus 3cm x 25cm",
      description: "Nossa tábua mais robusta de pinus, com 3cm de espessura e 25cm de largura. Ideal para projetos que exigem máxima resistência e estabilidade, como estruturas pesadas e móveis de grande porte.",
      price: "R$ 24,00",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
    },
  ],
  "madeira-coberta": [
    {
      id: "madeira-1",
      name: "Caibros 5x7cm",
      description: "Caibros de madeira tratada 5x7cm para estrutura de telhado. Peças fundamentais para o madeiramento, proporcionando sustentação adequada para telhas. Tratamento contra cupins e umidade.",
      price: "R$ 18,50",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
    },
    {
      id: "madeira-2",
      name: "Ripas 2x5cm",
      description: "Ripas 2x5cm para acabamento e fixação de telhas. Essenciais para completar a estrutura do telhado, garantindo o alinhamento perfeito das telhas e facilitando a instalação.",
      price: "R$ 8,50",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
    },
    {
      id: "madeira-3",
      name: "Vigas 6x12cm",
      description: "Vigas estruturais 6x12cm para suporte de grandes cargas. Ideais para construções que exigem máxima resistência estrutural, como galpões, casas de grande porte e estruturas industriais.",
      price: "R$ 45,00",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
    },
    {
      id: "madeira-4",
      name: "Barrotes 5x10cm",
      description: "Barrotes 5x10cm para estruturas intermediárias. Versáteis e resistentes, são utilizados em diversas aplicações na construção civil, desde estruturas de piso até elementos de suporte.",
      price: "R$ 28,00",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
    },
    {
      id: "madeira-5",
      name: "Terças 5x15cm",
      description: "Terças 5x15cm, elementos fundamentais na estrutura do telhado. Responsáveis por distribuir o peso das telhas para os demais elementos estruturais, garantindo estabilidade e segurança.",
      price: "R$ 38,50",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
    },
    {
      id: "madeira-6",
      name: "Pontaletes 7x7cm",
      description: "Pontaletes estruturais 7x7cm para suporte vertical. Utilizados como pilares de sustentação em construções, oferecendo excelente resistência à compressão e estabilidade estrutural.",
      price: "R$ 22,00",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
    },
  ],
};

const ProductDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  if (!category || !id) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Categoria ou ID do produto não especificados
          </h2>
          <Button onClick={() => navigate("/")}>Voltar para a página inicial</Button>
        </div>
      </div>
    );
  }

  const product = productData[category]?.find((p) => p.id === id);

  const relatedProducts =
    productData[category]?.filter((p) => p.id !== id) || [];

  const handleWhatsAppContact = () => {
    const message = `Olá! Tenho interesse no produto: ${product.name}. Gostaria de mais informações e orçamento.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
          <Button onClick={handleBack}>Voltar</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F0]">
      <Header />
      
      {/* Green top section */}
      <div className="bg-[#2F5233] pt-20 pb-8">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="flex items-center gap-2 text-white hover:text-[#D4A574] hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                  <img
                    src={product.image}
                    alt={`${product.name} - ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(48 avaliações)</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {product.price}
              </div>
              <div className="text-sm text-gray-600">
                À vista no PIX ou dinheiro
              </div>
              <div className="text-sm text-green-600 font-medium">
                ✓ Frete grátis para pedidos acima de R$ 500
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleWhatsAppContact}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                SOLICITAR ORÇAMENTO VIA WHATSAPP
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="py-3">
                  <Truck className="w-4 h-4 mr-2" />
                  Calcular Frete
                </Button>
                <Button variant="outline" className="py-3">
                  <Shield className="w-4 h-4 mr-2" />
                  Garantia
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Principais características:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Alta qualidade e durabilidade
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Acabamento profissional
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Ideal para construção civil
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Entrega rápida na região
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Descrição do Produto</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description || "Produto de alta qualidade da Madeireira Santo Expedito, ideal para suas necessidades de construção e marcenaria. Fabricado com materiais selecionados e acabamento profissional."}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nossa empresa possui mais de 35 anos de tradição no mercado, oferecendo sempre produtos de qualidade superior com preços competitivos. Atendemos desde o consumidor final até grandes construtoras.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Especificações Técnicas</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <table className="w-full text-sm">
                <tbody className="space-y-2">
                  <tr>
                    <td className="font-medium py-2">Categoria:</td>
                    <td className="py-2 capitalize">{category}</td>
                  </tr>
                  <tr>
                    <td className="font-medium py-2">Material:</td>
                    <td className="py-2">Madeira de Pinus</td>
                  </tr>
                  <tr>
                    <td className="font-medium py-2">Acabamento:</td>
                    <td className="py-2">Natural</td>
                  </tr>
                  <tr>
                    <td className="font-medium py-2">Aplicação:</td>
                    <td className="py-2">Construção Civil e Marcenaria</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2 text-sm">{relatedProduct.name}</h3>
                  <div className="text-lg font-bold text-green-600 mb-3">
                    {relatedProduct.price}
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => navigate(`/produto/${category}/${relatedProduct.id}`)}
                  >
                    Ver Produto
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
