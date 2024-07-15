import React from 'react';
import './OrderDetails.css';
import earbudimg from "../../../src/assets/products/earbuds-prod-3.webp"
const Shipment= () => {
  return (
    <div className="order-details">
      <div className="header">
        <span className="time">15:04</span>
        <div className="icons">
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-three-quarters"></i>
        </div>
      </div>
      <h2>Order Details</h2>
      <div className="tracking-info">
        <p>Order can be tracked by 9474332567.</p>
        <p>Tracking link is shared via SMS.</p>
      </div>
      <button className="manage-access">Manage who can access</button>
      <div className="order-summary">
        <p>Order ID - OD330011611072004100</p>
        <div className="item-details">
          <img src={earbudimg} alt="Reya Striped Men Round Neck Blue T-Shirt" />
          <div className="item-info">
            <p className="item-name">Boat earbud</p>
            <p className="item-spec">Grey</p>
            <p className="item-seller">Seller: BOAT</p>
            <p className="item-price">₹4567 <span className="offer">1 offer</span></p>
          </div>
        </div>
      </div>
      <div className="order-status">
        <p><i className="fas fa-check-circle"></i> Order Confirmed, Jul 10, 2024</p>
        <p><i className="fas fa-check-circle"></i> Delivered, Jul 15, 2024</p>
        <a href="#" className="updates-link">See All Updates</a>
      </div>
      <div className="actions">
        <button className="chat-button">Chat with us</button>
        <button className="invoice-button">Invoice download</button>
      </div>
    </div>
  );
}

export default Shipment;
