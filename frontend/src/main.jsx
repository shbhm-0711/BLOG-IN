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
import {
  LoginPage,
  ProfilePage,
  ErrorPage,
  LandingPage,
  SignUpPage,
  AboutUsPage,
  BlogPage,
  BlogEditPage,
} from "./pages";

//Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      {/*  using relative path not absolute dont use "/" in nested route */}
      <Route index element={<LandingPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="about-us" element={<AboutUsPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="feed" element={<HomePage />} />
      <Route path=":blogID" id="blog-detail">
        {/* use Loader */}
        <Route index element={<BlogPage />} />
        <Route path="edit" element={<BlogEditPage />} />
      </Route>
      <Route path="new" element />
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
