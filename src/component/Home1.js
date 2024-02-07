// Home1.js
import React from 'react';
import Home from './Home';

function Home1(props) {
    console.log(props.message);
  return (
    <div>
      <p>Content from Home1:</p>
      <Home/> 
      <p>{props.message}</p>
    </div>
  );
}

export default Home1;
