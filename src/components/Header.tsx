
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleWhatsApp = () => {
    const message = "Olá! Vim através do site e gostaria de mais informações.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50" style={{ boxShadow: 'var(--nav-shadow)' }}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with Company Name */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/727b6482-199d-418b-ba24-fb9d811dc32f.png" 
            alt="Madeireira Santo Expedito" 
            className="h-10 md:h-12 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg md:text-xl font-bold text-primary tracking-tight">
              Madeireira Santo Expedito
            </h1>
            <p className="text-xs text-muted-foreground hidden md:block">
              Madeiras de Qualidade
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link 
            to="/" 
            className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base"
          >
            Home
          </Link>
          <div className="relative group">
            <button className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base">
              Produtos
            </button>
            <div className="absolute top-full left-0 mt-2 w-52 bg-background shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                <Link 
                  to="/portas" 
                  className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                >
                  Portas
                </Link>
                <Link 
                  to="/compensado" 
                  className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                >
                  Compensado
                </Link>
                <Link 
                  to="/tabua-pinus" 
                  className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                >
                  Tábua Pinus
                </Link>
                <Link 
                  to="/madeira-coberta" 
                  className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                >
                  Madeira Coberta
                </Link>
              </div>
            </div>
          </div>
          <Link 
            to="/sobre" 
            className="nav-link text-foreground hover:text-primary transition-colors font-medium text-base"
          >
            Sobre Nós
          </Link>
        </nav>

        {/* Desktop WhatsApp Button */}
        <Button 
          onClick={handleWhatsApp}
          className="hidden md:flex bg-whatsapp hover:bg-whatsapp-hover text-white items-center gap-2 px-6 py-2 shadow-md border border-whatsapp/20 hover:shadow-lg transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          Fale no WhatsApp
        </Button>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-3">
          <Button 
            onClick={handleWhatsApp}
            size="sm"
            className="bg-whatsapp hover:bg-whatsapp-hover text-white shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMenu}
            className="border-border shadow-sm"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-b shadow-lg transition-all duration-300 z-40 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <nav className="container mx-auto px-4 py-6 space-y-4">
          <Link 
            to="/" 
            className="block py-3 text-foreground hover:text-primary transition-colors font-medium text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <div className="border-l-2 border-primary pl-4 space-y-3">
            <div className="text-sm font-semibold text-primary">Produtos</div>
            <Link 
              to="/portas" 
              className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portas
            </Link>
            <Link 
              to="/compensado" 
              className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Compensado
            </Link>
            <Link 
              to="/tabua-pinus" 
              className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tábua Pinus
            </Link>
            <Link 
              to="/madeira-coberta" 
              className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Madeira Coberta
            </Link>
          </div>
          <Link 
            to="/sobre" 
            className="block py-3 text-foreground hover:text-primary transition-colors font-medium text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nós
          </Link>
        </nav>
      </div>
    </header>
  );
};
