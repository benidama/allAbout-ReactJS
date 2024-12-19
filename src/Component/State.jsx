import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  const update = () => setCount((v) => v + 1);
  return (
    <div>
      <h1>React hooks</h1>
      <p>
        I will always looking forward my real time to my job. Evenif it very
        hard but it possible for me and us, untill when I reach my all goals.
      </p>
      <h1>{count}</h1>
      <button onClick={update}>Get value</button>
    </div>
  );
}

export default State;
