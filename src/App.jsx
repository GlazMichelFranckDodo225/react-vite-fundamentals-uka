/* import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero" */

const App = () => {
  // let marks = 80;
  // let marks = 81;
  // let marks = 71;
  let marks = 50;

  return (
    <div>
      {
        /* marks > 80 ? <h1>Brilliant Result</h1> : <h1>Avarage Result</h1> */
        (
          () => {
            if (marks >= 80 && marks < 100) {
              return <h1>A+</h1>
            }
            else if (marks >= 70 && marks < 80) {
              return <h1>A</h1>
            }
            else if (marks >= 60 && marks < 70) {
              return <h1>A-</h1>
            }
            else {
              return <h1>F</h1>
            }
          }
        ) ()
      }
      {/* <Header />
      <Hero />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
