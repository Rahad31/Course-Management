import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  console.log(title);
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default Bookmark;
