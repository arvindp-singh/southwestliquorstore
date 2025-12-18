import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background/80" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(/placeholder.svg?height=1080&width=1920&query=premium+liquor+bottles+on+shelves)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight text-balance">
            Premium spirits meet community service
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-2xl mx-auto text-balance">
            {"Your trusted destination for quality beverages and comprehensive financial services in Baltimore"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="px-8 font-normal text-base bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Explore Our Selection
            </Button>
            <a
              href="https://maps.google.com/?q=3212+Washington+Blvd,+Baltimore,+MD+21230"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span>3212 Washington Blvd, Baltimore, MD 21230</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
