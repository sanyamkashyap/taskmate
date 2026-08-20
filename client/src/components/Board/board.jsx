import Column from "../Column/column.jsx";
import { Button } from "@/components/ui/button";
import Cards from "../card.jsx";
import { data, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ColumnForm from "../Column/columnForm.jsx";

const Board = ({ board, porject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { projectId } = useParams();

  return (
    <div className="overflow-x-auto w-full p-4">
      <div className="flex gap-2 items-start w-max">
        <Column boardId={board._id}></Column>

        <ColumnForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          boardId={board._id}
        ></ColumnForm>
        <Button className="shring-0" onClick={() => setIsOpen(true)}>
          +
        </Button>
      </div>
    </div>
  );
};

export default Board;
