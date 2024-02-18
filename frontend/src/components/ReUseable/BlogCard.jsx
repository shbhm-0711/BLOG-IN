import React from "react";
import Card from "./Card";
import { Sizes } from "../../constants";

function BlogCard({ item }) {
  const { blog, author, tags, time } = item;
  const [heading, img, ...body] = blog;

  return (
    <Card minW="1">
      <h2 className={`text-start mb-2 ${Sizes[heading.content.size]}`}>
        {heading.text ? heading.text : "Untitled"}
      </h2>
      <img src={img.content.src} />
      <div className="flex justify-between">
        <div className="flex flex-col text-start">
          <h3>{author}</h3>
          <p>{new Date(time).toLocaleString().split(",")[0]}</p>
        </div>
        <span>
          {tags.map((item) => (
            <span>#{item}&nbsp;</span>
          ))}
        </span>
      </div>
    </Card>
  );
}

export default BlogCard;
