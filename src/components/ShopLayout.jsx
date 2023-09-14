import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

function ShopLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default ShopLayout;
