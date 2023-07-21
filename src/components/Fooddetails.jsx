import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom"
import useFetch from "../customHook/useFetch";

const Fooddetails = () => {
  let {id} = useParams();
  let{data : item,pending,error} = useFetch("http://localhost:4000/items/"+id)  
  let history=useHistory() 

  
  let handleDeleteFood=()=>{
    fetch("http://localhost:4000/items/"+id,{method:'DELETE'})
    .then(()=>{alert('The food item is deleted...')})
    history.push("/")

  }

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      {error && <h1>{error}</h1>}
      {pending && <div className="loader"></div>}
      {item && (
        <div className="foodDetails" >
          <img src={item.pic} alt="/" style={{borderRadius:"10px"}} />
          <h1>Name:  {item.foodName} </h1>
          <h3>Price:  {item.price} </h3>
          <h3>Rating: {item.rating} </h3>
          <h3>Type: {item.type} </h3>
          <button onClick={handleDeleteFood} style={{margin:"5px 0px", padding:"2px"}} >Remove food</button>
          <Link to={`/update${id}`} >
          <button style={{width:"82px", padding:"2px"}}>Update food</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Fooddetails;
