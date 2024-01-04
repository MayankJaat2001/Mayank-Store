import styled from "@emotion/styled";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material"

const Component=styled(Box)`
    height:70vh;
    width:90vh;
    display:flex;
`;
const LeftComponent=styled(Box)`
    background-color:#2874f0 ;
    height:100%;
    width:100%;
`;
const RightComponent=styled(Box)`
    // display:flex;
    margin: 5% 2%;

`;
const TextData=styled(TextField)`
    margin-bottom:5%;
`

const ProductDialog=({open ,setOpen})=>{
    const handleClose=()=>{
        setOpen(false);
    }
    
    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <LeftComponent>
                    <Typography style={{fontSize:28,margin: '12px 12px'}}>Please Enter Image URL, Title, Description and Price of your Product...</Typography>
                    <img src="https://cdn.learnwoo.com/wp-content/uploads/2016/11/Adding-Products_Cropped.png" alt="add" width={155} style={{margin:'45% 85% 10% 20%'}}/>
                </LeftComponent>
                <RightComponent>
                    <TextData id="outlined-required" label="Image" style={{width:'100%'}}/>
                    <TextData id="outlined-required" label="Title" style={{width:'100%'}}/>
                    <TextData id="outlined-multiline-static" label="Description" multiline rows={4} style={{width:'100%'}}/>
                    <TextData id="outlined-required" label="Price" style={{width:'100%'}} type="number"/>
                    
                    <Button variant="contained" style={{marginTop:'10%'}}>Save</Button>
                </RightComponent>
            </Component>
    </Dialog>
    )
    
}
export default ProductDialog;