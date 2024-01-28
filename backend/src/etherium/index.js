import Moralis from "moralis";

const setUpMoralis = async () => {
  try {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default setUpMoralis;
