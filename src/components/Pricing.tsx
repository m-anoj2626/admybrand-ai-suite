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
          <div className="inline-flex items-center bg-muted rounded-full p-1">
            <button className="px-4 py-2 rounded-full bg-white shadow-sm text-sm font-medium">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground">
              Annual
              <span className="ml-1 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
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
              className={`pricing-card relative ${
                plan.popular 
                  ? 'pricing-card-featured transform lg:scale-105' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${
                  plan.name === 'Starter' ? 'from-blue-500 to-cyan-500' :
                  plan.name === 'Professional' ? 'from-purple-500 to-pink-500' :
                  'from-yellow-500 to-orange-500'
                } flex items-center justify-center mb-4`}>
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
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-glow' 
                      : 'variant-outline'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
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