import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

function Effect() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function getData() {
      const repons = await fetch(url);
      const data = await repons.json();
      setResults(data);
    }
    getData();
    console.log(results);
  }, []);
  return (
    <div>
      <h1>Data fetching from API</h1>
    </div>
  );
}

export default Effect;
