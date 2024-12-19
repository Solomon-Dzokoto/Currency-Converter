import Hero from "./components/Hero"
import ContextProvider from "./context/UseContextApi"
import Convert from './components/Convert'
import About from "./components/About"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <ContextProvider>
        <Hero />
        <Convert />
        <About/>
        <Footer/>
      </ContextProvider>
    </>
  )
}

export default App
