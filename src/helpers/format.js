export const formattedMoney = (moneyValue) =>
    moneyValue.toLocaleString("en-US", {
        style: "currency",
        currency: "EUR",
    });
