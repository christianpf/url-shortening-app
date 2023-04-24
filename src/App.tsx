import Navbar from "@/layouts/navbar";
import Hero from "@/layouts/hero";
import ShortenerSection from "@/layouts/shorten";
import Resources from "@/layouts/resources";


function App() {


  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <ShortenerSection />
        <Resources />
        <div className="pt-12"></div>
      </main>
    </div>
  )
}

export default App
