import Column from "../Column/column.jsx";
import { Button } from "@/components/ui/button";
import Cards from "../card.jsx";
import { data, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ColumnForm from "../Column/columnForm.jsx";
const Board = ({ board }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { projectId } = useParams();

  return (
    <div className="flex gap-2">
      {board.map((b) => (
        <div className="flex gap-2">
          <Column boardId={b._id}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Column>

          <ColumnForm
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            boardId={b._id}
          ></ColumnForm>
          <Button onClick={() => setIsOpen(true)}>+</Button>
        </div>
      ))}
    </div>
  );
};

export default Board;
