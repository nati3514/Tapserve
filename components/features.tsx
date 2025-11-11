import { Zap, Monitor, FileText, Smartphone, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "POS System",
    description: "Manage sales, orders, and payments easily with our intuitive interface",
  },
  {
    icon: Zap,
    title: "Kitchen Display",
    description: "Real-time order updates to keep operations smooth and organized",
  },
  {
    icon: FileText,
    title: "Invoices",
    description: "Create and print invoices instantly for all your transactions",
  },
  {
    icon: Smartphone,
    title: "QR Menu & Ordering",
    description: "Customers can scan and order using unique table QR codes (Pro+)",
  },
  {
    icon: Users,
    title: "Customer & Loyalty",
    description: "Save customer data, reward loyal users, and collect feedback",
  },
  {
    icon: TrendingUp,
    title: "Inventory & Reports",
    description: "Control stock, view analytics, run promotions, and send SMS campaigns (Enterprise)",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Modern Restaurants
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Everything you need to run a successful restaurant in one platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground text-primary flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
