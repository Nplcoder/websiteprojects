import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/home/banner/Banner'
import FeaturedProducts from './components/home/featured-products/FeaturedProducts'
import ProductGrid from './components/home/featured-products/ProductGrid'
import Teams from './components/home/teams/Teams'
import AboutSection from './components/home/about/AboutSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
     <Header />

     <main className="flex-1">
     <Banner /> {/* Your page content */}

     <FeaturedProducts />
     {/* <ProductGrid /> */}
     <AboutSection />

     <Teams />
      </main>

     <Footer />
    </div>
  )
}

export default App
