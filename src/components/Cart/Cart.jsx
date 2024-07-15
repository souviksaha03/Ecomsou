import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
//import "./CartItem.scss";

//import prod from "../../../assets/products/earbuds-prod-1.webp";
import prod from "../../../src/assets/products/earbuds-prod-2.webp"
import{useState} from "react";
const Cart = ({ setShowCart }) => {
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
    
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {/* <div className="empty-cart">
                    <BsCartX />
                    <span>No products in the cart.</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div> */}
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
        

          <div className="cart-footer">
            <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">{4567*incre}</span>
            </div>
            <div className="button">
                <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
