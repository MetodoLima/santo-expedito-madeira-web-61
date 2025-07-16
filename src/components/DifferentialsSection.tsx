
import { Button } from "./ui/button";

export const DifferentialsSection = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de conhecer mais sobre a Madeireira Santo Expedito.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-[#F8F6F0]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda - Conteúdo Textual */}
          <div className="space-y-6">
            <div className="text-[#D4A574] text-sm font-medium tracking-wider uppercase">
              O MELHOR PARA VOCÊ
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233] leading-tight">
              Conheça mais sobre nós
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Estamos sempre pensando no bem-estar e na satisfação de nossos clientes. 
              Por isso prezamos a qualidade, atendimento e o melhor preço.
            </p>
            
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-[#2F5233] hover:bg-[#1A2F1D] text-white px-8 py-3 text-base font-semibold rounded-lg transition-colors duration-300"
            >
              FALE CONOSCO AGORA MESMO
            </Button>
          </div>

          {/* Coluna Direita - Imagem com Placa Institucional */}
          <div className="relative">
            {/* Fundo de madeira simulado */}
            <div className="relative bg-gradient-to-br from-amber-800 to-amber-900 rounded-2xl p-8 shadow-2xl transform rotate-1">
              <div className="bg-gradient-to-br from-amber-700 to-amber-800 rounded-xl p-6 shadow-inner">
                {/* Logo/Nome da empresa no centro */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    MADEIREIRA
                  </h3>
                  <h2 className="text-3xl font-bold text-[#F1C40F] mb-4">
                    SANTO EXPEDITO
                  </h2>
                  <div className="w-16 h-1 bg-[#F1C40F] mx-auto rounded-full"></div>
                </div>

                {/* Itens institucionais */}
                <div className="space-y-4">
                  <div className="bg-[#2F5233]/20 backdrop-blur-sm rounded-lg p-3 border-l-4 border-[#F1C40F]">
                    <p className="text-white font-semibold">Conforto</p>
                  </div>
                  
                  <div className="bg-[#2F5233]/20 backdrop-blur-sm rounded-lg p-3 border-l-4 border-[#F1C40F]">
                    <p className="text-white font-semibold">Os melhores produtos</p>
                  </div>
                  
                  <div className="bg-[#2F5233]/20 backdrop-blur-sm rounded-lg p-3 border-l-4 border-[#F1C40F]">
                    <p className="text-white font-semibold">Melhor atendimento</p>
                  </div>
                  
                  <div className="bg-[#2F5233]/20 backdrop-blur-sm rounded-lg p-3 border-l-4 border-[#F1C40F]">
                    <p className="text-white font-semibold">Os melhores preços</p>
                  </div>
                </div>

                {/* Detalhes decorativos de madeira */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-amber-600 rounded-full shadow-inner"></div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-amber-600 rounded-full shadow-inner"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-amber-600 rounded-full shadow-inner"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-amber-600 rounded-full shadow-inner"></div>
              </div>
            </div>

            {/* Sombra decorativa */}
            <div className="absolute inset-0 bg-[#2F5233]/10 rounded-2xl transform rotate-2 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
