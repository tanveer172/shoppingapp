import React from "react";
import { decrement,increment,incrementusingApi } from "../store/reducer";
import { useDispatch,useSelector } from "react-redux";
const Productitem = (props) => {
    console.log(props.data);
    let prods = props.data;
    //const count = useSelector((state) => state.Counter.value)
    const dispatch = useDispatch();

    const prodlist = prods.map((Product)=>
        <div className="card-layout">
        <div className="badge">Hot</div>
        <img className="product-img" src={Product.image} alt="No image Found"/>
        <div>
        <p>{Product.category}</p>
        <p className="product-desc">{Product.title}</p>
        <p className="price">&#x20B9; {Product.price}</p>
        <div className="cart-btn" onClick={()=>{dispatch(incrementusingApi(Product))}}>Add To Cart</div>
    </div>
    </div>);
    return prodlist
        
        

       
    
    ;
}

export default Productitem;