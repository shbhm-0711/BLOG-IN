// import { useState } from "react";
// import viteLogo from "/vite.svg";

import { Outlet } from "react-router-dom";

import "./App.css";
import { Footer, Header } from "./components";

export default function App() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-between">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
