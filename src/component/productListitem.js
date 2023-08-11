import React, { useState } from "react";
import { decrement,increment,incrementusingApi } from "../store/reducer";
import { useDispatch,useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const Productitem = (props) => {
    console.log(props.data);
    let prods = props.data;
    //const count = useSelector((state) => state.Counter.value)
    const dispatch = useDispatch();
    const [wishlisted,setwishlisted] = useState(false);

    const prodlist = prods.map((Product)=>
        <div className="card-layout">
        <div className="badge">Hot</div>
        <div className="wishlisted-icon" onClick={()=>setwishlisted(!wishlisted)}><FontAwesomeIcon className="wishlisted-ic" icon={faHeart} /></div>
        <img className="product-img" src={Product.image} alt="No image Found"/>
        <div>
        <p>{Product.category}</p>
        <p className="product-desc">{Product.title}</p>
        <p className="price">&#x20B9; {Product.price}</p>
        <div className="cart-btn" onClick={()=>{dispatch(increment(Product))}}>Add To Cart</div>
    </div>
    </div>);
    return prodlist
        
        

       
    
    ;
}

export default Productitem;