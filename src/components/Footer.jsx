import React from "react";
import "../styles/Footer.css"

const Footer = () => {
    return(
        <div className="footer">
        <h6>&copy;{new Date().getFullYear()} POPCORN | All rights reserved | Terms Of Service | Privacy Policy</h6>
        </div>
    )
}

export default Footer;