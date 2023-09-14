import React, { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default Courses;
