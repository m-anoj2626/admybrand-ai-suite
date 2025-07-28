import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 fade-in-up">
              <Star className="w-4 h-4 text-yellow-300 fill-current" />
              <span className="text-white text-sm font-medium">#1 AI Marketing Suite</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight fade-in-up-delay-1">
              Transform Your
              <span className="block text-glow">Brand with AI</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 fade-in-up-delay-2">
              ADmyBRAND AI Suite revolutionizes marketing with intelligent automation, 
              data-driven insights, and creative excellence. Boost your ROI by 300% 
              with our cutting-edge AI technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 fade-in-up-delay-3">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-white/70 text-sm fade-in-up-delay-3">
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-white">10,000+</span>
                <span>Brands Trust Us</span>
              </div>
              <div className="w-1 h-4 bg-white/30"></div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-white">99.9%</span>
                <span>Uptime</span>
              </div>
              <div className="w-1 h-4 bg-white/30"></div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-white">24/7</span>
                <span>Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative fade-in-up-delay-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
              
              {/* Main Image */}
              <img 
                src={heroImage} 
                alt="ADmyBRAND AI Suite Dashboard"
                className="relative z-10 w-full h-auto rounded-3xl shadow-strong"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-strong float-animation">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">AI Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-primary rounded-2xl p-4 shadow-strong float-animation" style={{ animationDelay: '2s' }}>
                <div className="text-white">
                  <div className="text-2xl font-bold">+300%</div>
                  <div className="text-sm opacity-90">ROI Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};