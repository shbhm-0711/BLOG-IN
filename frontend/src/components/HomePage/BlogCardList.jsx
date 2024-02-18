import React from "react";
import BlogCard from "../ReUseable/BlogCard";

function BlogCardList({ blogs }) {
  return (
    <div className="flex justify-around flex-wrap">
      {blogs.map((item) => (
        <BlogCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default BlogCardList;
