import CartItem from "../CartItem";

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
                <button className="order-btn">Order pizzas</button>
                <button className="clear-btn">Clear cart</button>
            </div>
        </div>
    );
};

export default Cart;
