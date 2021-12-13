import './App.css';
import { useEffect, useState } from "react"

function App() {

  const [userInput, setUserInput] = useState("");
  const [stories, setStories] = useState([])



  useEffect(() => {
    getResults()
  }, [])

  const updateUserInput = (event) => {
    setUserInput(event.target.value)
    console.log(event)
  }

  const getResults = () => {
    fetch("https://hn.algolia.com/api/v1/search?query=" + userInput)
      .then((res) => res.json())
      .then((res) => setStories(res.hits))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getResults()
  }


  return (
    <div className="App">
      <h1>hello this is a website about: </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={updateUserInput}
          type="text"
          value={userInput}
          placeholder="what are you looking for..?">
        </input>
      </form>
      {stories
        .map((story) =>
          <li>
            <a href={story.url}>{story.title}</a>
          </li>
        )}
    </div>
  );
}

export default App;
