import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "3,999",
    period: "ETB / month",
    description: "For small cafés or startups",
    features: ["Features", "POS System", "Kitchen Display", "Invoices", "Basic Reports"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "6,999",
    period: "ETB / month",
    description: "For growing restaurants looking to digitize",
    features: [
      "Everything in Basic, plus:",
      "QR Menu & Ordering",
      "Customer Save & Feedback",
      "Loyalty Points & Coupon Promotions",
      "Restaurant Reservation",
      "Detailed Reports & Analytics",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "10,999",
    period: "ETB / month",
    description: "For restaurants wanting full control and branded presence",
    features: [
      "Everything in Pro, plus:",
      "Inventory Management",
      "SMS Integration for promotions",
      "Custom Website Development",
      "Staff Training & Priority Support",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">Choose the perfect plan for your restaurant</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 transition-all duration-300 animate-slide-up ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-2xl scale-105 md:scale-100"
                  : "bg-card border border-border hover:border-primary"
              }`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p className={plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                {plan.description}
              </p>

              <div className="my-6">
                <span
                  className={`text-4xl font-bold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {plan.price}
                </span>
                <span className={plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {" "}
                  {plan.period}
                </span>
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                Get Started
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex gap-3 items-start">
                    {featureIdx === 0 && plan.features.length > 1 ? (
                      <span
                        className={`font-semibold ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}
                      >
                        {feature}
                      </span>
                    ) : (
                      <>
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className={plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}>
                          {feature}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <Button
                variant={plan.highlighted ? "outline" : "outline"}
                className={`w-full mt-8 ${
                  plan.highlighted
                    ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                    : ""
                }`}
              >
                Request Demo
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
