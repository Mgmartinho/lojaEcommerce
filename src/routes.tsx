import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Success from './pages/Success';

 function MainRoutes(){
    return(
        <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<Cart/>} path="/" />
            <Route element={<Product/>} path="/" />
            <Route element={<Success/>} path="/" />
        </Routes>
    )
}

export default MainRoutes;