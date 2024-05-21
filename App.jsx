import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutesList from './Routes'
import './App.css'

function App() {
  const [selectedBoxes, setSelectedBoxes] = useState([])
  const [startReversing, setStartReversing] = useState(false)
  const routesHtml = RoutesList.map(({
    path, exact, component, isPrivate,
  }) => ( <Route key={path} path={path} exact={exact} element={component} />))


  useEffect(()=> {
    if( startReversing && selectedBoxes.length > 0){

      setTimeout(()=>{
        const newSelectedBoxes = [...selectedBoxes]
        newSelectedBoxes.pop()
        setSelectedBoxes(newSelectedBoxes)
      },1000)
    }
    if(selectedBoxes.length === 0){
      setStartReversing(false)
    }
  },[selectedBoxes])


  const arr = [ 
      {isActive: true, id:1},
      {isActive: true, id:2},
      {isActive: true, id:3},
      {isActive: true, id:4},
      {isActive: false, id:5},
      {isActive: false, id:6},
      {isActive: true, id:7},
      {isActive: true, id:8},
      {isActive: true, id:9},
  ]

  const deselect = () => {
    console.log("deselect")
    for(let i=0;i<7;i++){
      console.log("deselect ,fro")
      
        setTimeout(()=>{
          const newSelectedBoxes = [...selectedBoxes]
          newSelectedBoxes.pop()
          setSelectedBoxes(newSelectedBoxes)
        },1000)
    }
}
  const onSelectBox = (id) =>{  
    const newSelectedBoxes = [...selectedBoxes]
    if(!selectedBoxes.includes(id)){
      newSelectedBoxes.push(id)
      setSelectedBoxes(newSelectedBoxes)
    }
    if(newSelectedBoxes.length === 7){
      // deselect()
      setStartReversing(true)
    }
  }


  {console.log("selectedBoxes",selectedBoxes)}


  return (
 
    <div className='box-container'>
      {arr.map((i)=><div onClick={()=>{
        onSelectBox(i.id)
      }} className={`
      box ${i.isActive ? ''  : "no-background"} 
      ${selectedBoxes.includes(i.id) ? "selected" : ''} `}> 
      </div> )}
      
    </div>
  )
}

export default App
