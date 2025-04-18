
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import ImageCarousel from "@/components/ImageCarousel";
import Testimonials from "@/components/Testimonials";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Rooms />
      <Amenities />
      <ImageCarousel />
      <Testimonials />
      <LocationMap />
      <Footer />
    </div>
  );
};

export default Index;
