import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite's AI technology work?",
    answer: "Our AI Suite uses advanced machine learning algorithms and natural language processing to analyze your marketing data, customer behavior, and market trends. It then generates personalized recommendations, automates campaign optimization, and predicts future performance to maximize your ROI."
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer: "Absolutely! ADmyBRAND AI Suite seamlessly integrates with over 200+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and many more. Our API-first approach ensures smooth data flow between all your marketing platforms."
  },
  {
    question: "What kind of results can I expect in the first month?",
    answer: "Most users see significant improvements within the first 30 days: 25-40% increase in conversion rates, 30-50% reduction in cost per acquisition, and 20-35% improvement in overall campaign performance. Results vary based on your current setup and industry."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can explore the platform, run campaigns, and see real results before making any commitment. Our team will also provide personalized onboarding support."
  },
  {
    question: "How secure is my marketing data?",
    answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 Type II compliance, GDPR compliance, and regular security audits. Your data is stored in secure, geographically distributed data centers with 99.9% uptime guarantee."
  },
  {
    question: "Do you provide customer support and training?",
    answer: "Yes! We offer 24/7 customer support via chat, email, and phone. Plus, you get access to our comprehensive knowledge base, video tutorials, weekly webinars, and dedicated customer success managers for Enterprise plans."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data whenever needed."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-secondary rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-medium text-sm">Got Questions?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-primary">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-elegant p-8 lg:p-12 relative overflow-hidden group hover:shadow-strong transition-shadow duration-500">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="group/item border border-gray-200 rounded-2xl px-6 py-2 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                  >
                    <AccordionTrigger className="group/trigger text-left hover:no-underline py-6">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-full group-hover/item:animate-pulse">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900 group-hover/trigger:text-primary transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-11">
                      <div className="text-gray-600 leading-relaxed animate-fade-in">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-white/90 mb-6">Our team is here to help you succeed with AI-powered marketing</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
                    Contact Support
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 transform">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};