import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Auth from "./pages/auth";
import Checkout from "./pages/checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "./pages/productDetails";

function App(){
    return(
        // <>
        <AuthProvider>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/products/:id' element={<ProductDetails />} />
                    <Route path='*' element={<h1>404 Page Not found</h1>} />
                </Routes>
            </div>
        </AuthProvider>
        // </>
    )
}

export default App;