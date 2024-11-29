import { useState } from "react";
import { formattedMoney } from "../../helpers/format";
import Button from "../Button";

const MenuItem = ({ item }) => {
    const [count, setCount] = useState(1);

    return (
        <li className="pizza-item">
            <img src={item.imageUrl} alt={item.name} className="pizza-image" />
            <div className="pizza-info">
                <h2>{item.name}</h2>
                <p className="ingredients">
                    {item.ingredients.map((ingr) => ingr + " ")}
                </p>
                {item.soldOut ? (
                    <p className="sold-out">SOLD OUT</p>
                ) : (
                    <p className="price">{formattedMoney(item.unitPrice)}</p>
                )}
            </div>
            <div className="cart-controls">
                <div className="counter">
                    <Button
                        className="decrement"
                        ariaLabel="Decrease quantity"
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </Button>
                    <span>{count}</span>
                    <Button
                        className="increment"
                        ariaLabel="Increase quantity"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </Button>
                </div>
                {!item.soldOut && (
                    <button className="add-to-cart">ADD TO CART</button>
                )}
            </div>
        </li>
    );
};

export default MenuItem;
