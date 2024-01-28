import Moralis from "moralis";

const getTxnDetails = async (txhash) => {
    try {
        const res = await Moralis.EvmApi.transaction.getTransaction({ chain: "0x1", transactionHash: txhash });
        return res;
    }
    catch (err) {
        throw err;
    }
}

const getInternalTxnDetails = async (txhash) => {
    try {
        const res = await Moralis.EvmApi.transaction.getInternalTransactions({ chain: "0x1", transactionHash: txhash });
        return res;
    }
    catch (err) {
        throw err;
    }
}

const txnDetails = async (req, res) => {
  const { txhash } = req.params;

  try {
    const txnDetails = await getTxnDetails(txhash);
    const internalTxnDetails = await getInternalTxnDetails(txhash);
    res.json({
        txnDetails,
        internalTxnDetails,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export { txnDetails };
