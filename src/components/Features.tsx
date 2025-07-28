import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, Zap, Target, Users, Shield, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Content Creation",
    description: "Generate compelling copy, visuals, and campaigns with our advanced AI engine that understands your brand voice.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description: "Real-time insights and predictive analytics to optimize your marketing performance and ROI.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "AI-driven audience segmentation and targeting for maximum engagement and conversion rates.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Lightning-Fast Automation",
    description: "Automate repetitive tasks and workflows to save time and focus on strategic initiatives.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Manage all your social platforms from one dashboard with AI-optimized posting schedules.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and advanced data protection protocols.",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "Creative AI Assistant",
    description: "Your personal AI creative partner for brainstorming, ideation, and campaign optimization.",
    gradient: "from-teal-500 to-blue-500"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuous learning algorithms that improve your campaigns automatically over time.",
    gradient: "from-violet-500 to-purple-500"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Everything You Need to
            <span className="block">Dominate Your Market</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI suite provides all the tools and insights you need to 
            create, manage, and optimize successful marketing campaigns.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="feature-card group hover:shadow-glow border-0 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to experience the power of AI marketing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};