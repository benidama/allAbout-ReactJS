import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("Blue");
  const arr = ["anni", "jone", "claude"];
  const update = () => setCount((v) => v + 1);
  return (
    <div>
      <h1 className="text-2xl">React hooks</h1>
      <p>
        I will always looking forward my real time to my job. Evenif it very
        hard but it possible for me and us, untill when I reach my all goals.
      </p>
      <h2>
        {arr.map((ah) => {
          return <li key={ah.id}>{ah}</li>;
        })}
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        sapiente aperiam nihil deleniti voluptatum corrupti aut hic, eum in.
        Nesciunt consequuntur possimus quis.
      </p>
      <p>My favolite color is {color}</p>
      <button
        className="btn bg-blue-500 rounded p-1"
        onClick={() => setColor(() => "Green")}
      >
        My color
      </button>
      <h1>{count}</h1>
      <button onClick={update}>Get value</button>
    </div>
  );
}

export default State;
