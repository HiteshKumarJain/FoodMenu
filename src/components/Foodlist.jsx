import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../customHook/useFetch";
const Foodlist = ({ items, title }) => {

   
    let [orderId, setOrderId] = useState([]);

    useEffect(() => {
        let orders = localStorage.getItem("users");
        orders = JSON.parse(orders);
        let o = orders.map((a) => a.id)
        setOrderId(o);
    }, [])


    let handleOrder = (id) => {
        fetch("http://localhost:4000/items/" + id)
            .then((res) => res.json())
            .then((data) => {
                let newOrders = localStorage.getItem("users");
                newOrders = JSON.parse(newOrders);
                newOrders.push(data);
                newOrders = JSON.stringify(newOrders)
                localStorage.setItem("users", newOrders)
                alert("Your delecious food has been added")
            })
    }

    let cancelOrder =(id)=>{
        let canceledOrders=localStorage.getItem("users");
        canceledOrders=JSON.parse(canceledOrders);
        let start =canceledOrders.findIndex((v)=>{return v.id==id});
        canceledOrders.splice(start,1);
        canceledOrders=JSON.stringify(canceledOrders);
        localStorage.setItem("users",canceledOrders)
        alert("Your order has been cancelled")
        window.location.reload()
    }


return (
    <div id="Allfoodlist">
        <h1 className="title">{title}</h1>
        <div className="foodList">
            {
                items.map((food) => {
                    return (

                        <div className="food" key={food.foodName}>
                            <Link to={`/fooddetails${food.id}`}>
                                <img src={food.pic} alt="pic" />
                                <h1>{food.foodName}</h1>
                                <h3>{food.price}</h3>
                            </Link>
                            {orderId.includes(food.id) ? <button onClick={() => { cancelOrder(food.id) }} >Remove Order</button> : <button onClick={() => { handleOrder(food.id) }}>Add Order</button>}
                        </div>

                    )
                })
            }
        </div>
        {/* {console.log(typeof items)} */}
    </div>
);
}

export default Foodlist;