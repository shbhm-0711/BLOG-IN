// import { useState } from "react";
// import viteLogo from "/vite.svg";

import { Outlet } from "react-router-dom";

import "./App.css";
import { Footer, Header } from "./components";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
