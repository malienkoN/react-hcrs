import { formattedMoney } from "../../helpers/format";

const CartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <span className="quantity-text">{item.quantity}x</span>
            <span>{item.name}</span>
            <span className="price">{formattedMoney(item.price)}</span>
            <div className="quantity-controls">
                <button className="quantity-btn">-</button>
                <span>1</span>
                <button className="quantity-btn">+</button>
                <button className="delete-btn">DELETE</button>
            </div>
        </div>
    );
};

export default CartItem;
