import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../Context/cartContext"; 
import Empty from "./EmptyCart";

export default function Cart() {
    const [isLoad, setLoad] = useState(true);
    const [isEmpty, setEmpty] = useState(true);
    const { cart , setCart , getCart , Delete} = useContext(CartContext); 
    const [savedProducts, setSavedProducts] = useState([]);
    // function (total , variable for product)and value
    const totalPrice = savedProducts.reduce((total, item) => {
      return total + (item.price * item.count);
    }, 0);
    
    useEffect(()=>{
        getCart();
        let products = JSON.parse(localStorage.getItem('Products')) || [];
        setSavedProducts(products)
        if (products.length > 0) {
            setEmpty(false);
        } else {
            setEmpty(true); 
        }
    },[getCart])
   
    return (
        <>
            {isEmpty ? <Empty /> :(
              <>
               <table className="container table my-3 ">
               <thead>
                 <tr>
                   <th scope="col">Id</th>
                   <th scope="col">Image</th>
                   <th scope="col">Name</th>
                   <th scope="col">Category</th>
                   <th scope="col">Brand</th>
                   <th scope="col">Count</th>
                   <th scope="col">Price</th>
                   <th scope="col">Actions</th>
                 </tr>
               </thead>
               <tbody className="table-group-divider m-auto">
                 {
                    savedProducts.map((e , index)=>(
                    <tr key={index}>
                        <th scope="row">{e._id.length > 20 ? e._id.slice(20, 25) : 'N/A'}</th>
                        <td><img src={e.product.imageCover}  style={{width:"50px"}}/></td>
                        <td>{e.product.title.split(' ').slice(0,2).join(' ')}</td>
                        <td>{e.product.category.name}</td>
                        <td>{e.product.brand.name}</td>
                        <td>{e.count}</td>
                        <td>EGP{e.price * e.count}</td>
                        <td><button type="button" class="btn btn-danger" onClick={()=>Delete(e.product._id)}>Delete</button></td>
                    </tr>
                    ))
                 }
               </tbody>
                </table>
                <div className="container alert alert-success py-2  px-3 my-4" role="alert">
                    <h4>Check Your Order!</h4>
                    <h5>Total Price:<span className="text-danger"> {totalPrice} EGP</span></h5>
                </div>
              </>
            )}
        </>
    );
}
