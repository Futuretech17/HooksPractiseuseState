import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  let [exactTime, setTime] = useState(time);

  function showTime() {
    setTime((exactTime = new Date().toLocaleTimeString()));
  }

  function realTime() {
    setInterval(showTime, 1000);
  }

  return (
    <div className="container">
      <h1>{exactTime}</h1>
      <button onClick={realTime}>Get Time</button>
    </div>
  );
}

export default App;
