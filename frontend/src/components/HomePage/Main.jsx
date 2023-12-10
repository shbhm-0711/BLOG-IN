import React, { useEffect } from "react";

function Main() {
  function call(params) {
    fetch(import.meta.env.VITE_BACKEND_ENDPOINT + "/blogs")
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log("🚀 ~ file: Main.jsx:11 ~ call ~ err:", err);
        console.log(err);
      });
  }
  useEffect(() => {
    call();
  }, []);

  return (
    <div
      onClick={(e) => {
        call();
      }}
    >
      Main
    </div>
  );
}

export default Main;
