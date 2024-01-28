import Moralis from "moralis";

const nativeCoin = async (address) => {
  try {
    const res = await Moralis.EvmApi.balance.getNativeBalance({
      chain: "0x1", // ETH Mainnet
      address: address,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const getTokenBalance = async (address) => {
  try {
    const res = await Moralis.EvmApi.token.getWalletTokenBalances({
      chain: "0x1", // ETH Mainnet
      address: address,
    });
    
    const resJson = JSON.parse(JSON.stringify(res));
    resJson.sort((a, b) => a.possible_spam - b.possible_spam);

    return resJson;
  } catch (err) {
    throw err;
  }
};

const normalTransaction = async (address, page, offset) => {
  try {
    const res = await Moralis.EvmApi.transaction.getWalletTransactions({
      chain: "0x1", // ETH Mainnet
      address: address,
      limit: offset,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const internalTransaction = async (address, page, offset) => {
  try {
    const res = await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
      chain: "0x1", // ETH Mainnet
      address: address,
      limit: offset,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const accountDetails = async (req, res) => {
  const { address } = req.params;

  try {
    const nativeCoinBalance = await nativeCoin(address);
    const tokenBalance = await getTokenBalance(address);
    const normalTransactionResult = await normalTransaction(address, 0, 25);
    const internalTransactionResult = await internalTransaction(address, 0, 25);
    res.json({
      nativeCoinBalance,
      tokenBalance,
      normalTransactionResult,
      internalTransactionResult,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { accountDetails };
