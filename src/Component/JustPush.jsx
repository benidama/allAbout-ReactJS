import React from "react";

function JustPush() {
  const arr = ["Rayon", "APR", "Gasogi", "Police"];
  return (
    <div>
      <h1>Hello guys, I love you all.</h1>
      <p>
        The first day of 2025, I have a good day with all The Ben funs. This is
        how I have starting my new year.But I was starting with sad news where
        we loose our lovely family member.
      </p>
      <h3>
        This year will help me to grow my skills especial in programming
        technologies.
      </h3>
      <h1 className="text-2xl text-green-950 p-3">
        {arr.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </h1>
      <p>
        Hey, I am new in back-end dev. So, I need your support because you know many things on this journey.
      </p>
    </div>
  );
}

export default JustPush;
