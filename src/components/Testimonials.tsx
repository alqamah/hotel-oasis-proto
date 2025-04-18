
import { useState } from "react";
import { Star, StarHalf, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    location: "New York, USA",
    rating: 5,
    comment: "Hotel Oasis exceeded all my expectations. The staff was incredibly attentive, the room was impeccable, and the amenities were top-notch. I particularly enjoyed the spa services and will definitely be returning soon!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "David Chen",
    location: "London, UK",
    rating: 4.5,
    comment: "A truly remarkable stay. The attention to detail throughout the hotel is impressive, from the elegant decor to the personalized service. The only minor issue was the Wi-Fi connectivity in certain areas, but it didn't detract from our wonderful experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    location: "Paris, France",
    rating: 5,
    comment: "My stay at Hotel Oasis was nothing short of perfection. The panoramic views from our suite were breathtaking, and the dining experience at the rooftop restaurant was unforgettable. Will recommend to all my friends and colleagues!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-hotel-gold text-hotel-gold" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-hotel-gold text-hotel-gold" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-5 w-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4SDM2eiIgZmlsbD0iIzMzMyIvPjwvZz48L3N2Zz4=')]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 heading-fancy text-hotel-navy">
            Guest Experiences
          </h2>
          <p className="text-hotel-charcoal/80 max-w-2xl mx-auto">
            Discover what our guests are saying about their stay at Hotel Oasis.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white shadow-lg rounded-xl p-6 md:p-10 animate-fade-in">
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl text-hotel-gold opacity-20 font-serif">
              "
            </div>
            
            <div className="mb-6 flex justify-center">
              <div className="flex items-center">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl text-center italic mb-8 text-hotel-charcoal">
              "{testimonials[activeIndex].comment}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-3">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover rounded-full border-2 border-hotel-gold"
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-hotel-navy">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-hotel-charcoal/70">{testimonials[activeIndex].location}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-hotel-gold" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-hotel-navy/20 hover:bg-hotel-navy/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-hotel-navy" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-hotel-navy/20 hover:bg-hotel-navy/5 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-hotel-navy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
