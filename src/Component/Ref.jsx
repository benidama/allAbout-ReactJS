import React, { useState, useRef, useEffect } from "react";

function Ref() {
  const tik = new Date().getHours();
  const [valeur, setValeur] = useState("");
  const refHook = useRef("");
  useEffect(() => {
    valeur;
  }, [valeur]);
  return (
    <div>
      <h1 className="text-center text-green-500">UseHook in react</h1>
      <h3>Learn how to use useRef react hook</h3>
      <input
        className="bg-slate-400 text-center"
        type="text"
        value={valeur}
        onChange={(e) => setValeur(e.target.value)}
        placeholder="Enter your name"
      />
      <h2> Your name is {valeur},</h2>
      <h2>
        Hi {valeur}, we are at {tik}h
      </h2>
    </div>
  );
}

export default Ref;
