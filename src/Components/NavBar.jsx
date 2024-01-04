import styled from "@emotion/styled";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import ProductDialog from "./ProductDialog";
import { useState } from "react";
import { Link  } from 'react-router-dom';

const Component=styled(Box)`
    background-color:Black;
    height:40%;
    display:flex;
`;

const Image=styled('img')({
    height:'62%',
    width:'62%',
    margin:'52px 80% 12px 40px'

});
const BothButton=styled(Box)`

    margin-left:60%;
    margin-top:10%;
    margin-bottom:10%;
`

const NavBar=()=>{
    const [open,setOpen]=useState(false);
    const openDialog=()=>{
        setOpen(true);
    }
    const [open1,setOpen1]=useState(false);
    const handleClick=(event)=>{
        setOpen1(event.currentTarget);
    }
    const handleClose=()=>{
        setOpen1(false);
    }
    return(
        
        <Component>
                <Link to={'/'} style={{textDecoration:'none'}}>
                <Image src="https://play-lh.googleusercontent.com/0NQKcm25EatPSzMaSUKxBTsLEzJJ-IFCeGoYYk3xVUSa5i51wJEFVAdKsh7stjhY-w=w240-h480-rw" alt="logo"/>
                </Link>
            <BothButton>   
                <Button style={{marginRight:42}} onClick={handleClick}>Sort By</Button>
                <Menu
        id="basic-menu"
        anchorEl={open1}        
        open={Boolean(open1)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={handleClose}>Price (Low to High)</MenuItem>
        <MenuItem onClick={handleClose}>Price (High to Low)</MenuItem>
      </Menu>
                <Button onClick={()=>openDialog()}>Add Products</Button>
            </BothButton>
        <ProductDialog open={open} setOpen={setOpen}/>
        </Component>
        
    )
}
export default NavBar;