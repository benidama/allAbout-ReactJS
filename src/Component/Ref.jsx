import React, { useState, useRef, useEffect } from "react";

function Ref() {
  const tik = new Date().getHours();
  const [valeur, setValeur] = useState("");
  const refHook = useRef("");
  useEffect(() => {
    valeur;
    // refHook.current.focus;
    refHook.current.style.backgroundColor = "blue";
  }, [valeur]);

  return (
    <div>
      <h1 className="text-center text-green-500">UseHook in react</h1>
      <h3>Learn how to use useRef react hook</h3>
      <input
        className=" text-center m-2 btn rounded-md p-2 text-white"
        type="text"
        ref={refHook}
        value={valeur}
        onChange={(e) => setValeur(e.target.value)}
        placeholder="Enter your name"
      />
      <h2 className="text-2xl text-emerald-400">
        Hi {valeur}, we are at {tik}h
      </h2>
      <p>
        UseRef is the best one in all hooks, you can use in order to manipulate
        html DOM.
      </p>
    </div>
  );
}

export default Ref;
