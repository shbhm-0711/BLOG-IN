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
// import Error from "./pages/PageNotFoundPage.jsx";
// import SplashPage from "./pages/SplashPage.jsx";
// import ProfilePage from "./pages/ProfilePage.jsx";
import { LoginPage, ProfilePage, ErrorPage } from "./pages";

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/feed" element={<HomePage />} />
      <Route path="/:UserName" element={<ProfilePage />} />
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
