import React, { useState } from "react";
import './App.css';


const App = () => {
  let Time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [ctime, setTime] = useState(Time);

  const update = () => {
    let Time = new Date().toLocaleTimeString();
    setTime(Time);
  }

  setInterval(update, 1000)
  return (
    <>
      <div className="container" >
          <h1 className="heading">Digital Clock</h1>
          <h1 className="time"> 🗓️ {date}</h1>
          <h1 className="time1"> {ctime}</h1>
        </div>
    </>
  );
}
export default App;