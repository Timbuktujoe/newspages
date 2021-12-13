import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [stories, setStories] = useState()
  useEffect(() => {
    fetch("https://hn.algolia.com/api")
      .then((res) => res.json())
      .then((res) => setStories)
  })

  return (
    <div className="App">
      <h1>hello this is a news website</h1>
    </div>
  );
}

export default App;
