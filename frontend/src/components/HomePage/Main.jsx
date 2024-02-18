import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Welcome from "./Welcome";
import BlogCardList from "./BlogCardList";

function Main() {
  const [blogStatus, setBlogStatus] = useState("loading");
  const [blogData, setBlogData] = useState(null);
  // is login or not
  const status = useSelector((state) => state.status);
  const navigate = useNavigate();
  function call(params) {
    // if (status) {
    setBlogStatus("loading");
    fetch(import.meta.env.VITE_BACKEND_ENDPOINT + "/blogs")
      .then((res) => res.json())
      .then((res) => {
        if (res.msg !== "OK") {
          setBlogStatus("failed");
          throw new Error("Error fetching, " + res.error);
        } else {
          setBlogStatus("success");
          setBlogData(res.data);
        }
        console.log(res);
      })
      .catch((err) => {
        setBlogData(err);
        console.error("Error fetching data:", err);
      });
    // }
    //  else {
    //   navigate("/login");
    // }
  }
  useEffect(() => {
    call();
  }, [status]);
  console.log(blogData);
  if (blogStatus === "loading") return <div>Loading...</div>;
  if (blogStatus === "failed")
    if (blogData)
      return (
        <div>
          Failed to load data:{blogData ? blogData : "Couldn't reach servers"}
        </div>
      );
    else return <div>Loading...</div>;
  if (blogData)
    return (
      <div>
        <BlogCardList blogs={blogData} />
      </div>
    );
  return <div>Loading...</div>;

  // return status ? <div>Main</div> : <Welcome />;
}

export default Main;
