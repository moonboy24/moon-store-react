import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Auth from "./pages/auth";
import Checkout from "./pages/checkout";
import Navbar from "./components/Navbar";

function App(){
    return(
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<h1>404 Page Not found</h1>} />
            </Routes>
        </>
    )
}

export default App;