import React from "react";
import slider1 from'../img/main-slider-1.jpg'
import slider2 from'../img/main-slider-2.jpg'
import slider3 from'../img/main-slider-3.jpg'
import slider4 from'../img/main-slider-4.jpg'
import slider5 from'../img/main-slider-5.jpg'
export default function Sliders(){
    return(
        <div className="container d-flex justify-content-center align-items-center w-100 p-0 m-auto my-3" id="home-container">
        {/* Carousel Section */}
        <div id="carouselExampleAutoplaying" className="carousel slide w-50 p-0 m-0" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100" alt="slider image 1" />
                </div>
                <div className="carousel-item">
                    <img src={slider2} className="d-block w-100" alt="slider image 2" />
                </div>
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" alt="slider image 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    
        {/* Right-side images */}
        <div className="container w-25 p-0 m-0 d-flex flex-column " id="slider2">
            <img src={slider4} className="d-block w-100 " alt="slider image 4" />
            <img src={slider5} className="d-block w-100" alt="slider image 5" />
        </div>
    </div>
    
    )
}