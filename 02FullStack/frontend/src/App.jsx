/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
function App() {


  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    
    .catch((error)=>{
      console.error(error);
    })

  })


  return (
    <>
     <h1>FrontEnd And BackEnd</h1>
     <p>Jokes : {jokes.length}</p>
     {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
