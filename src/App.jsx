import { useState } from "react";
import "./App.css";

import Courses from "./components/courses/courses";
import Bookmarks from "./Components/Bookmark/Bookmarks/Bookmarks";
function App() {
  const [bookmark, setBookmark] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const handleAddBookmark = (course) => {
    const newBookmark = [...bookmark, course];
    setBookmark(newBookmark);

    // }
  };
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center my-12">
          Course Registration
        </h1>
        <section className="container mx-auto">
          <div className="flex flex-col md:flex-row m-20 ">
            <Courses handleAddBookmark={handleAddBookmark}></Courses>
            <Bookmarks bookmark={bookmark}></Bookmarks>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
