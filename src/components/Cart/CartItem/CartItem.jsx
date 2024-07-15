import "./CartItem.scss";
import { MdClose } from "react-icons/md"
import prod from "../../../assets/products/earbuds-prod-1.webp";
import{useState} from "react";

const CartItem = () => {

    const[incre, setIncre]=useState(0);
    const increment=()=>{
        setIncre(incre+1);
    }
    const decrement=()=>{
        if(incre==1){
            setIncre(1);
        }
        else{
            setIncre(incre-1)
        }
    }
    return (
        <>
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="product" />
                </div>
                <div className="prod-details">
                    <span className="name">product name</span>
                    <MdClose className="close-btn" />
                    <div className="quantity-buttons">
                        <button className="butt" onClick={decrement}>-</button>
                        <span>{incre}</span>
                        <button className="butt" onClick={increment}>+</button>
                    </div>
                    <div className="text">
                        <span>{incre}</span>
                        <span>X</span>
                        <span className="highlight">&#8377;4567</span>
                        <span className="highlight">={4567*incre}</span>
                    </div>
                </div>
            </div>
        </div>
        

        </>
    );
};

export default CartItem;
