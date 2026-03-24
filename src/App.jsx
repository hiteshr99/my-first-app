import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from "./Greeting";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0)
  const name = "Hitesh";
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h2>Hello {name}</h2>
          <Greeting name="Hitesh" />
          <Greeting name="Rahul" />
          <Greeting name="Ankit" />
          <Card title="Fast Rendering" description="React updates efficiently" />
          <Card title="Reusable Components" description="Write once use anywhere" />
          <Card title="Strong Community" description="Lots of support available" />
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
