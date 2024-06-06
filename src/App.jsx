import { useState } from 'react'
import './App.css'
import Header from "./componets/header/header"
import PortfolioCon from "./PortFile"
import Footer from "./componets/footer/footer"

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <>
      <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PortfolioCon
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
    </>
  )
}

export default App
