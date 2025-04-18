
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hotel-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Logo and Brief */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 heading-fancy">HOTEL OASIS</h2>
            <p className="text-white/80 mb-4">
              Experience luxury like never before. Hotel Oasis provides world-class accommodations and services.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/70 hover:text-hotel-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-hotel-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-hotel-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-hotel-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-hotel-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#rooms" className="text-white/70 hover:text-hotel-gold transition-colors">Rooms & Suites</a>
              </li>
              <li>
                <a href="#amenities" className="text-white/70 hover:text-hotel-gold transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-hotel-gold transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-hotel-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-hotel-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-hotel-gold mr-2">Location:</span>
                <span className="text-white/70">1234 Luxury Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-start">
                <span className="text-hotel-gold mr-2">Phone:</span>
                <a href="tel:+12125551234" className="text-white/70 hover:text-hotel-gold transition-colors">
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-hotel-gold mr-2">Email:</span>
                <a href="mailto:info@hoteloasis.com" className="text-white/70 hover:text-hotel-gold transition-colors">
                  info@hoteloasis.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">Subscribe to receive special offers and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md focus:outline-none text-gray-800 w-full"
              />
              <button className="bg-hotel-gold hover:bg-hotel-gold/90 text-hotel-charcoal px-4 py-2 rounded-r-md">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <div>
            &copy; {currentYear} Hotel Oasis. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-hotel-gold transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-hotel-gold transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-hotel-gold transition-colors">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
