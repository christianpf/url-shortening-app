import Navbar from "@/layouts/navbar";
import Hero from "@/layouts/hero";
import ShortenerSection from "@/layouts/shorten";
import Resources from "@/layouts/resources";
import CTA from "./layouts/callToAction";
import Footer from "./layouts/footer";


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
        <CTA />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
