import { Router } from "express";
import { txnDetails } from "../controllers/txn.controller.js";

const TxnRoute = Router();

TxnRoute.get("/:txhash", txnDetails);

export { TxnRoute };