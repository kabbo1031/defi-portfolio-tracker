async function connectWallet() {
    if (!window.ethereum) {
        alert("MetaMask not found");
        return null;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    return provider.getSigner();
}
