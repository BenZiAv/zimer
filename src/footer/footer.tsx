import React from "react";
import "./footer.scss"
import allright from "../assets/icons/R.png"

const Footer: React.FC = () => {
    return (
        <div>
            <div className="footer-main-contanier">
                <label>All rights reserved
                    <img alt="all-right-reseved-icon" src={allright} className="all-right-reseved-icon" />
                </label>
            </div>


        </div>
    )
}
export default Footer