let wallet = null;

document.getElementById("connectBtn").addEventListener("click", async function () {
    wallet = await connectWallet();
    if (wallet) {
        const address = await wallet.getAddress();
        document.getElementById("wallet").innerText = address;
        log("Wallet connected");
    }
});

document.getElementById("loadBtn").addEventListener("click", async function () {
    if (!wallet) {
        alert("Connect wallet first");
        return;
    }

    const data = await loadPortfolio(wallet);
    updateUI(data);
});
