// MyContext.js
import React, { createContext, useEffect, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json); // Update the state with the fetched data
        console.log(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(data); // Log the updated data

  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
