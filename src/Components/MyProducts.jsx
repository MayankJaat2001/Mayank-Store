import ProductCard from "./ProductCard";
import { useState , useEffect } from "react";
import { Box } from "@mui/material";
import ProductDetails from "./ProductDetails";

const MyProducts=()=>{
    const[product,setProduct]=useState([]);
    let componentMounted=true;
    useEffect(()=>{
        const getproduct=async()=>{
            const response=await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
              setProduct(await response.clone().json());
            }
          
          return()=>{
            componentMounted=false;
            
          }
        }
          getproduct();

    },[]);
    return(
      <Box>
       <ProductCard product={product}></ProductCard> 
       </Box>
    )
}
export default MyProducts;