
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Grid3X3, ArrowUpRight, Lock, Wrench, PaintBucket, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const ProductCards = () => {
  const products = [
    {
      id: 1,
      title: "Portas",
      description: "Temos portas de diversos estilos, tamanhos e formatos. Conheça todos os modelos, ideais para ambientes internos e externos, que se encaixam no seu projeto.",
      image: "/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png",
      bgColor: "bg-white",
      link: "/portas"
    },
    {
      id: 2,
      title: "Compensado",
      description: "Dispomos de diversos tipos de compensado (resinado, naval, etc.), nas medidas de 10mm, 12mm, 15mm e 18mm, com tamanhos de 220cm x 160cm.",
      image: "/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png",
      bgColor: "bg-[#F8F6F0]",
      link: "/compensado"
    },
    {
      id: 3,
      title: "Tábua de Pinus",
      description: "Oferecemos tábuas de pinus de diferentes espessuras e comprimentos, secas em estufa, com excelente acabamento para obras e reformas na Região Metropolitana.",
      image: "/lovable-uploads/63b60df8-b392-415d-9f69-8a19e9b0fa39.png",
      bgColor: "bg-[#F8F6F0]",
      link: "/tabua-pinus"
    },
    {
      id: 4,
      title: "Madeira de Coberta",
      description: "Temos diversas linhas de madeira para cobertas: caibros, ripas, vigas, barrotes, em diversas seções. Ideal para estrutura de telhado ou acabamento final.",
      image: "/lovable-uploads/ee11f0a6-8b8c-4bd1-8028-c85ac5ecef90.png",
      bgColor: "bg-white",
      link: "/madeira-coberta"
    }
  ];

  const categories = [
    { name: "Barrotes", icon: Grid3X3 },
    { name: "Janelas", icon: ArrowUpRight },
    { name: "Fechaduras", icon: Lock },
    { name: "Ferragens", icon: Wrench },
    { name: "Tintas", icon: PaintBucket },
    { name: "Portões", icon: Shield }
  ];

  const handleWhatsApp = (productName: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${productName}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F5233] mb-4">
            Catálogo de Produtos
          </h2>
          <p className="text-lg sm:text-xl text-[#5D4037] max-w-2xl mx-auto px-4 sm:px-0">
            Conheça nossa linha completa de produtos em madeira de alta qualidade
          </p>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Products Grid - 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {products.map((product) => (
            <Card 
              key={product.id}
              className={`group overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${product.bgColor} border-0 h-full`}
            >
              <div className="flex flex-col lg:flex-row h-full min-h-[400px] lg:min-h-[300px]">
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 sm:h-56 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Section */}
                <CardContent className="lg:w-1/2 p-4 sm:p-6 flex flex-col justify-between h-full">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2F5233] mb-3">
                      {product.title}
                    </h3>
                    
                    <p className="text-[#5D4037] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1">
                      {product.description}
                    </p>
                  </div>
                  
                  <Link to={product.link} className="mt-auto">
                    <Button className="w-full bg-[#2F5233] hover:bg-[#D4A574] text-white font-semibold rounded-lg transition-all duration-300 py-2.5">
                      Ver Produtos
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Categories Icons Section */}
        <div className="border-t border-gray-200 pt-8 sm:pt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#2F5233] text-center mb-6 sm:mb-8 px-4">
            Outras Categorias
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="flex flex-col items-center group cursor-pointer"
                onClick={() => handleWhatsApp(category.name)}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#2F5233] flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-[#2F5233] group-hover:text-white transition-all duration-300">
                  <category.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="text-[#5D4037] text-xs sm:text-sm font-medium text-center px-1">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-[#F8F6F0] rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2F5233] mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-sm sm:text-base text-[#5D4037] mb-6">
              Entre em contato conosco! Temos soluções personalizadas para seu projeto.
            </p>
            <Button
              onClick={() => handleWhatsApp("informações sobre produtos personalizados")}
              className="bg-[#E67E22] hover:bg-[#D35400] text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold rounded-lg sm:rounded-xl transition-all duration-300"
            >
              FALAR COM ESPECIALISTA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
