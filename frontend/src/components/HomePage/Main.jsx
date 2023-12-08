import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";

function Main() {
  //is login or not
  const status = useSelector((state) => state.status);
  const navigate = useNavigate();
  useEffect(() => {
    if (status) {
      fetch(import.meta.env.VITE_BACKEND_ENDPOINT + "/blogs/fake")
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp.data);
        });
    }
    //  else {
    //   navigate("/login");
    // }
  }, []);
  return status ? <div>Main</div> : <Welcome />;
}

export default Main;
