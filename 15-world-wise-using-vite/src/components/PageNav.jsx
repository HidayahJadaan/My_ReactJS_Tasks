import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">HomePage</NavLink>
            </li>

            <li>
                {/* NavLink Gives The Element "active" Class when it is clicked  Not Like Link*/}
                <NavLink to="/pricing">Pricing</NavLink>
            </li>


            <li>
                <NavLink to="/product">Product</NavLink>
            </li>
        </ul>
    </nav>
  )
}
