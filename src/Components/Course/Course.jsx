import React from "react";

const Course = ({ course }) => {
  const { id, cover, title, description, price, credit } = course;
  return (
    <div className="bg-white rounded-md">
      <div className="w-[312px] h-auto ">
        <img src={cover} className="m-4"></img>

        <h3 className="text-lg font-bold mx-4 my-2">{title}</h3>
        <p className="text-sm font-normal  mx-4 my-2 ">{description}</p>

        <div className="flex flex-row justify-between mx-4 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 1V23"
              stroke="#1C1B1B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
              stroke="#1C1B1B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-sm font-normal">Price :{price} </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 6.04201C10.3516 4.56337 8.2144 3.74695 6 3.75001C4.948 3.75001 3.938 3.93001 3 4.26201V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.04201C13.6483 4.56328 15.7856 3.74686 18 3.75001C19.052 3.75001 20.062 3.93001 21 4.26201V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.997 13.6484 18.8134 12 20.292M12 6.04201V20.292"
              stroke="#1C1B1B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-sm font-normal">Credit : {credit} hr</p>
        </div>
        <button class="mx-auto my-4 h-[40px] w-[280px] text-center flex justify-center items-center bg-blue-400 rounded-md text-lg font-semibold text-white hover:bg-orange-500  ">
          Select
        </button>
      </div>
    </div>
  );
};

export default Course;
