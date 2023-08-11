import { useSelector,useDispatch } from "react-redux";
import { decrement } from "../store/reducer";

const Cart = () =>{
 const cartitems = useSelector((state) => state.counter.cartItems);
 const dispatch = useDispatch();
//  const decrementfunc = (id)=>{
//     dispatch(decrement(cra))
//  }
 console.log(cartitems);
 const cartUi = cartitems.map((cartItem) =><div key={cartItem.id} className="cartitem-card-layout">
    <div className="cart-card-container">
        <img className="cart-img" src={cartItem.image} alt="No image Found"/>
        <div className="cart-card-part">
            <p className="cart-desc">{cartItem.category}</p>
            <p className="cart-desc">{cartItem.title}</p>
            <p className="price">Price : &#x20B9; {cartItem.price}</p>
            <div className="cart-rm-btn" onClick={()=>{dispatch(decrement(cartItem.id))}}>Remove Cart</div>
        </div>
        
 </div></div>)
    return cartUi


};

export default Cart;