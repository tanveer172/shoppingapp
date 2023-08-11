import { useState } from "react";
import Productitem from "./productListitem";
import { useDispatch ,useSelector} from "react-redux";
import { getposts } from "../store/reducer";
const Offers= ()=> {

    const dispatch = useDispatch(); 
    const productlist = useSelector((state) => state.counter.entities);
    //const loadingState = useSelector((state) => state.counter.entities)

    useState(function(){

        dispatch(getposts());


    },[])
    return(
        <div className = "prodlist">
        <Productitem
         data = 
         {productlist}
        ></Productitem>
        </div>
    );
}

export default Offers;