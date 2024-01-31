import React from "react";
import ReactDOM from "react-dom/client";
import { LandingPage } from "./pages";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { AddressScreen } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="address/:hash" element={<AddressScreen />} />
      <Route path="txn/:hash" />
      <Route path="alert" />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
