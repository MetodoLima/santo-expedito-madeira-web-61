import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Hammer, TreePine, Phone, Store, Layers, Truck, Star, Users, Award, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
export function Component() {
  const features = [{
    icon: TreePine,
    title: "Madeira Premium",
    desc: "Qualidade superior"
  }, {
    icon: Truck,
    title: "Entrega Rápida",
    desc: "Em toda região"
  }, {
    icon: Timer,
    title: "35 Anos",
    desc: "Experiência comprovada"
  }];
  const stats = [{
    label: "Produtos",
    value: "500+",
    icon: Layers
  }, {
    label: "Clientes",
    value: "5K+",
    icon: Users
  }, {
    label: "Entregas",
    value: "15K+",
    icon: Truck
  }, {
    label: "Experiência",
    value: "35+",
    icon: Star
  }];
  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de conhecer os produtos da Madeireira Santo Expedito e solicitar um orçamento.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-cover bg-center bg-no-repeat text-slate-800 overflow-hidden" style={{
    backgroundImage: 'url(/lovable-uploads/87ff56dd-d98a-4c37-8525-12f41841527c.png)'
  }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-red-200/20 to-rose-200/20 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 2
      }} />
        <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-200/20 to-red-200/20 rounded-full blur-3xl" animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear"
      }} />
      </div>


      {/* Hero Section */}
      <div className="relative pt-8 pb-12 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="lg:col-span-6 text-center lg:text-left mb-8 lg:mb-0">
              <motion.div initial={{
              opacity: 0,
              y: 60
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              ease: "easeOut"
            }}>
                <motion.div className="inline-flex items-center space-x-2 mb-6 lg:mb-8 bg-gradient-to-r from-green-50 to-red-50 border border-green-200/50 px-3 py-2 rounded-full" initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.2,
                duration: 0.5
              }} whileHover={{
                scale: 1.05
              }}>
                  <TreePine className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  <span className="text-xs sm:text-sm font-semibold text-green-800">Há mais de 35 anos</span>
                </motion.div>

                <motion.h1 initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.3,
                duration: 0.8
              }} className="font-poppins text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight text-slate-900">
                  <span className="block sm:inline">MADEIREIRA </span>
                  <span className="bg-gradient-to-r from-green-700 via-emerald-700 to-red-600 bg-clip-text text-transparent block sm:inline">
                    SANTO
                  </span>
                  <br className="hidden sm:block" />
                  <span className="block">EXPEDITO</span>
                </motion.h1>

                <motion.p className="font-inter text-base sm:text-lg lg:text-xl text-slate-500 font-light mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0" initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.4,
                duration: 0.8
              }}>
                  Tradição em vendas para consumidor final e revenda. Qualidade premium em madeiras, 
                  portas, compensados e materiais para construção.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 lg:mb-16 justify-center lg:justify-start px-4 sm:px-0" initial={{
                opacity: 0,
                y: 30
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.5,
                duration: 0.8
              }}>
                  <Button onClick={handleWhatsAppContact} className="bg-[#25D366] hover:bg-[#1DA851] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" size="default">
                    <Phone className="mr-2 w-4 h-4" />
                    <span className="hidden sm:inline">FALE NO WHATSAPP</span>
                    <span className="sm:hidden">WHATSAPP</span>
                  </Button>

                  <Button onClick={scrollToProducts} variant="outline" className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg" size="default">
                    <Store className="mr-2 w-4 h-4" />
                    <span className="hidden sm:inline">VER PRODUTOS</span>
                    <span className="sm:hidden">PRODUTOS</span>
                  </Button>
                </motion.div>

              </motion.div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <motion.div className="relative max-w-sm sm:max-w-lg mx-auto lg:max-w-none" initial={{
              opacity: 0,
              y: 50
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1,
              delay: 0.6,
              ease: "easeOut"
            }}>
                {/* Store Images Carousel */}
                <div className="relative">
                  <Carousel className="w-full rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                    <CarouselContent>
                      <CarouselItem>
                        <motion.img 
                          alt="Fachada da Madeireira Santo Expedito" 
                          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover" 
                          src="/lovable-uploads/cbd9433b-84fd-42a8-9f5c-b49ed94c8e1e.jpg"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          alt="Produtos da Madeireira Santo Expedito" 
                          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover" 
                          src="/lovable-uploads/0ef89d54-bf67-4b46-b670-771328335128.png"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          alt="Madeiras de qualidade" 
                          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover" 
                          src="/lovable-uploads/1342f4ea-9370-4ee1-aa65-8f27f022d86b.png"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  
                  {/* Trust indicator overlay */}
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-green-700 to-emerald-800 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold font-poppins">35+</div>
                      <div className="text-xs sm:text-sm font-medium">ANOS</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-green-600 to-emerald-700 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl" animate={{
                y: [0, -8, 0],
                rotate: [0, 3, 0]
              }} transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}>
                  <TreePine className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </motion.div>

                <motion.div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-red-600 to-rose-600 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl" animate={{
                y: [0, 8, 0],
                rotate: [0, -3, 0]
              }} transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1
              }}>
                  <Hammer className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section - Moved to bottom */}
        <motion.div className="mt-12 lg:mt-24" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6,
        duration: 0.8
      }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => <motion.div key={feature.title} className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-lg hover:shadow-2xl transition-all duration-300" initial={{
              opacity: 0,
              y: 20,
              scale: 0.95
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} transition={{
              delay: 0.7 + index * 0.1,
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }} whileHover={{
              scale: 1.05,
              y: -5,
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }} whileTap={{
              scale: 0.98
            }}>
                  <div className="flex-shrink-0 p-2 sm:p-2.5 bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg sm:rounded-xl shadow-md">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-poppins font-bold text-sm sm:text-base text-slate-900 mb-1">{feature.title}</h3>
                    <p className="font-inter text-xs sm:text-sm text-slate-500 font-light">{feature.desc}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      
    </div>;
}