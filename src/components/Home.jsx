import { useEffect } from "react";
import useFetch from "../customHook/useFetch";
import Foodlist from "./Foodlist";

const Home = () =>
{
  let{data : items,pending,error} = useFetch("http://localhost:4000/items")   
  useEffect(()=>{
    if(localStorage.getItem("users")===null)
    {
      localStorage.setItem("users","[]");
    }

  },[])

    return ( 
        <div className="home">
            {error && <h1>{error}</h1> }
            {pending &&  <div className="loader"></div>  }
           {items && <Foodlist items={items} title="All Food" />}
            {/* {items && <Foodlist items={ items.filter((food)=>{return food.type==="MainCourse"})}   title="Main Course"/>}
            {items && <Foodlist items={ items.filter((food)=>{return food.type==="Sweet"})}   title="Sweets"/>} */}

        </div>
     );
}

export default Home; 