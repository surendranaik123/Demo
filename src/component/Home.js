import React, { useContext, useEffect, useState } from 'react';
import Home1 from './Home1';
import { MyContext } from './MyContext';

function Home() {
 const [data, setData] = useState('naik');

const { products } = useContext(MyContext);
  console.log({products});
  return (
    <div>
      <Home1 message={`Hello from parent! Data: ${data}`} />
      <h2>Home</h2>
    
      
 
    {/* <div>
      <h2>Product Details</h2>
     
        {products.map((product, index) => (
          <div key={index}>
            <h1>Name:{product.name}</h1>  
            <h4>Price:{product.price}</h4> 
          </div>
        ))}
     
    </div>
  */}


    </div>
  );
}

export default Home;


