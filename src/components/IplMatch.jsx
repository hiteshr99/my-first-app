import { useState } from "react";

function IplMatch() {
  const [isLive, setIsLive] = useState(false);

  return (
    <div style={{ margin: "20px" }}>
      <h2>IPL Match</h2>

      <button onClick={() => setIsLive(!isLive)}>
        {isLive ? "Stop Match" : "Start Match"}
      </button>

      <div style={{ marginTop: "10px" }}>
        {isLive ? (
          <p>Match is LIVE: CSK vs RCB</p>
        ) : (
          <p>Match has not started</p>
        )}
      </div>
    </div>
  );
}

export default IplMatch;