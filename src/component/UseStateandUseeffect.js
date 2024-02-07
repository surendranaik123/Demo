import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function UseStateandUseeffect() {
  //useState
  const [data, setData] = useState("");

  //useeffect
//   useEffect(() => {
//     fetch("https://dummyjson.com/products/1")
//       .then((res) => setData(res))
//       .then((json) => console.log(json));
//   }, []);

// useEffect(() => {
//     axios.get("https://dummyjson.com/products/1")
//       .then((res) => setData(res))
//       .catch((error) => {
//         console.error("Error fetching product data:", error);
//       });
//   }, []);

useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform asynchronous operation using axios
        const response = await axios.get('https://dummyjson.com/products');
        // Extract data from the response
        const result = response.data;

        // Set the state with the fetched data
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return <div>UseStateandUseeffect</div>;
}
