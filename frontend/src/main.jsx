import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="" element={<Home />} />
    </Route>
  )
);

//root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
