import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  const update = () => setCount((v) => v + 1);
  return (
    <div>
      <h1>React hooks</h1>
      <h1>{count}</h1>
      <button onClick={update}>Get value</button>
    </div>
  );
}

export default State;
