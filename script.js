document.addEventListener("DOMContentLoaded", function() {
    const stockPriceElement = document.getElementById("stock-price");
    const buyButton = document.getElementById("buy-button");
    const sellButton = document.getElementById("sell-button");
    const transactionLog = document.getElementById("transaction-log");
    const balanceAmount = document.getElementById("balance-amount");

    let stockPrice = 100.00;
    let balance = 1000.00;

    stockPriceElement.textContent = `$${stockPrice.toFixed(2)}`;
    balanceAmount.textContent = `$${balance.toFixed(2)}`;

    buyButton.addEventListener("click", function() {
        if (balance >= stockPrice) {
            balance -= stockPrice;
            transactionLog.innerHTML += `<li>Bought 1 share at $${stockPrice.toFixed(2)}</li>`;
            balanceAmount.textContent = `$${balance.toFixed(2)}`;
        } else {
            transactionLog.innerHTML += "<li>Insufficient balance to buy</li>";
        }
    });

    sellButton.addEventListener("click", function() {
        balance += stockPrice;
        transactionLog.innerHTML += `<li>Sold 1 share at $${stockPrice.toFixed(2)}</li>`;
        balanceAmount.textContent = `$${balance.toFixed(2)}`;
    });
});
