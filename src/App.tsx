import Hero from "./components/Hero"
import ContextProvider from "./context/UseContextApi"
import Convert from './components/Convert'


function App() {

  return (
    <>
      <ContextProvider>
        <Hero />
        <Convert />
      </ContextProvider>
    </>
  )
}

export default App
