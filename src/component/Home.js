import { useEffect, useState } from "react";
import Productitem from "./productListitem";

 const Home =()=>{

    const CarouselData = [
        {
          headerText: null,
          subText: 'Sub Text One',
          image: 'https://picsum.photos/300/300',
        },
        {
          headerText: 'Header Text Two',
          subText: null,
          image: 'https://picsum.photos/1200/800',
        },
        {
          headerText: null,
          subText: null,
          image: 'https://picsum.photos/720/720',
        },
        {
          headerText: 'Header Text Four',
          subText: 'Sub Text Four',
          image: 'https://picsum.photos/1920/1080',
        },
        {
          headerText: 'Header Text Five',
          subText: 'Sub Text Five',
          image: 'https://picsum.photos/480/360',
        },
      ]
      const [bgimage,setbgimage] = useState("url(" + CarouselData[0].image + ")");
      let index = 0;
      const [products , setproducts] = useState([]);
      const fetchproducts = async()=>{
       const response = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>json);
            await setproducts(response);
            await console.log("Fetching products...",products);
      }

      useEffect(() => {
            fetchproducts();
            //console.log("Fetching products...",products);
      },[]);
    

    return(
       <>
       <div className = "banner-container" >
        <div className = "banner">
        </div>
       </div>
       <div className = "prodlist">
          <Productitem data={products} />
          </div>
       </>
    )
};
export default Home;