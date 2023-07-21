import { useEffect, useState } from "react";
import Foodlist from "./Foodlist";

const Orders = () => {
    let [orders, setOrders] = useState(null)
    let[message,setMessage]=useState("")

    useEffect(() => {
        
        let foodOrderd = localStorage.getItem("users")
        foodOrderd = JSON.parse(foodOrderd);
        setOrders(foodOrderd);
        setMessage(foodOrderd.length===0? "ORDER SOME FOOD TO SEE HERE" : "This is food orders" )

    }, [])

    return (<div className="orders">
            <h1>{message} </h1>
            {orders && <Foodlist items={orders} ></Foodlist>  }
             

    </div>)
}

export default Orders;