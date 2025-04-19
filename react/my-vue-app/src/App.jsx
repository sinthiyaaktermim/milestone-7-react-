import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  
const actors =['sakib','shoriful Raj','Jasim','Rubel','Salman Shah'];

const singers=[
  {name:'Dr. Mahfuzur Rahman',age:68},
  {name:"Eva Rahman",age:58},
  {name:'Shuvro Dev',age:28}
]
  return (
    < >
     
      <h1>Vite + React</h1>
      {
         singers.map(singer => <Singer singer ={singer} ></Singer>)
      }
     


      <Actor name={"mim"}></Actor>{
         actors.map(actor =><Actor name={actor}> </Actor>)
      }
     
      {/* <Todo task="learning react" isDone="true"></Todo>
      <Todo task="learning react concept" isDone="false"></Todo>
      <Todo task="core react concept" isDone="true"></Todo> */}
      {/* <Device name="latop" price="23"></Device>
      <Device name="mobile" price="20"></Device>
      <Person></Person>
      <Student></Student>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      < Devoloper></Devoloper> */}
    
     
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
