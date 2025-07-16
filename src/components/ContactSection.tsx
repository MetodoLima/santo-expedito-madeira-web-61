
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de solicitar um orçamento.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+5511999999999', '_self');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F6F0] to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5233] mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-[#5D4037] max-w-2xl mx-auto">
            Estamos prontos para atender você e realizar seu projeto
          </p>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-[#25D366] p-3 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2F5233]">WhatsApp</h3>
                  <p className="text-[#5D4037]">Atendimento rápido</p>
                </div>
              </div>
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-lg"
              >
                Chamar no WhatsApp
              </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-[#34495E] p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2F5233]">Telefone</h3>
                  <p className="text-[#5D4037]">Ligue agora</p>
                </div>
              </div>
              <Button 
                onClick={handleCall}
                variant="outline"
                className="w-full border-[#34495E] text-[#34495E] hover:bg-[#34495E] hover:text-white font-semibold rounded-lg"
              >
                (11) 99999-9999
              </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-[#2F5233] p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2F5233] mb-2">Endereço</h3>
                  <p className="text-[#5D4037]">
                    Rua das Madeiras, 123<br />
                    Centro - São Paulo/SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-[#F1C40F] p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-[#2F5233]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2F5233] mb-2">Horário</h3>
                  <p className="text-[#5D4037]">
                    Segunda a Sexta: 07:00 às 18:00<br />
                    Sábado: 07:00 às 12:00<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-[#2F5233] to-[#1A2F1D] rounded-3xl p-8 text-center shadow-2xl">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-[#2F5233]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Solicite seu Orçamento
              </h3>
              <p className="text-[#D4A574] mb-6">
                Receba uma proposta personalizada
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white font-bold py-4 rounded-xl transition-all duration-300"
                size="lg"
              >
                ORÇAMENTO VIA WHATSAPP
              </Button>
              
              <Button
                onClick={handleCall}
                variant="outline"
                className="w-full border-2 border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-[#2F5233] font-bold py-4 rounded-xl transition-all duration-300"
                size="lg"
              >
                LIGAR AGORA
              </Button>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D4A574]/30">
              <p className="text-[#D4A574] text-sm">
                ⭐ Resposta em até 2 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
