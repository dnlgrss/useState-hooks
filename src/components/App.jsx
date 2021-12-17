import React from "react";

function App() {
  const [clock, showTime] = React.useState("TIME");

  function timeTriggered() {
    let time = new Date().toLocaleTimeString();
    showTime(time);
    setInterval(timeTriggered, 1000);
  }

  return (
    <div className="container">
      <h1>{clock}</h1>
      <button onClick={timeTriggered}>Get Time</button>
    </div>
  );
}

export default App;
