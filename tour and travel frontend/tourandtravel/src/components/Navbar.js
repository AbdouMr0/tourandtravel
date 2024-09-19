import React, { useState } from "react";
import { MenuItems } from "./Menuitems";
import './NavbarStyles.css';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavBar = () => {
    const [clicked, setClicked] = useState(false); // Using useState for clicked state

    const handleClick = () => {
        setClicked(!clicked); // Toggle clicked state
    };

    // const navigateTo = (url) => {
    //     // Navigate to the specified URL using Link component
    //     // You can also use useHistory hook from react-router-dom for navigation
    //     // const history = useHistory();
    //     // history.push(url);
    // };

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Trippy</h1>
            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        {/* Use Link component for navigation */}
                        <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
