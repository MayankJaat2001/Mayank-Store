import './App.css';
import NavBar from './Components/NavBar';
import { Box} from '@mui/material';
import MyProducts from './Components/MyProducts';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import ProductDetails from './Components/ProductDetails';

function App() {  
  
    
  return (
    <Box>
        <BrowserRouter>
          <NavBar/>
            <Box>
              <Routes>
                <Route path="/" element={<MyProducts/>}/>
                <Route path="/products/:id" element={<ProductDetails/>}/>
              </Routes>
            </Box>
        </BrowserRouter>
    </Box>
  );
}

export default App;
