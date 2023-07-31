import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";

export const Header = ()=>{
    
    const count = useSelector((state) => state.counter.value)
    return(

        <div className="header">
<span className="title">Botique</span>
<div className="menu">
<Link className = "menu-item" to="/" >Home</Link>
<a className = "menu-item" >Shop by category</a>
<Link to="/offers" className = "menu-item" >Offers <i className="fa-solid fa-tag"></i></Link>
</div>
<div className="rigt-menu-options">
    <Link className = "menu-item" >Login</Link>
    <Link to="/cart" className = "menu-item" >Cart({count})</Link> 
</div>
</div>
    )
};