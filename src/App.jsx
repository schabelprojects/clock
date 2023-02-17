import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState(new Date());

  function showDate(){
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(showDate, 1000);
    return function cleanUp(){
      clearInterval(timerId)
    }
  }, [])

  return (
    <>
    <span>
    {date.toLocaleTimeString()}
    </span>
    </>
  )
}

export default App
