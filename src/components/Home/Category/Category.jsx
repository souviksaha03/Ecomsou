import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg"
import {NavLink} from "react-router-dom"
const Category = () => {
    return (
        <div className="shop-by-category">
            <div className="categories" >
                <div className="category" >
                    <img src={cat1} alt="image1" />
                </div>
                <div to="/product"className="category" >
                    <img src={cat1} alt="image2" />
                </div>
                <div className="category" >
                    <img src={cat1} alt="image3" />
                </div>
                <div className="category" >
                    <img src={cat1} alt="image4" />
                </div>
            </div>
        </div>
    );
};

export default Category;
