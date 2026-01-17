async function loadPortfolio(wallet) {
    const address = await wallet.getAddress();
    const provider = wallet.provider;

    const ethBalance = await provider.getBalance(address);
    const ethValue = ethers.utils.formatEther(ethBalance);

    const tokens = [];

    for (let i = 0; i < TRACKED_TOKENS.length; i++) {
        const tokenAddress = TRACKED_TOKENS[i];
        const contract = new ethers.Contract(tokenAddress, TOKEN_ABI, provider);

        const name = await contract.name();
        const symbol = await contract.symbol();
        const decimals = await contract.decimals();
        const balance = await contract.balanceOf(address);

        tokens.push({
            name: name,
            symbol: symbol,
            balance: ethers.utils.formatUnits(balance, decimals)
        });
    }

    return {
        eth: ethValue,
        tokens: tokens
    };
}
