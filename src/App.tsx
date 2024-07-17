import AboutUs from "./components/AboutUs"
import Courses from "./components/Courses"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"
import FormCTA from "./components/FormCTA"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="bg-white w-full flex flex-col justify-center">
      <Header />

      <Hero />

      <FormCTA />

      <Courses />

      {/* <Amenities /> */}

      <FeaturesSection />

      <AboutUs />

      <Footer />
    </div>
  )
}

export default App
