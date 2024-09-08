import React from "react";
import visa from '../img/visa-1.svg';
import amazonPayLogo from '../img/amazon-pay-logo.svg';
import paypal from '../img/paypal.svg';
import master from '../img/master.svg';
import appStore from '../img/app_store.png'
import googleStore from '../img/google-play-badge.png'


export default function Footer(){
    return(
        <footer className="footer bg-light p-3 w-100">
        <div className="container d-flex flex-column mb-3">
                <div className="p-2">
                    <h4 className="text-dark">Get The Fresh Cart app</h4>
                    <h6 className="text-secondary">We will send you a link, Open it on your phone to download the app.</h6>
                    <div className="d-flex my-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{width:"80%"}} />
                        <button type="button" class="btn btn-success m-auto" style={{width:"fit-content"}}>Share App Link</button>
                    </div>
                </div>
                <hr />
                <div className="row p-2 text-center m-auto">
                    <div className="payImg row ">      
                        <h6 className=" text-secondary">Payment Partners</h6>
                        <div className="container d-flex justify-content-center align-items-center m-auto my-2">
                            <img src={visa} />
                            <img src={master} />
                            <img src={amazonPayLogo} />
                            <img src={paypal} />
                        </div>
                    </div>
                    <div className="appImg row text-center">
                        <h6 className="text-secondary">Get Delivery With FreshCart</h6>
                        <div className="container d-flex justify-content-center align-items-center m-auto my-2">
                            <img src={googleStore} />
                            <img src={appStore} />
                       </div>
                    </div>
                </div>
                <hr />

                <div className="social-links row d-flex p-2 text-center">
                <h6 className="text-secondary">Our Social Links</h6>
                    <div className="fs-3">
                        <i className="fab fa-facebook p-2" aria-hidden="true"></i>
                        <i className="fab fa-instagram p-2" aria-hidden="true"></i>
                        <i className="fab fa-whatsapp p-2" aria-hidden="true"></i>
                        <i className="fab fa-tiktok p-2" aria-hidden="true"></i>
                        <i className="fab fa-youtube p-2" aria-hidden="true"></i>
                        <i className="fab fa-linkedin p-2" aria-hidden="true"></i>
                    </div>
                </div>
                <hr />
        </div>
    </footer>

    );
}
