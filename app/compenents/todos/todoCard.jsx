import { UseProject } from "@/app/context/useContex";
import React from "react";

const TodoCard = ({ children, title, description }) => {
  return (
    <div className="bg-white border w-62  rounded-xl p-5">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className=" text-sm text-gray-400">{description}</p>
      {children}
    </div>
  );
};

export default TodoCard;
