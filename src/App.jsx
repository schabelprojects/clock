import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  function showTime(){
    setTime(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(showTime, 1000);
    return function cleanUp(){
      clearInterval(timerId)
    }
  }, [])

  return (
    <>
    <span className='date'>
      {date.toLocaleDateString('de-DE', options)}
    </span>
    <span className='time'>
    {time.toLocaleTimeString()}
    </span>
    </>
  )
}

export default App
