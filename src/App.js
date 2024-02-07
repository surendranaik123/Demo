import React, { useReducer} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import { MyContext, MyProvider } from "./component/MyContext";
import UseStateandUseeffect from "./component/UseStateandUseeffect";
import Home1 from "./component/Home1";
import ReduxUi from "./component/ReduxUi";


const App = () => {

  return (
    <> <MyProvider>
          <BrowserRouter>
            
            <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/home" element={<Home1/>} /> 
            <Route path="/p" element={<UseStateandUseeffect/>} /> 
            <Route path="/pa" element={<MyProvider/>} /> 
            <Route path="/ui" element={<ReduxUi/>} /> 
            </Routes>
          </BrowserRouter>
            
          </MyProvider>
    </>
  );
};

export default App;

// import React from 'react'
// import UseStateandUseeffect from './component/UseStateandUseeffect'

// export default function App() {
//   return (
//     <div>
//       <UseStateandUseeffect/>
//     </div>
//   )
// }
