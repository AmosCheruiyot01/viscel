import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './assets/list'

console.log(List);
// child components
const Cont = () => {
return(
  <div className='container'>
<h2> Student Register</h2>

{/* <Block name = "nick devris" id = "c34554" sch = "kyu"/>
      <Block name = "Max versterppen" id = "rb34554" sch = "dekut"/>
      <Block name = "checo perez" id = "rb34554" sch = "kmu"/>
      <Block name = "lewis hamilton" id = "mc34554" sch = "mmu"/> */}
      
      <List/>
      <Sidebar/>
      <Footer/>

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
  const Dat = new Date().toLocaleDateString();
  return(
   <div className='footer'>
     
      <p><h3>amos cheruiyot</h3></p>
      <p>{Dat}</p>
    
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
