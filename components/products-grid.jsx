import { Card } from "@/components/ui/card"

const products = [
  {
    title: "Premium Whiskey",
    description: "Curated selection of bourbon, scotch, and rye",
    image: "/premium-whiskey-bottles.jpg",
  },
  {
    title: "Fine Wines",
    description: "From everyday favorites to special occasions",
    image: "/wine-bottles-collection.jpg",
  },
  {
    title: "Craft Vodka",
    description: "Premium and imported vodka selections",
    image: "/premium-vodka-bottles.jpg",
  },
  {
    title: "Aged Tequila",
    description: "Añejo, reposado, and blanco varieties",
    image: "/tequila-bottles.jpg",
  },
  {
    title: "Small Batch Gin",
    description: "Classic and contemporary gin selections",
    image: "/gin-bottles.jpg",
  },
  {
    title: "Craft Beer",
    description: "Local and imported craft selections",
    image: "/craft-beer-bottles.png",
  },
]

export default function ProductsGrid() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-tight text-balance text-primary">
            Discover our curated selection
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            {"Premium spirits, wines, and craft beverages for every occasion"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-xl hover:border-accent/50 transition-all"
            >
              <div className="relative h-80 overflow-hidden bg-muted/30">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-medium mb-2 text-primary">{product.title}</h3>
                <p className="text-muted-foreground font-light">{product.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
