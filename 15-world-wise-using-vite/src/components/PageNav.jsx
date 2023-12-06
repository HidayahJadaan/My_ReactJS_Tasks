import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
        <Logo />
        
        <ul>
           
            <li>
                {/* NavLink Gives The Element "active" Class when it is clicked  Not Like Link*/}
                <NavLink to="/pricing">Pricing</NavLink>
            </li>


            <li>
                <NavLink to="/product">Product</NavLink>
            </li>

            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}
