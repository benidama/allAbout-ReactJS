import React, { useEffect, useState } from "react";

function Effect() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const repons = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await repons.json();
        setResults(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div className="text-red-600 text-2xl p-2">
        Something went wrong, please double check
      </div>
    );
  }
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
