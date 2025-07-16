
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle, Mail, Instagram } from "lucide-react";

export const Footer = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de solicitar um orçamento.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+5511999999999', '_self');
  };

  return (
    <footer className="bg-[#2F5233] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#F1C40F] mb-4">
              MADEIREIRA<br />SANTO EXPEDITO
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há anos oferecendo os melhores produtos em madeira com qualidade, 
              atendimento diferenciado e os melhores preços da região.
            </p>
            <div className="flex space-x-4">
              <Button
                onClick={handleWhatsApp}
                size="sm"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                size="sm"
                className="border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-[#2F5233]"
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligar
              </Button>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-[#D4A574] mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D4A574]" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="text-gray-300">WhatsApp disponível</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4A574]" />
                <span className="text-gray-300">contato@santoexpedito.com</span>
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="text-lg font-semibold text-[#D4A574] mb-4">Localização</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#D4A574] mt-1" />
              <div className="text-gray-300">
                <p>Rua das Madeiras, 123</p>
                <p>Centro - São Paulo/SP</p>
                <p>CEP: 01234-567</p>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h4 className="text-lg font-semibold text-[#D4A574] mb-4">Funcionamento</h4>
            <div className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-[#D4A574] mt-1" />
              <div className="text-gray-300 space-y-1">
                <p>Segunda a Sexta:</p>
                <p className="text-sm">07:00 às 18:00</p>
                <p>Sábado:</p>
                <p className="text-sm">07:00 às 12:00</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-[#D4A574]/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Madeireira Santo Expedito. Todos os direitos reservados.
            </p>
            <p className="text-[#D4A574] text-sm text-center md:text-right">
              ⭐ Qualidade e tradição em madeiras
            </p>
          </div>
          
          {/* Desenvolvido por */}
          <div className="flex flex-col items-center mt-8 space-y-2">
            <p className="text-gray-400 text-sm">
              Site desenvolvido por Noxus IA
            </p>
            <a 
              href="https://instagram.com/noxusia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-[#D4A574] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm">@noxusia</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
