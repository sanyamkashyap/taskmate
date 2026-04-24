import React, { useEffect, useState } from "react";
import Column from "../components/Column/column.jsx";
import Card from "../components/card.jsx";
import { Button } from "@/components/ui/button";
import Board from "../components/Board/board.jsx";
import ProjectHeader from "../components/projectHeader.jsx";
import { useParams } from "react-router-dom";

const Project = ({ projects }) => {
  const [showCard, setShowCard] = useState(false);
  const [column, setColumn] = useState();
  const [board, setBoard] = useState([]);

  const { projectId } = useParams();
  console.log(projectId);
  console.log({ board });

  const fetchBoards = async () => {
    const response = await fetch(
      `http://localhost:3000/project/${projectId}/boards`,
      {
        credentials: "include",
      },
    );
    const data = await response.json();
    setBoard(data);
    // console.log(data);
  };
  // console.log(board);

  useEffect(() => {
    if (projectId) {
      fetchBoards();
    }
  }, [projectId]);

  useEffect(() => {
    // console.log("board updated:", board);
  }, [board]);

  return (
    <div className="flex flex-col bg-[beige] mx-auto w-full ">
      <ProjectHeader board={board} projects={projects}></ProjectHeader>
      {/* <Button onClick={() => setShowCard(!showCard)}>create</Button> */}

      <div className="p-4">
        <Board board={board} />
      </div>
    </div>
  );
};

export default Project;
