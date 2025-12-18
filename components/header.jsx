import { Phone } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-primary/5 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-semibold tracking-tight text-primary">Southwest Liquor Store</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium hover:text-accent transition-colors">
              Products
            </a>
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </a>
            <a href="#hours" className="text-sm font-medium hover:text-accent transition-colors">
              Hours
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
          <a
            href="tel:410-646-4616"
            className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(410) 646-4616</span>
          </a>
        </div>
      </div>
    </header>
  )
}
