import React, { useContext, useState, useEffect } from "react";
import { CategoryContext } from '../Context/categoryContext'; 
import Slider from "react-slick"; 
import LoadingIcon from "./Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderCategory() {
    const { categories } = useContext(CategoryContext);
    const [isLoad, setLoad] = useState(true);

    useEffect(() => {
        if (categories.length >0) {
            setLoad(false);
        }
    }, [categories]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2300,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            {
                isLoad ? (
                    <LoadingIcon />
                ) : (
                    <div className="container my-3" id="category-sliders">
                        <Slider {...settings}>
                            {categories.map((e , index) => (
                                <div className="card p-2" key={index}>
                                    <img src={e.image} alt={e.name} className="w-100" />
                                    <div className="card-body text-center">
                                        <h6 className="card-text text-success">{e.name}</h6>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                )
            }
        </>
    );
}
