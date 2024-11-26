const formattedMoney = (moneyValue) =>
    moneyValue.toLocaleString("en-US", {
        style: "currency",
        currency: "EUR",
    });

const MenuItem = ({ item }) => {
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
            {!item.soldOut && (
                <button className="add-to-cart">ADD TO CART</button>
            )}
        </li>
    );
};

export default MenuItem;
