import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Mail, ExternalLink } from "lucide-react";
const LocationMap = () => {
  return <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 heading-fancy text-hotel-navy">
            Find Us
          </h2>
          <p className="text-hotel-charcoal/80 max-w-2xl mx-auto">
            Conveniently located in the heart of the city, Hotel Oasis is easily accessible and close to major attractions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="h-[400px] bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <iframe title="Hotel Oasis Location" className="w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1998216053364!2d-73.9789611242344!3d40.759935635761865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1682097175616!5m2!1sen!2sus" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
          {/* Contact Information */}
          <div className="bg-hotel-cream rounded-lg shadow-md p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-hotel-navy">Contact Us</h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-hotel-gold mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hotel-navy">Address</h4>
                  <p className="text-hotel-charcoal">
                    1234 Luxury Avenue<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-hotel-gold mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hotel-navy">Phone</h4>
                  <p className="text-hotel-charcoal">
                    <a href="tel:+12125551234" className="hover:text-hotel-gold transition-colors">
                      +1 (212) 555-1234
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-hotel-gold mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hotel-navy">Email</h4>
                  <p className="text-hotel-charcoal">
                    <a href="mailto:info@hoteloasis.com" className="hover:text-hotel-gold transition-colors">
                      info@hoteloasis.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4 mx-0 py-[6px] px-[5px]">
              <Button className="w-full bg-hotel-navy hover:bg-hotel-navy/90 rounded-full mx-0 my-[12px]">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              
              <a href="https://maps.google.com/?q=Times+Square,+New+York,+NY" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-hotel-navy text-hotel-navy hover:bg-hotel-navy/10 rounded-full">
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LocationMap;