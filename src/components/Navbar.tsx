
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? "text-hotel-navy" : "text-white text-shadow"}`}>
              HOTEL OASIS
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`font-medium hover:text-hotel-gold transition-colors ${isScrolled ? "text-hotel-charcoal" : "text-white text-shadow"}`}>
              About
            </a>
            <a href="#rooms" className={`font-medium hover:text-hotel-gold transition-colors ${isScrolled ? "text-hotel-charcoal" : "text-white text-shadow"}`}>
              Rooms
            </a>
            <a href="#amenities" className={`font-medium hover:text-hotel-gold transition-colors ${isScrolled ? "text-hotel-charcoal" : "text-white text-shadow"}`}>
              Amenities
            </a>
            <a href="#gallery" className={`font-medium hover:text-hotel-gold transition-colors ${isScrolled ? "text-hotel-charcoal" : "text-white text-shadow"}`}>
              Gallery
            </a>
            <a href="#testimonials" className={`font-medium hover:text-hotel-gold transition-colors ${isScrolled ? "text-hotel-charcoal" : "text-white text-shadow"}`}>
              Testimonials
            </a>
            <a href="#contact" className="ml-4">
              <Button variant="outline" size="sm" className={`rounded-full font-medium ${
                isScrolled 
                  ? "bg-hotel-navy text-white hover:bg-hotel-navy/90 border-hotel-navy" 
                  : "bg-transparent text-white border-white hover:bg-white/20"
              }`}>
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-hotel-navy" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-hotel-navy" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="py-2 text-hotel-charcoal hover:text-hotel-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#rooms" 
                className="py-2 text-hotel-charcoal hover:text-hotel-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rooms
              </a>
              <a 
                href="#amenities" 
                className="py-2 text-hotel-charcoal hover:text-hotel-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Amenities
              </a>
              <a 
                href="#gallery" 
                className="py-2 text-hotel-charcoal hover:text-hotel-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#testimonials" 
                className="py-2 text-hotel-charcoal hover:text-hotel-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="py-2 text-hotel-charcoal hover:text-hotel-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
