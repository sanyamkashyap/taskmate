"use client";

const Card = ({ title, description, children }) => {
  return (
    <div className="bg-white border w-62 h-52 rounded-xl p-5">
      <div className=" flex flex-col gap-2">

      <h2 className="font-semibold text-lg">{title}</h2>
      <p className=" text-sm text-gray-400">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
