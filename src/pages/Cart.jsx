import Button from "../components/Button";
import CartItem from "../components/CartItem";

const cartItems = [
    {
        id: 1,
        name: "Margherita",
        price: 12.0,
        quantity: 1,
    },
    {
        id: 2,
        name: "Romana",
        price: 15.0,
        quantity: 2,
    },
    {
        id: 3,
        name: "Prosciutto e Rucola",
        price: 16.0,
        quantity: 1,
    },
];

const Cart = () => {
    return (
        <div className="container">
            <a href="/" className="back-link">
                ← Back to menu
            </a>
            <h1 className="cart-title">Your cart</h1>

            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}
            </div>

            <div className="cart-actions">
                <Button className="order-btn">Order pizzas</Button>
                <Button className="clear-btn">Clear cart</Button>
            </div>
        </div>
    );
};

export default Cart;
