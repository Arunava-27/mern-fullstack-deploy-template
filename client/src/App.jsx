import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Error fetching message", err);
      });
  }, []);

  return (
    <>
      <h1>Welcome to Arunava frontend</h1>
      <h2>data {message}</h2>
    </>
  );
}

export default App;