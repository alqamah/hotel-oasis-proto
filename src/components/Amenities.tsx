
import { Wifi, Coffee, Dumbbell, Utensils, Sparkles, Waves, Car, Droplets } from "lucide-react";

const amenities = [
  {
    icon: <Wifi className="h-6 w-6 text-hotel-gold group-hover:text-white transition-colors" />,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet access throughout the property."
  },
  {
    icon: <Coffee className="h-6 w-6 text-hotel-gold group-hover:text-white transition-colors" />,
    title: "24/7 Room Service",
    description: "Enjoy gourmet meals and refreshments in the comfort of your room."
  },
  {
    icon: <Dumbbell className="h-6 w-6 text-hotel-gold group-hover:text-white transition-colors" />,
    title: "Fitness Center",
    description: "State-of-the-art equipment with personal trainers available."
  },
  {
    icon: <Utensils className="h-6 w-6 text-hotel-gold group-hover:text-white transition-colors" />,
    title: "Fine Dining",
    description: "Award-winning restaurants offering international and local cuisine."
  },
  {
    icon: <Droplets className="h-6 w-6 text-hotel-gold group-hover:text-white transition-colors" />,
    title: "Swimming Pool",
    description: "Rooftop infinity pool with panoramic city views."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-hotel-gold group-hover:text-white transition-colors" />,
    title: "Spa & Wellness",
    description: "Rejuvenating treatments and therapies for ultimate relaxation."
  },
  {
    icon: <Waves className="h-6 w-6 text-hotel-gold group-hover:text-white transition-colors" />,
    title: "Concierge Service",
    description: "24/7 concierge to assist with all your needs and arrangements."
  },
  {
    icon: <Car className="h-6 w-6 text-hotel-gold group-hover:text-white transition-colors" />,
    title: "Valet Parking",
    description: "Convenient valet parking service for all hotel guests."
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-hotel-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 heading-fancy text-hotel-navy">
            World-Class Amenities
          </h2>
          <p className="text-hotel-charcoal/80 max-w-2xl mx-auto">
            Indulge in our exceptional range of facilities and services designed to enhance your stay.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group hover:bg-hotel-navy hover:text-white"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-hotel-cream h-16 w-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-hotel-navy group-hover:text-white transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-hotel-charcoal/70 group-hover:text-white/80 transition-colors">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
