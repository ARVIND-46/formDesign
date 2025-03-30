import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header/>
  <Form/>
  <Footer/>
  </>
  )
}

export default App
