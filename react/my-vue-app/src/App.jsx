import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    < >
     
      <h1>Vite + React</h1>
      <Device name="latop" price="23"></Device>
      <Device name="mobile" price="20"></Device>
      <Person></Person>
      <Student></Student>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      < Devoloper></Devoloper>
    
     
    </>
  )
}

function Device(props){
  // console.log(props);
  return <h2>this device:{props.name} price:{props.price}</h2>
}

function Person(){
  const age = 23;
  const money =20;
  const person = {name:'shakib',age:12}
  return <h3>i am a {person.name} age:{age} money:{money}</h3>
}

const {grade,score} = {grade:'a',score:'99'};

function Student({grade=1,score=0}){
  console.log(grade,score);
  return <div className='student'>
    <h3>this is a student</h3>
    <p>class: {grade}</p>
    <p>score:{score}</p>
  </div>
}
function Devoloper(){
  const developerStyle ={
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'10px'
  }
  return(
  <div style={developerStyle}>
    <h5>devo Devo</h5>
    <p>coding</p>
  </div>
  )
}

export default App
