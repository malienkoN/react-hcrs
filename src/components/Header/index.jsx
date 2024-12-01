import { Link, NavLink } from "react-router";

// components
import TextInput from "../TextInput";

const Header = () => {
    return (
        <header className="header">
            <Link className="logo" to="/">
                React Pizza
            </Link>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "700" : "400",
                    })}
                >
                    Main
                </NavLink>
                <NavLink
                    to="/menu"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "700" : "400",
                    })}
                >
                    Menu
                </NavLink>
                <NavLink
                    to="/cart"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "700" : "400",
                    })}
                >
                    Cart
                </NavLink>
            </nav>
            <form>
                <TextInput placeholder="Search for the order #" />
            </form>
        </header>
    );
};

export default Header;
