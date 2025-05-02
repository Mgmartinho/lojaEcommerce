import {Routes, Route} from 'react-router-dom';
import App from './App';

 function MainRoutes(){
    return(
        <Routes>
            <Route element={<App/>} path="/" />
            <Route path="/products" element={<h1>Products</h1>} />
            <Route path="/products/:id" element={<h1>Product Details</h1>} />
            <Route path="/cart" element={<h1>Cart</h1>} />
            <Route path="/checkout" element={<h1>Checkout</h1>} />
        </Routes>
    )

}

export default MainRoutes;