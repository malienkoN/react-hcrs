// components
import TextInput from "../TextInput";

const Header = () => {
    return (
        <header className="header">
            <a className="logo" href="/">
                React Pizza
            </a>
            <nav>
                <a href="/login">Login</a>
                <a href="/menu">Menu</a>
                <a href="/cart">Cart</a>
            </nav>
            <form>
                <TextInput placeholder="Search for the order #" />
            </form>
        </header>
    );
};

export default Header;
