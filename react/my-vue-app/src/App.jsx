import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    < >
     
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
    
     
    </>
  )
}
function Person(){
  const age = 23;
  const money =20;
  const person = {name:'shakib',age:12}
  return <h3>i am a {person.name} age:{age} money:{money}</h3>
}

function Student(){
  return <div>
    <h3>this is a student</h3>
    <p>name: rakib</p>
    <p>age:55</p>
  </div>
}

export default App
