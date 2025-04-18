
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-hotel-navy text-white overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070')", 
          filter: "brightness(0.6)" 
        }}
      />
      
      {/* Hero Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center md:max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow animate-fade-in heading-fancy">
          Experience <span className="text-hotel-gold">Luxury</span> Like Never Before
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-shadow animate-fade-in opacity-90">
          Indulge in our world-class amenities, exquisite dining, and unparalleled service at Hotel Oasis — where every stay becomes an unforgettable memory.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <a href="#contact">
            <Button className="bg-hotel-gold hover:bg-hotel-gold/90 text-hotel-charcoal rounded-full px-8 py-6 text-lg font-medium">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#rooms">
            <Button variant="outline" className="border-white text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg font-medium">
              Explore Rooms
            </Button>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm text-white/80 mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
