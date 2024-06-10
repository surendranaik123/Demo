import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import View from './View';
import Page from './Page';
function App() {
  return (
    <div >
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<View/>}/>
    <Route path='/page' element={<Page/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
