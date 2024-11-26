import { menuData } from "../../data.js";
import MenuItem from "../MenuItem/index.jsx";

const Menu = () => {
    return (
        <ul className="menu-container">
            {menuData.map((item) => (
                <MenuItem item={item} key={item.id} />
            ))}
        </ul>
    );
};

export default Menu;
