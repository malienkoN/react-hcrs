import { useState } from "react";

const formattedMoney = (moneyValue) =>
    moneyValue.toLocaleString("en-US", {
        style: "currency",
        currency: "EUR",
    });

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
                    <button
                        className="decrement"
                        aria-label="Decrease quantity"
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </button>
                    <span>{count}</span>
                    <button
                        className="increment"
                        aria-label="Increase quantity"
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>
                </div>
                {!item.soldOut && (
                    <button className="add-to-cart">ADD TO CART</button>
                )}
            </div>
        </li>
    );
};

export default MenuItem;
