
import { useState } from 'react';
import LOGO from '../../assets/images/logo.png';
export default Header = () => {
    var [btnName,setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO} alt="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        setBtnName(btnName === "Login"? "Logout": "Login")
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}
