import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

const hours = [
  { day: "Monday", time: "9 AM – 8 PM", isToday: false },
  { day: "Tuesday", time: "9 AM – 8 PM", isToday: false },
  { day: "Wednesday", time: "9 AM – 8 PM", isToday: false },
  { day: "Thursday", time: "9 AM – 8 PM", isToday: false },
  { day: "Friday", time: "7 AM – 9 PM", isToday: false },
  { day: "Saturday", time: "9 AM – 8 PM", isToday: false },
  { day: "Sunday", time: "Closed", isToday: false },
]

export default function Hours() {
  return (
    <section id="hours" className="py-24 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-accent" />
              <h2 className="text-5xl font-light tracking-tight text-primary">Hours of operation</h2>
            </div>
            <p className="text-lg text-muted-foreground font-light">{"Visit us at your convenience"}</p>
          </div>
          <Card className="p-8 md:p-12 shadow-lg">
            <div className="space-y-4">
              {hours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="text-lg font-medium text-primary">{item.day}</span>
                  <span
                    className={`text-lg font-light ${item.time === "Closed" ? "text-muted-foreground" : "text-accent"}`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
