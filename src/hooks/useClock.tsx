import { useState, useEffect } from 'react'

const useClock = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return time
}

export default useClock
