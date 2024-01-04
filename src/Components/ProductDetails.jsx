import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const Component=styled(Box)`
    display:flex;
`;

const RightComponent=styled(Box)`
    margin: 10% 0 0 0; 
`;
const LeftComponent=styled(Box)`
    margin-right:10%
`;
const Image=styled('img')({
    margin: '12% 0 0 12%',
    height: 490
})

const ProductDetails=()=>{
    const {id} =useParams();
    const[product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const getproduct=async()=>{
            setLoading(true);
            const response=await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
          
          getproduct();

    },[]);

    const Loading=()=>{
        return(
            <>
                Loading....
            </>
        )
    }

    const ShowProduct=()=>{
        return(
            <Component>
                <LeftComponent>
                    <Image src={product.image} alt={product.title}/>
                </LeftComponent>
                <RightComponent>
                    <Typography style={{fontSize:28,textTransform:'uppercase',color:'grey',marginBottom:'1%'}}>{product.category}</Typography>
                    <Typography style={{fontWeight:600 , fontSize:24, marginBottom:'2%'}}>{product.title}</Typography>
                    <Typography style={{fontSize:18, marginBottom:'3%'}}>{product.description}</Typography>
                    <Typography style={{fontWeight:550}}> Rating { product.rating && product.rating.rate} <StarIcon style={{fontSize:16,color:'#FF9529'}}/></Typography>
                    <Typography style={{fontWeight:600, fontSize:16,marginTop:'5%'}}> Price: $ {product.price}</Typography>

                </RightComponent>
            </Component>
        )
    }
    return(
        <Box>
            {loading?<Loading/>:<ShowProduct/>}
        </Box>
    )
   
}
export default ProductDetails;