import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight text-balance text-primary">
              Visit us today
            </h2>
            <p className="text-lg text-muted-foreground font-light">{"We look forward to serving you"}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-medium mb-6 text-primary">Get in touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/20 rounded-lg mt-1">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-primary">Address</p>
                    <p className="text-muted-foreground font-light">
                      3212 Washington Blvd
                      <br />
                      Baltimore, MD 21230
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/20 rounded-lg mt-1">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-primary">Phone</p>
                    <a
                      href="tel:410-646-4616"
                      className="text-muted-foreground font-light hover:text-accent transition-colors"
                    >
                      (410) 646-4616
                    </a>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full mt-8 font-normal bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://maps.google.com/?q=3212+Washington+Blvd,+Baltimore,+MD+21230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Get Directions
                </a>
              </Button>
            </Card>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.8928!2d-76.6443!3d39.2747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c804c7b3f8e689%3A0x5c5d5e5d5e5d5e5d!2s3212%20Washington%20Blvd%2C%20Baltimore%2C%20MD%2021230!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
