import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const CardProduct=styled(Box)`
    display:grid;
    grid-template-columns: auto auto auto auto auto;
    gap:60px;
    padding-left:20px ;
    margin-top: 100px;
    height: 150px;
    width: 25%;
    margin-left: 5%;
    margin-right: 5%;
`;
const CardImage=styled('img')({
    // padding:'0 0 0 0',
    // margin:'0 0 0 0',
    width:'200px',
    height:'200px',

});
const DeleteButton=styled('Button')({
    marginTop:'12px',
    marginLeft:'90%',

    color:'#2874f0',
})


const ProductCard=({product})=>{
    return(
        <CardProduct>
            {
            product.map((productItems)=>{
                return(
                    <Box>
                        <Link to ={`products/${productItems.id}`} style={{textDecoration:'none', color:'inherit'}}>
                        <CardImage src={productItems.image} alt="Product"/>                        
                        <Typography style={{marginTop:'5%'}}>{productItems.title}</Typography></Link>
                        <Typography style={{marginTop:'20%'}}>${productItems.price}</Typography>
                        <DeleteButton style={{marginTop:'20%'}}><DeleteIcon/></DeleteButton>
                    </Box>
                )
                })
            }
            
        </CardProduct>
    )}
export default ProductCard;