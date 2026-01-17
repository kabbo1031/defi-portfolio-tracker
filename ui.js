function updateUI(data) {
    document.getElementById("ethBalance").innerText = data.eth + " ETH";

    const list = document.getElementById("tokenList");
    list.innerHTML = "";

    if (data.tokens.length === 0) {
        list.innerText = "No tokens tracked";
        return;
    }

    data.tokens.forEach(function (token) {
        const div = document.createElement("div");
        div.innerText = token.name + " (" + token.symbol + "): " + token.balance;
        list.appendChild(div);
    });
}
