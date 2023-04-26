import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then((response) => response.json())
      .then((data) => {
        setSolution(data);
      });
  }, [setSolution]);
  console.log(solution);
  return <div className="App">Ohboy</div>;
};

export default App;
