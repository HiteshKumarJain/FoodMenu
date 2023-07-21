import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import Foodlist from "./Foodlist";

const Searchfood = () => {

    let {searchKey}=useParams();
    let [items,setItems]=useState(null)
    let[pending,setPending]=useState(true)
    let [error,setError]=useState(null)

    useEffect(()=>{
        setTimeout(() => {
            fetch("http://localhost:4000/items")
        .then((x)=> {
            if (x.ok=== true )
            { 
                return x.json()
            }
            else
            {
                throw Error("Data not found")
            }
        })
        .then((y)=>{setItems (y);setPending(false)})
        .catch((e)=>{setError(e.message);setPending(false)})}, 
        1000);
    },[])

    return (  
        <div>
            <h1>This is search food   {searchKey}</h1>
            {error && <h1>{error}</h1> }
            {pending &&  <div className="loader"></div>  }
           {items && <Foodlist items={items.filter((food)=>{ return food.foodName.toUpperCase().includes(searchKey.toUpperCase())})} />}
        </div>
    );
}
 
export default Searchfood;