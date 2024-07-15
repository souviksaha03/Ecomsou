import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/context";
import Shipment from "./components/shipment/Shipment"
function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/category" element={<Category/>}/>
                    <Route path="/product" element={<SingleProduct/>}/>
                    <Route path="/shipment" element={<Shipment/>}/>
                </Routes>
                <Newsletter/>
                <Footer/>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
