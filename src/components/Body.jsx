import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function Body() {
  const [data, setData] = useState([]);
  const [translateX, setTranslateX] = useState(0);
  const moveRight = () => {
    if(translateX==0){

    }
    else{
      setTranslateX(translateX + 360);
    }
    // Increase x-axis by 30
  };
  const moveLeft =() =>{
    if(translateX== -1080){

    }
    else{
    setTranslateX(translateX + (-360));
    }
  };

  async function fetchCategories() {
    try {
      const res = await fetch("http://localhost:8080/categories/all");
      const jsonData = await res.json(); // Await the JSON parsing
      console.log(jsonData);
      setData(jsonData); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    fetchCategories(); // Call the function inside useEffect
  }, []);

  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto  overflow-hidden  mt-[10px]">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-2xl">Varun,what's on your mind?</h2>
          </div>
          <div className="flex gap-[10px]">
            <div onClick={moveRight} className="bg-gray-500 rounded-full w-[20px] h-[20px] flex justify-center items-center">
              <FaArrowLeft className="mt-[2px]"/>
            </div>
            <div onClick={moveLeft} 
            className="bg-gray-500 rounded-full w-[20px] h-[20px]">
              <FaArrowRight className="mt-[2px]"/>
            </div>
          </div>
        </div>
        <div className="flex duration-200 ease-in-out"
        style={{ transform: `translateX(${translateX}px)` }}
        >
          {/* Remove the extra curly braces */}
          {data.map((item) => (
            <img
              key={item.categoryId}
              src={item.categoryUrl}
              alt="Food Category"
              className="w-[150px] h-[150px] object-cover bg-white p-2 rounded-md shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
