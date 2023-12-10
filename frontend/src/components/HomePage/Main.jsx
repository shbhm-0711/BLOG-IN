import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";

function Main() {
  //is login or not
  const status = useSelector((state) => state.status);
  const navigate = useNavigate();
  function call(params) {
    if (status) {
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
    //  else {
    //   navigate("/login");
    // }
  }
  useEffect(() => {
    call();
  }, []);
  return status ? <div>Main</div> : <Welcome />;
}

export default Main;
