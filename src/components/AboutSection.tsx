
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-fancy text-hotel-navy">
              Luxury Redefined
            </h2>
            
            <p className="text-hotel-charcoal/80 mb-6">
              Nestled in the heart of the city, Hotel Oasis offers an unparalleled blend of elegance, comfort, and world-class service. From the moment you step into our grand lobby, you'll be transported to a realm of sophistication and tranquility.
            </p>
            
            <p className="text-hotel-charcoal/80 mb-8">
              Our commitment to excellence is reflected in every detail – from the exquisite interior design to the personalized attention from our dedicated staff. Whether you're visiting for business or leisure, Hotel Oasis provides a sanctuary where luxury meets comfort.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="bg-hotel-cream h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-hotel-gold" />
                </div>
                <h4 className="font-semibold text-hotel-navy">5-Star Rating</h4>
              </div>
              
              <div className="text-center">
                <div className="bg-hotel-cream h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-hotel-gold" />
                </div>
                <h4 className="font-semibold text-hotel-navy">Expert Staff</h4>
              </div>
              
              <div className="text-center">
                <div className="bg-hotel-cream h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-6 w-6 text-hotel-gold" />
                </div>
                <h4 className="font-semibold text-hotel-navy">24/7 Service</h4>
              </div>
            </div>
            
            <Button className="bg-hotel-navy hover:bg-hotel-navy/90 rounded-full px-6">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Right Column - Image */}
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170" 
                alt="Luxury hotel interior" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <p className="text-hotel-navy font-semibold">
                  "Experience the perfect blend of luxury and comfort at Hotel Oasis."
                </p>
                <p className="text-sm text-hotel-charcoal/70 mt-2">
                  — Forbes Travel Review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
