"use client";

import { useRouter } from "next/navigation";



const Card = ({ title, description, children, project, onEdit }) => {

const router = useRouter()

  return (
    <div
      className="bg-white border w-62  rounded-xl p-5"
      onClick={() => router.push(`/dashboard/project/${project.id}`)}
    >
      <div className="">
        <div className=" flex flex-col gap-2">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className=" text-sm text-gray-400">{description}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation;
            onEdit(project);
          }}
        >
          edit
        </button>
      </div>
      {children}
    </div>
  );
};

export default Card;
