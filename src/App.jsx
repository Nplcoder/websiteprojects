import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/home/banner/Banner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
     <Header />

     <main className="flex-1">
     <Banner /> {/* Your page content */}
      </main>

     <Footer />
    </div>
  )
}

export default App
