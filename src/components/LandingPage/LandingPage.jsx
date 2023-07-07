import Header from "./Header/Header"
import Body from "./Body/Body"
import { createContext, useState } from "react"

export const Renderer = createContext()

const LandingPage = () => {
  const [searchItems, setSearchItems] = useState([]);

  return (
    <Renderer.Provider value={{searchItems, setSearchItems}}>
    <section className="landingpage">
      <Header/>
      <Body/>
    </section>
    </Renderer.Provider>
  )
}

export default LandingPage