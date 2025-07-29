import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Riya Sen",
    title: "Data Analyst at Amazon",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=120&fit=crop&crop=face",
    text: "ADmyBRAND AI Suite transformed our marketing strategy completely. The AI-powered insights helped us increase our ROI by 340% in just 3 months. Absolutely game-changing!",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    title: "Marketing Director at Tesla",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=120&h=120&fit=crop&crop=face",
    text: "The automation features are incredible. What used to take our team weeks now happens in hours. The AI predictions are scary accurate and have revolutionized our campaigns.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    title: "CEO at InnovateX",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=120&h=120&fit=crop&crop=face",
    text: "From struggling with manual campaigns to AI-powered excellence. Our conversion rates doubled, and we're saving 15 hours per week. This platform is pure magic!",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section  id="testimonials" className="py-20 bg-gradient-to-br from-purple-200 via-pink to-blue-300 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 mt-2">Trusted by industry leaders worldwide</p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-full px-4"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto text-center transition-all duration-500">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img src={t.image} alt={t.name} className="rounded-full w-full h-full object-cover" />
                  </div>
                  <div className="flex justify-center mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg italic text-gray-700 mb-4">"{t.text}"</p>
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={prev}
              className="bg-white p-2 rounded-full shadow hover:bg-primary hover:text-white transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={next}
              className="bg-white p-2 rounded-full shadow hover:bg-primary hover:text-white transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-primary scale-125" : "bg-gray-400 hover:scale-110"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
