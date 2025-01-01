import React, { useState, useEffect } from "react";

function Api() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);

  const getResepData = async () => {
    setFetching(true);
    try {
      const response = await fetch("https://masak-apa-tomorisakura.vercel.app/api/recipes");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setFetching(false);
    }
  };

  useEffect(() => {
    getResepData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Daftar Resep</h1>
      {isFetching && <p>Refreshing data...</p>}
      <ul>
        {data.map((recipe, index) => (
          <li key={index}>{recipe.title}</li>
        ))}
      </ul>
      <button onClick={getResepData}>Refresh Data</button>
    </div>
  );
}

export default Api;
