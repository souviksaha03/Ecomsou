import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import {NavLink} from "react-router-dom"
const Product = () => {
    return (
        <NavLink to="/product" className="product-card">
            <div className="thumbnail">
                <img height={180} src={prod} alt="product" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <span className="price">&#8377;399</span>
            </div>
        </NavLink>
    );
};

export default Product;
