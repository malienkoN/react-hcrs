import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/index.jsx";

const Menu = () => {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const res = await fetch(
                    "https://react-fast-pizza-api.onrender.com/api/menu"
                );
                if (!res.ok) throw new Error("Failed to fetch data!");
                const data = await res.json();
                setMenuData(data.data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchMenuData();
    }, []);

    return (
        <ul className="menu-container">
            {menuData.map((item) => (
                <MenuItem item={item} key={item.id} />
            ))}
        </ul>
    );
};

export default Menu;
