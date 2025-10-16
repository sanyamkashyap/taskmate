"use client";

const Card = ({ title, description, children, project, onEdit }) => {
  return (
    <div className="bg-white border w-62 h-52 rounded-xl p-5">
      <div className="">
        <div className=" flex flex-col gap-2">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className=" text-sm text-gray-400">{description}</p>
        </div>
        <button onClick={() => onEdit(project)}>edit</button>
      </div>
      {children}
    </div>
  );
};

export default Card;
