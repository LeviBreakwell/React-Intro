import React, { useState } from "react";
import ReactDOM from "react-dom";

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
  Headline("yoyo");
  return (
    <div className="App">
      <Headline title="Facebook Friends" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
