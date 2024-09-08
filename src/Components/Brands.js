import React, { useContext, useEffect, useState } from "react";
import { BrandsContext } from '../Context/brandContext'; 
import LoadingIcon from "./Loading";

export default function Brands() {
  const { brands } = useContext(BrandsContext);
  const [isLoad, setLoad] = useState(true); // Start with true for initial loading

  useEffect(() => {
    if (brands.length > 0) {
      setLoad(false); // Set loading to false once brands are available
    }
  }, [brands]);

  return (
    <>
      {isLoad ? (
        <LoadingIcon /> // Display the loading icon while loading
      ) : (
        <div className="container p-4 my-2" id="display-brands">
          {brands.map((e , index) => (
            <div className="card p-2 my-1" key={index}>
              <img src={e.image} alt={e.name} />
              <div className="card-body text-center">
                <h6 className="card-text text-success">{e.name}</h6>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
