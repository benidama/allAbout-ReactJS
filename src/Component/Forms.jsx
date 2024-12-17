import { useState } from "react";

function Forms() {
  const [inputs, setInputs] = useState({});
  const submitWork = (el) => {
    el.preventDefault();
    console.log(inputs);
  };
  const inputValue = (tus) => {
    const names = tus.target.name;
    const values = tus.target.value;
    setInputs((out) => ({ ...out, [names]: values }));
  };
  return (
    <div>
      <form action="" onSubmit={submitWork} className="flex flex-col">
        <h1>React form</h1>
        <label htmlFor="nme">Write your name</label>
        <input
          type="text"
          name="names"
          value={inputs.names || ""}
          onChange={inputValue}
          placeholder="name plse"
        />
        <label htmlFor="email">Enter your email</label>
        <input
          type="text"
          name="email"
          value={inputs.email}
          onChange={inputValue}
          placeholder="email"
        />
        <label htmlFor="age">Enter your age</label>
        <input
          type="number"
          name="age"
          value={inputs.age}
          onChange={inputValue}
          placeholder="your age plse"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Forms;
