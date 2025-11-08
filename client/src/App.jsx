import { useEffect, useState } from 'react'

function App() {

  const [message, setMessage] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message)
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [])

  return (
    <>
      <h1>Welcome to Frontend</h1>
      {message ? <p>{message}</p> : <p>Loading...</p>}
    </>
  )
}

export default App
