const AddressInfo = async (addressHash) => {
  const uri = "/address/" + addressHash;
  try {
    const res = await fetch(uri);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default AddressInfo;
