import express from "express";

const app = express();
import { AddressRoute } from "./routes/address.route.js";
import { TxnRoute } from "./routes/txn.route.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/address", AddressRoute);
app.use("/txn", TxnRoute);

export default app;
