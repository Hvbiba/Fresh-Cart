import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductStoreContext } from "../Context/productContext";
import Slider from "react-slick"; 
import LoadingIcon from "./Loading";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [category, setCategory] = useState(null);
  const { getProducts } = useContext(ProductStoreContext);
  const [filtered, setFiltered] = useState([]);
  const [isload, setLoad] = useState(true); 

  async function fetchProduct(productId) {
    try {
      const res = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${productId}`
      );
      setProduct(res.data.data);
      setCategory(res.data.data.category.name); // Set category from product
    } catch (error) {
      console.error(error.message);
    }
  }

  // Filter products by the current product's category
  function filterProduct() {
    if (category && getProducts.length) {
      const filteredProducts = getProducts.filter(
        (product) => product.category.name === category
      );
      setFiltered(filteredProducts);
      setLoad(false)
    }
  }

  useEffect(() => {
    fetchProduct(id); 
  }, [id]);

  useEffect(() => {
    filterProduct(); 
  }, [category, getProducts]); // Ensure it runs when category or getProducts change

  const settings2 = {
    dots: true,              // Show navigation dots
    infinite: true,          // Enable infinite scrolling
    speed: 1000,              // Slide transition speed in milliseconds
    slidesToShow: 5,         // Number of slides to show at once
    slidesToScroll: 3,       // Number of slides to scroll at once
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 2200,     // Autoplay speed (milliseconds)
    arrows: false,           // Hide navigation arrows
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
      {product ? (
        <div className="container d-flex m-auto p-0 w-100" id="product">
          <div id="carouselExampleAutoplaying" className="carousel slide w-50 p-2" data-bs-ride="carousel">
          <div className="carousel-inner">
          {product.images.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <img 
          src={img} 
          alt={product.title} 
          className="d-block w-100" 
          />
          </div>
          ))}
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


          {/* Product Info */}
          <div className="container m-auto px-5" id="product-info">
            <h4 className="text-success">{product.title}</h4>
            <p className="text-muted fs-8 fw-2">{product.description.split(' ').slice(0,12).join(' ')} ...</p>
            <h5>Category: {product.category?.name}</h5>
            <h5>Subcategory: {product.subcategory?.[0]?.name}</h5>
            <h5>Brand: {product.brand?.name}</h5>
            <h5>
              Price: <span className="text-danger">EGP {product.price}</span>
            </h5>
            <h5>Available Quantity: {product.quantity}</h5>
            <h5>
              Average Rating: {product.ratingsAverage}{" "}
              <i className="fa fa-star text-warning" aria-hidden="true"></i>
            </h5>
            <h5>Number of Ratings: {product.ratingsQuantity}</h5>
          </div>
        </div>
      ) : (
        <LoadingIcon />
      )}

      {isload ? <LoadingIcon /> : (
        <div className="container my-3 p-3" id="other-products">
          <h4 className="my-2 p-3">Other products in the <span className="text-success">{category} </span>category:</h4>
          <Slider {...settings2}>
            {filtered.map((prod, index) => (
              <div className="card text-center p-1 m-1" key={index}>
                <img src={prod.imageCover} alt={prod.name} className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title">{prod.title.split(' ').slice(0, 2).join(' ')}</h6>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
