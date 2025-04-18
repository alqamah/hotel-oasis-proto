
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const rooms = [
  {
    name: "Deluxe Room",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1170",
    price: "$250",
    description: "Spacious room with king-sized bed and city views.",
    features: ["King-sized bed", "42\" Smart TV", "Air conditioning", "Free WiFi", "Mini bar"]
  },
  {
    name: "Executive Suite",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1074",
    price: "$450",
    description: "Elegantly furnished suite with separate living area.",
    features: ["King-sized bed", "Separate living room", "Premium amenities", "Complimentary breakfast", "City view"]
  },
  {
    name: "Presidential Suite",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170",
    price: "$750",
    description: "Our most luxurious suite with panoramic city views.",
    features: ["King-sized bed", "Jacuzzi", "Private terrace", "Butler service", "Premium bar"]
  }
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 heading-fancy text-hotel-navy">
            Luxurious Accommodations
          </h2>
          <p className="text-hotel-charcoal/80 max-w-2xl mx-auto">
            Choose from our selection of elegantly appointed rooms and suites designed for your comfort.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-fade-in"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-hotel-gold text-hotel-charcoal font-semibold py-1 px-4 rounded-full">
                  {room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-hotel-navy">
                  {room.name}
                </h3>
                <p className="text-hotel-charcoal/70 mb-4">
                  {room.description}
                </p>
                
                <ul className="mb-6 space-y-2">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-hotel-gold" />
                      <span className="text-sm text-hotel-charcoal/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-hotel-navy hover:bg-hotel-navy/90 rounded-full">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
