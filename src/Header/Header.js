import React from 'react';
import './Header.css';
import Content from '../Content/Content'
// import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Header () {
    return (
        <div style={{background: "#242526", boxSizing: "border-box", fontFamily:"Segoe UI", overflowX:"hidden"}}>
            <div className="navbar">
            <div className="navbar_left">
                <img className = "navbar_logo" src="/assets/facebook.png" alt="logo"/>
                <div className="input-icons">
                {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                    <input className="input-field" type="text" placeholder="Search on Facebook"/>
                </div>
            </div>
            <div className="navbar_center"></div>
            <div className="navbar_right">
                <div className="navbar_right_profile">
                    <img src="/assets/user.png" alt="profile"/>
                    <span>Kezia</span>
                </div>
                <div className="navbar_right_links"></div>
            </div>
            
             </div>
            <div>
                <Content/>
            </div>
        </div>
        
        
        

        )
}

export default Header;

