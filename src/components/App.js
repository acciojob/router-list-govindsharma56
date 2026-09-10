
import React from "react";
import './../styles/App.css';
import {Routes,Route} from 'react-router-dom'
import Home from "./Home";
import Item from "./Item";
const App = () => {
  return (
    <div>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/items/:id' element={<Item/>}/>
           </Routes>
    </div>
  )
}

export default App
