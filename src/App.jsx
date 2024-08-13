import './App.css'
import Home from './Components/Home'
import About from './Components/About'

function App() {

  const data = {
    Title: "Props",
    Image: "img.jpg",
    Heading: "Lorem ipsum dolor sit amet ebitis suscipit! Eveniet!"
  }

  return (
    <>
      <Home/>
      <About info = {data}/>
    </>
  )
}

export default App
