import { Card } from "@/components/ui/card"
import { CreditCard, DollarSign, FileText, Receipt, Stamp, Banknote } from "lucide-react"

const services = [
  {
    icon: CreditCard,
    title: "Check Cashing",
    description: "Quick and secure check cashing services with proper verification",
  },
  {
    icon: DollarSign,
    title: "Direct Deposit",
    description: "Social security, pensions, VA checks, and payroll deposits",
  },
  {
    icon: Receipt,
    title: "Bill Pay",
    description: "Convenient payment services for BGE, Comcast, and more",
  },
  {
    icon: FileText,
    title: "Money Orders",
    description: "Secure money orders for all your financial needs",
  },
  {
    icon: Stamp,
    title: "Notary Services",
    description: "Professional notary services available on-site",
  },
  {
    icon: Banknote,
    title: "ATM & Pre-Paid Cards",
    description: "On-site ATM and Nexcard Pre-Paid Visas available",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight text-balance text-primary">
            Comprehensive financial services
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            {"Licensed with Commissioner of Financial Regulation, State of MD"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl hover:border-accent/50 transition-all bg-card/80 backdrop-blur-sm"
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground font-light max-w-2xl mx-auto">
            {
              "Licensed with Commissioner of Financial Regulation, State of MD Dept of Labor, Licensing & Regulation. License NMLS ID 1649205. All checks subject to verification and proper ID required."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
