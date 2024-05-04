import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      {/* <h1 className='text-3xl bg-green-500 p-3'>vite with tailwind</h1> */}
      <Card username = "Rishikesh" url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDDhUxSWXCGVjCIJvy-BlUZrksPn7w_rmYFYDVb5aQQ&s"/>
      <Card post = "Senior Engineer"/>
      <Card username='Ramesh' post='Office boy'/>
    </>
  )
}

export default App
