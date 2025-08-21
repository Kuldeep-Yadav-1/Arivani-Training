"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import api from "../../api/apiUrl";

// export default function SingleProduct() {
function SingleProduct() {
  const [singleBookData, setSingleBookData] = useState()
  const [loading, setLoading] = useState(false)

  const params = useSearchParams();
  const product_id = params.get("id");
  console.log(product_id, "productID"); 

  useEffect(()=>{
    const fetchBookData = async ()=>{
      try {
        // const res = await api.get("/api/single-product");
        // return 
        
      } catch (error) {
        console.log("error occured :",error);
        
      }
    }

  },[])

  return (
    <div className="mt-[25%] text-center text-3xl">Single Product Page</div>
  );
}

export default function SingleProductPage() {
  return (
    <Suspense>
      <SingleProduct />
    </Suspense>
  );
}
