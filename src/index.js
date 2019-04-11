import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNewsArticles } from "./api";

function LikeCount() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(oldCount => oldCount + 1);
  };
  const decrement = () => {
    setCount(oldCount => oldCount - 1);
  };

  return (
    <div>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
      <p>Overall Count: {count}</p>
    </div>
  );
}
function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <LikeCount />
    </div>
  );
}

function App() {
  const { loading, headlines, error } = useNewsArticles();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="App">
      {headlines.map(headline => (
        <Headline key={headline.url} title={headline.title} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
