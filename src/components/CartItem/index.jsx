import { useState } from "react";
import { formattedMoney } from "../../helpers/format";
import Button from "../Button";

const CartItem = ({ item }) => {
    const [count, setCount] = useState(1);

    return (
        <div className="cart-item">
            <span className="quantity-text">{item.quantity}x</span>
            <span>{item.name}</span>
            <span className="price">{formattedMoney(item.price)}</span>
            <div className="quantity-controls">
                <Button
                    className="quantity-btn"
                    onClick={() => setCount(count - 1)}
                >
                    -
                </Button>
                <span>{count}</span>
                <Button
                    className="quantity-btn"
                    onClick={() => setCount(count + 1)}
                >
                    +
                </Button>
                <Button className="delete-btn">DELETE</Button>
            </div>
        </div>
    );
};

export default CartItem;
