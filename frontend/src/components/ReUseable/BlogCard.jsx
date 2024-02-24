import React from "react";
import Card from "./Card";
import { Sizes } from "../../constants";

function BlogCard({ item: { blog, author, tags, time, id } }) {
  const [heading, img, ...body] = blog;
  console.log("🚀 ~ file: BlogCard.jsx:7 ~ BlogCard ~ heading:", heading);
  let h2 = heading.content.text;
  h2 = h2 ? h2.slice(0, 35) + (h2.length > 35 ? "..." : "") : "Untitled";

  return (
    <Card minW="1">
      <h2 className={`text-start mb-2 ${Sizes[heading.content.size]}`}>{h2}</h2>
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
