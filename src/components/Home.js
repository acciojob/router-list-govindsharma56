import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{
         let arr=[1,2,3];
     return(
        <div>
           <h1>Item List</h1>
             { arr.map((item,index)=>(
                <ul>
                <Link to={`/items/${index+1}`}><li>Item{item}</li></Link>
                </ul>
             ))}
        </div>
     )
}
export default Home;