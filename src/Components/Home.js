import React from "react";
import Sliders from "./Sliders";
import AllProducts from "./AllProducts";
import SliderCategory from "./Slidercategory";
export default function Home(){
    return(
    <>
        <Sliders />
        
        <div>
            <h4 className="p-4 ms-4 fs-7 fw-5">Explore Our Wide Range Of Categories!</h4>
            <SliderCategory />
        </div>
        
        <div>
            <h4 className="p-4 ms-4 fs-7 fw-5">Shop The Best Deals Today!</h4>
            <AllProducts />
        </div>
        
    </>
    )
}