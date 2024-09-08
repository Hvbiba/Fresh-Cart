import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/cartContext";

export default function AddAlert() {
    const { IsAdded } = useContext(CartContext);

    useEffect(() => {
        if (IsAdded) {
            const toastElement = document.getElementById('alertToast');
            if (toastElement) {
                if (window.bootstrap) {
                    const toast = new window.bootstrap.Toast(toastElement, {
                        autohide: true,
                        delay: 2000 // Adjust delay if needed
                    });
                    toast.show();
                } else {
                    console.error('Bootstrap is not loaded');
                }
            }
        }
    }, [IsAdded]);

    if (!IsAdded) {
        return null; 
    }

    return (
        <div 
            className="toast align-items-center text-bg-success border-0 my-1" 
            role="alert" 
            aria-live="assertive" 
            aria-atomic="true"
            id="alertToast"
        >
            <div className="d-flex">
                <div className="toast-body">
                    {IsAdded}
                </div>
                <button 
                    type="button" 
                    className="btn-close btn-close-white me-2 m-auto" 
                    data-bs-dismiss="toast" 
                    aria-label="Close"
                ></button>
            </div>
        </div>
    );
}
