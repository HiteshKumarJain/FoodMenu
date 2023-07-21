import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


const Addfood = () => 
{
    let history=useHistory();
    let food=useRef();
    let rate=useRef();
    let view=useRef();
    let picture =useRef();

    let handleAddFood=(e)=>{
        e.preventDefault()
        let newFood={
                        foodName:food.current.value,  
                        price:rate.current.value,
                        rating:view.current.value,
                        type:"",
                        pic:picture.current.value
                    }
        let option=document.getElementsByName("category")
        for(let i=0;i<option.length;i++)
        {
            if(option[i].checked)
            {
                newFood.type=option[i].value; 
            }
        }
        fetch("http://localhost:4000/items",{
                                                method:"POST",
                                                headers:{"Content-Type":"application/json"},
                                                body:JSON.stringify(newFood)
                                            } )
        .then(()=>{alert ("Food is Added")
                    // history.push("/")/* push method redirects to the path mentioned */
                    history.goBack() /*go back method goes back to previous page */
                   })
    }



    return ( <div className="add-food">
        <h1>ADD NEW FOOD </h1> <hr />
        <div className="newelements">
            <form onSubmit={handleAddFood}>
               <label> Food Name</label> <input type="text"  ref={food}/>
               <label> Price</label>     <input type="number" step="10" ref={rate} />
                <label> Type</label>    <div className="newelements-input"> <input type="radio" name="category" id="m"  value="MainCourse" /><label htmlFor="m">MainCourse</label>
                                         <input type="radio" name="category" id="s" value="Sweet"/><label htmlFor="s">Sweet</label>
                                         <input type="radio" name="category" id="mc" value="Multicusine" /><label htmlFor="mc">Multicusine</label>
                                         <input type="radio" name="category" id="su" value="Soup" /><label htmlFor="su">Soup</label>
                                         <input type="radio" name="category" id="sn" value="Snacks" /><label htmlFor="sn">Snacks</label>
                                         <input type="radio" name="category" id="d" value="Dessert"/><label htmlFor="d">Dessert</label></div>
                <label> Rating</label>   <input type="number" min="1" max="10" step="0.1" ref={view}/>
                <label >Picture</label>  <input type="url" ref={picture} />
                <input type="submit" value="Add Food" />
                
            </form>
        </div>
    </div> );
}
 
export default Addfood;