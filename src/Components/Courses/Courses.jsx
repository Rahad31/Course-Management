import React, { useEffect, useState } from "react";
import Course from "../course/course";
const Courses = ({ handleAddBookmark }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className=" mx-auto flex flex-col flex-wrap justify-center items-center gap-6 md:flex-row lg:w-3/4">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleAddBookmark={handleAddBookmark}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;
