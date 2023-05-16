import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// child components
const Cont = () => {
return(
  <div className='container'>
<h2> Student Register</h2>

<Block name = "nick devris" id = "c34554" sch = "kyu"/>
      <Block name = "Max versterppen" id = "rb34554" sch = "kyu"/>
      <Block name = "checo perez" id = "rb34554" sch = "kyu"/>
      <Block name = "lewis hamilton" id = "mc34554" sch = "kyu"/>
      <Sidebar/>
      <Footer/>

 </div>
)
}

const Block  = ({name, id, sch}) => {
  return (
    <div className='std_cont'>
      <div className='std'>
      <h3> Name:{name}</h3>
    <p>From:{sch}</p>
    <p>Id:{id}</p>
    </div>
    </div>
  )
  
}

const Sidebar = () => {
  return(
   <div grid>
    <div className='Sidebar'>
     <p>this is the register for students in university</p>
     
   </div>
   </div>
  )
 }

 const Footer = () => {
  return(
   <div className='footer'>
     
      <p><h3>amos cheruiyot</h3></p>
      <input type="date" />
    
   </div>
  )
 }


// main component
function App() {
  return (
    <>
     
      <Cont/> 
      
      
    </>
  )
}

export default App
