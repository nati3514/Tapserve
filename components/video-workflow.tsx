"use client"

export default function VideoWorkflow() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">See How It Works</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Scan the table QR code, customize your order, and watch it through the complete workflow
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black animate-slide-up">
          <img
            src="/workflow.png"
            alt="TapServe QR code ordering workflow showing scanning to serving"
            className="w-full h-auto"
          />
        </div>

        <p className="text-center mt-12 text-muted-foreground max-w-2xl mx-auto">
          Customers scan the unique QR code at their table, customize their meal options, the cashier approves the order
          in the POS system, the kitchen prepares the food from their display, and your order is served fresh to your
          table.
        </p>
      </div>
    </section>
  )
}
