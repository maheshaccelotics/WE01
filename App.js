import React from 'react'
/*import PropTypes from 'prop-types'*/
import Home from './compoonents/Home'
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import Product from './compoonents/Product';
import Blog from './compoonents/Blog';
import Footers from './compoonents/Footers';



function App(props) {
  return (
    <>
  
    <BrowserRouter>
    
                 <Routes>
                    <Route path='/technologies' element={<Home/>}></Route>
                    {/* <Route path='/' element={<Home/>}></Route> */}
                    <Route path="/" element={<Navigate to="/technologies" replace={true} />}></Route>
                    <Route path="/product" element={<Product/>}></Route>
                    <Route path="/blog" element={<Blog/>}></Route>
                    <Route path="/product" element={<Product/>}></Route>
                    
                  </Routes>

      

               
    
    
    </BrowserRouter>
    <Footers/>
    </>
  );
}

App.propTypes = {}

export default App
