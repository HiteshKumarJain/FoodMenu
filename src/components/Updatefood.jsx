import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";


const Updatefood = () => 
{
    let {id}=useParams();
    let history=useHistory();
   let[foodName,setFoodName]=useState("");
   let[price,setPrice]=useState("");
   let[rating,setRating]=useState("");
   let[type,setType]=useState("");
   let[pic,setPic]=useState("");

   useEffect(()=>{
    fetch("http://localhost:4000/items/"+id)
    .then((res)=>res.json())
    .then((data)=>{
        setFoodName(data.foodName);
        setPrice(data.price);
        setRating(data.rating);
        setPic(data.pic);
        
    })
   },[])

    let handleUpdateFood=(e)=>{
        e.preventDefault()
        let updatedFood={
            foodName,
            price,
            rating,
            pic,
            type
                    }

        fetch("http://localhost:4000/items/"+id,{
                                                method:"PUT",
                                                headers:{"Content-Type":"application/json"},
                                                body:JSON.stringify(updatedFood)
                                            } )
        .then(()=>{alert ("Food is Updated")
                    // history.push("/")/* push method redirects to the path mentioned */
                    history.goBack() /*go back method goes back to previous page */
                   })
    }


    return ( <div className="add-food">
        <h1>UPDATE FOOD </h1> <hr />
        <div className="newelements">
            <form onSubmit={handleUpdateFood}>
               <label> Food Name</label> <input type="text"  value={foodName} onChange={(e)=>{setFoodName(e.target.value)}}/>
               <label> Price</label>     <input type="number" step="10" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                <label> Type</label>    <div className="newelements-input"> <input type="radio" name="category" id="m"  value="MainCourse" onClick={(e)=>{setType(e.target.value)}} /><label htmlFor="m">MainCourse</label>
                                         <input type="radio" name="category" id="s" value="Sweet" onClick={(e)=>{setType(e.target.value)}}/><label htmlFor="s">Sweet</label>
                                         <input type="radio" name="category" id="mc" value="Multicusine"  onClick={(e)=>{setType(e.target.value)}}/><label htmlFor="mc">Multicusine</label>
                                         <input type="radio" name="category" id="su" value="Soup" onClick={(e)=>{setType(e.target.value)}} /><label htmlFor="su">Soup</label>
                                         <input type="radio" name="category" id="sn" value="Snacks" onClick={(e)=>{setType(e.target.value)}}/><label htmlFor="sn">Snacks</label>
                                         <input type="radio" name="category" id="d" value="Dessert" onClick={(e)=>{setType(e.target.value)}}/><label htmlFor="d">Dessert</label></div>
                <label> Rating</label>   <input type="number" min="1" max="10" step="0.1" value={rating} onChange={(e)=>{setRating(e.target.value)}} />
                <label >Picture</label>  <input type="url"  value={pic} onChange={(e)=>{setPic(e.target.value)}}/>
                <input type="submit" value="Update Food" />
                
            </form>
        </div>
    </div> );
}
 
export default Updatefood;