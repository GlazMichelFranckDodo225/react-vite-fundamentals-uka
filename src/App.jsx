/* import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero" */

const App = () => {
  // let marks = 80;
  let marks = 81;

  return (
    <div>
      {
        marks > 80 ? <h1>Brilliant Result</h1> : <h1>Avarage Result</h1>
      }
      {/* <Header />
      <Hero />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
