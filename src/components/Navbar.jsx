
import { useState } from 'react';
import { Link } from 'react-router-dom';
import food from '../pizzafood.png';


function Navbar()
{
   let [searchKey,setSearchKey]= useState("")
    return (
        <nav className="navbar">
           <div className="logo">
           <Link to="/"><img src={food} alt="logo" /></Link>
            <h1>Food Spyders</h1>
           </div>
           
           <div className="searchbar">
           <input type="search" value={searchKey}  onChange={(e)=>setSearchKey(e.target.value)  }  />
           <Link to={`/searchfood${searchKey}`}>
            <button>Search</button>
           </Link>
           </div>

           <div className="navlinks">
            <Link to="/addfood">Add Food</Link>
            <Link to="/orders">Orders</Link>
           </div>
        </nav>
    );
}
 
export default Navbar;
