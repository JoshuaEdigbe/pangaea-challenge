import React, { useState } from 'react'
import Products from './pages/Products';
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Products />
    </div>
  )
}

export default App
