import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Caraousel from './Caraousel'

function App() {
  const images = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
    },
    {
      id:3,
      imageUrl: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200'
    }
  ]

  const [activeItems, setActiveItems] = useState(0)
  
  const handleOnClickNext=()=>{
   if(activeItems === images.length-1){
     setActiveItems(0)
   }else{
    setActiveItems(activeItems+1)
   }
  }

  const handleOnClickPrev=()=>{
    if(activeItems === 0){
      setActiveItems(images.length-1)
    }else{
     setActiveItems(activeItems-1)
    }
   }

   useEffect(()=>{
     let timer = setTimeout(()=>{
      handleOnClickNext()
     }, 5000)
     
     return()=>{
      clearTimeout(timer)
     }
   },[activeItems])

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
       <Caraousel items={images[activeItems]} />
       <div>
          <button onClick={handleOnClickPrev}>Prev</button>&nbsp;&nbsp;
          <button onClick={handleOnClickNext}>Next</button>
       </div>
    </>
  )
}

export default App
