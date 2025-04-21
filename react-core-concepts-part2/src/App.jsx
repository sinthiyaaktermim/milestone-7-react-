
import './App.css'

function App() {
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 =()=>{
alert('button 2 clicked')
  }

  return (
    <>
    
      <h1>React core concepts 2</h1>
      {/* <button onclick= "handleClick()">Click Me</button> */}

      <buttton onClick= {handleClick}>click me</buttton>
      <button onClick= {handleClick2}>Click 2</button>
      <button onClick= {()=>{alert('third clicked')}}>third</button>
    
    </>
  )
}

export default App
