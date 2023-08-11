import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function SliderComponent() {
    const [imageNum, setImageNum] = useState(1);
    const scwidth = window.innerWidth;
    const sliderImages = [
       {
          url: "https://sslimages.shoppersstop.com/sys-master/root/hae/h86/30406694895646/footwear_top-banner-msite_eoss-2023.jpg",
       },
       {
          url: "https://sslimages.shoppersstop.com/sys-master/root/h0b/hba/30383587524638/watches_top-__main-carousel-hp-page-2023-07-12banner-msite.jpg",
       },
       {
          url: "https://sslimages.shoppersstop.com/sys-master/root/h4c/hb6/30383587655710/westernwear_top-banner-web_hp-main-caeousl23127.jpg",
       },
       {
          url: "https://sslimages.shoppersstop.com/sys-master/root/hda/he6/30383586869278/indianwear_top-banner-web_main-carousel-hp-page-2023-07-12.jpg",
       },
       {
          url: "https://sslimages.shoppersstop.com/sys-master/root/h7f/hc5/30416999841822/EOSS-Main-Banner-Web--main-carousel--home-page_2023-07-17-1.jpg",
       },
    ];
    const [sliderimgs,setsliderimgs] =useState([]);

    return (
       <div style={{margin:50}}>
          <SimpleImageSlider
             width={scwidth}
             height={450}
             images={sliderImages}
             showBullets={true}
             showNavs={false}
             autoPlay={true} 
             onStartSlide = {(index, length) => {
                setImageNum(index);
             }}
             onClick={()=>{alert("Slider");}}
                autoPlayDelay = {3}
          /> 
       </div>
    );
 }