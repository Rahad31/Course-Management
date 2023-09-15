import React from "react";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmark }) => {
  return (
    <div className="w-1/4 h-auto bg-white rounded-md p-6 gap-6 ">
      <h3>Credit Hour Remaining hr</h3>
      <hr></hr>
      <h3>Course Name</h3>
      <div>
        {bookmark.map((bookmark) => (
          <ol>
            <li>
              <Bookmark bookmark={bookmark}></Bookmark>
            </li>
          </ol>
        ))}
      </div>

      <hr></hr>
      <p>Total Credit Hour : </p>
      <hr></hr>
      <p>Total Price :</p>
    </div>
  );
};

export default Bookmarks;
