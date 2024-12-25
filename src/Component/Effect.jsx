import React, { useEffect, useState } from "react";

// const url = "https://jsonplaceholder.typicode.com/posts";

// interface User {
//     id: number;
//     name: string;
//     email: string;
//   }

function Effect() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function getData() {
      const repons = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await repons.json();
      setResults(data);
    }
    getData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-green-950 m-3">Data fetching from API</h1>
      <ul className="text-left">
        {results.map((posts) => {
          return <li key={posts.id}>{posts.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Effect;
