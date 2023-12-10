// import { useState } from "react";
// import viteLogo from "/vite.svg";

import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";
import { Footer, Header } from "./components";
import { useEffect, useState } from "react";
import { login } from "./app/authSlice";
import { SplashPage } from "./pages";

export default function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // todo use auth code with redux
    const authObject = JSON.parse(localStorage.getItem("auth"));

    if (authObject) {
      dispatch(
        login({ status: authObject?.status, userData: authObject?.userData })
      );
    }
    setLoading(false);
  }, [setLoading, dispatch]);

  return loading ? (
    <SplashPage />
  ) : (
    <div className="min-h-screen min-w-screen flex flex-col justify-between">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
