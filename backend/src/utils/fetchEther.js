const FetchEther = async (uri) => {
  return fetch(uri)
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((err) => {
      throw err;
    });
};

export { FetchEther };
