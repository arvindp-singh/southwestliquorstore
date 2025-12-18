import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ProductsGrid from "@/components/products-grid"
import Hours from "@/components/hours"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductsGrid />
      <Services />
      <Hours />
      <Contact />
      <Footer />
    </main>
  )
}
