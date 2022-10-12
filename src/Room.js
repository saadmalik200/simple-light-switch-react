import React, { useState } from "react";

import "./Room.css";

function Room() {
  const [lightOn, setLightOn] = useState(true);

  const lightHandler = () => {
    // console.log(`Clicked`);
    setLightOn(!lightOn);
  };

  return (
    <div className={`room ${lightOn ? "lit" : "dark"}`}>
      <button onClick={lightHandler}>
        LightSwitch {lightOn ? "On" : "Off"}
      </button>
      {lightOn ? <p>The Room is lit</p> : <p>The Room is Dard</p>}
    </div>
  );
}

export default Room;
