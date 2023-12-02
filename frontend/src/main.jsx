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
import HomePage from "./pages/HomePage";
import Error from "./pages/PageNotFoundPage.jsx";

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
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
