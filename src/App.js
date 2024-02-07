
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

import UseStateandUseeffect from "./component/UseStateandUseeffect";
import Home1 from "./component/Home1";
import ReduxUi from "./component/ReduxUi";


const App = () => {

  return (
    <> 
          <BrowserRouter>
            
            <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/home" element={<Home1/>} /> 
            <Route path="/p" element={<UseStateandUseeffect/>} /> 
         
            <Route path="/ui" element={<ReduxUi/>} /> 
            </Routes>
          </BrowserRouter>
            
         
    </>
  );
};

export default App;
