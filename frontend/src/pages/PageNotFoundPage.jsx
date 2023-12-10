import React from "react";
import { Footer, Header } from "../components";

function Error() {
  return (
    <div className="min-h-[100vh]">
      <Header />
      <div className="min-h-[80vh] flex justify-center items-center">
        <span className="text-6xl">Error</span>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
