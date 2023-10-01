import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import useInternetConn from './CustomHooks/useInternetConn';

export const Header = ()=>{
    
    const count = useSelector((state) => state.counter.value);
    const internetConn = useInternetConn();
    let conntext = "Network Not Available"

    if(internetConn){
        conntext ="Network  Available";
    }
    return(

        <div className="flex w-full h-9 bg-[#FDE5EC] font-sans">
<span className="title">Botique</span>
<div className="menu">
<Link className = "menu-item" to="/" >Home</Link>
<Link className = "menu-item" to >Shop by category</Link>
<Link to="/offers" className = "menu-item" >Offers <i className="fa-solid fa-tag"></i></Link>
</div>
<div className="rigt-menu-options">
    <Link className = "menu-item" >Login</Link>
    <Link to="/cart" className = "menu-item" >Cart({count})</Link> 
    <span>internet connection {conntext}</span>
</div>
</div>
    )
};