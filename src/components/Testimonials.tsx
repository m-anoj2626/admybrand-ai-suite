import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Riya Sen",
    title: "Data Analyst at Amazon",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=120&fit=crop&crop=face",
    text: "ADmyBRAND AI Suite transformed our marketing strategy completely. The AI-powered insights helped us increase our ROI by 340% in just 3 months. Absolutely game-changing!",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Johnson",
    title: "Marketing Director at Tesla",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=120&h=120&fit=crop&crop=face",
    text: "The automation features are incredible. What used to take our team weeks now happens in hours. The AI predictions are scary accurate and have revolutionized our campaigns.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    title: "CEO at InnovateX",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=120&h=120&fit=crop&crop=face",
    text: "From struggling with manual campaigns to AI-powered excellence. Our conversion rates doubled, and we're saving 15 hours per week. This platform is pure magic!",
    rating: 5
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 sm:px-4 py-2 mb-3 sm:mb-4">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-current" />
            <span className="text-primary font-medium text-xs sm:text-sm">Customer Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-primary">Thousands</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            See how businesses worldwide are transforming their marketing with our AI suite
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-12 shadow-elegant hover:shadow-strong transition-all duration-500 relative overflow-hidden group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                {/* Customer Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-3 border-white shadow-md group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={currentTestimonial.image} 
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online Indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed italic max-w-2xl">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-base sm:text-lg">{currentTestimonial.name}</div>
                  <div className="text-gray-600 text-sm sm:text-base">{currentTestimonial.title}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-strong transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="w-5 h-5 group-hover:animate-pulse" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-strong transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white"
            >
              <ChevronRight className="w-5 h-5 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};