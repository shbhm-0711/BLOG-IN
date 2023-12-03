import React, { useEffect } from "react";

function Main() {
  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_ENDPOINT + "/blogs/fake")
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp.data);
      });
  }, []);
  return <div>Main</div>;
}

export default Main;
