import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum quasi beatae quidem dignissimos sequi atque dolorem eligendi repellat modi.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 9999 999 999</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: example@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Wathes</span>
                    <span className="text">Bluetooh Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>

                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="title">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms and Conditions</span>
                    <span className="text">Contact Us</span>
                    
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <img src={Payment} alt="Payment" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
