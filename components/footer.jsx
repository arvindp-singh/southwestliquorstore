export default function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-medium mb-4 text-primary">Southwest Liquor Store</h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              {"Your trusted destination for premium spirits and comprehensive financial services in Baltimore."}
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-muted-foreground font-light hover:text-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground font-light hover:text-accent transition-colors">
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#hours" className="text-muted-foreground font-light hover:text-accent transition-colors">
                  Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground font-light hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4 text-primary">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li>3212 Washington Blvd</li>
              <li>Baltimore, MD 21230</li>
              <li className="pt-2">
                <a href="tel:410-646-4616" className="hover:text-accent transition-colors">
                  (410) 646-4616
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} Southwest Liquor Store. All rights reserved.</p>
          <p className="mt-2">Licensed with Commissioner of Financial Regulation, State of MD. NMLS ID 1649205</p>
        </div>
      </div>
    </footer>
  )
}
