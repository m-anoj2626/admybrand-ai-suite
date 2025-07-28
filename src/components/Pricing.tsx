import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses and startups",
    icon: Zap,
    features: [
      "AI Content Generation (100 pieces/month)",
      "Basic Analytics Dashboard",
      "Social Media Scheduling",
      "Email Marketing Tools",
      "Community Support",
      "Mobile App Access"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing businesses and agencies",
    icon: Star,
    features: [
      "AI Content Generation (500 pieces/month)",
      "Advanced Analytics & Insights",
      "Multi-Channel Campaign Management",
      "A/B Testing & Optimization",
      "Priority Support",
      "Custom Integrations",
      "Team Collaboration (5 users)",
      "White-label Options"
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    icon: Crown,
    features: [
      "Unlimited AI Content Generation",
      "Enterprise Analytics Suite",
      "Dedicated Account Manager",
      "Custom AI Model Training",
      "Advanced Security & Compliance",
      "24/7 Phone Support",
      "Unlimited Team Members",
      "Custom Integrations & API Access"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Simple Pricing</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your
            <span className="gradient-text"> Success Plan</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include our core AI features 
            with no hidden costs or setup fees.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-full p-1 shadow-soft">
            <button className="px-4 py-2 rounded-full bg-white shadow-sm text-sm font-medium hover:shadow-medium transition-all duration-300">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:bg-white hover:shadow-medium hover:text-foreground transition-all duration-300">
              Annual
              <span className="ml-1 text-xs bg-gradient-to-r from-green-400 to-green-500 text-white px-2 py-1 rounded-full animate-pulse">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative transition-all duration-500 hover:shadow-strong hover:-translate-y-4 group ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 transform lg:scale-105 shadow-glow' 
                  : 'bg-white shadow-card hover:shadow-glow border border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-medium animate-pulse">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${
                  plan.name === 'Starter' ? 'from-primary to-accent' :
                  plan.name === 'Professional' ? 'from-primary to-secondary' :
                  'from-secondary to-accent'
                } flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                
                <div className="mt-4">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    {plan.price !== 'Custom' && (
                      <span className="text-lg font-normal text-muted-foreground">/month</span>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 group/feature hover:bg-muted/30 rounded-lg p-2 -mx-2 transition-all duration-200">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200" />
                      <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-glow hover:scale-105' 
                      : 'group-hover:border-primary group-hover:text-primary'
                  }`}
                  variant={plan.popular ? "gradient" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Trusted by over 10,000 brands worldwide
          </p>
          
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">TechCorp</div>
            <div className="text-2xl font-bold">GlobalBrand</div>
            <div className="text-2xl font-bold">InnovateInc</div>
            <div className="text-2xl font-bold">FutureFlow</div>
          </div>
        </div>
      </div>
    </section>
  );
};