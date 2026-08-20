import React from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CardForm from "../cardForm";
import Todos from "../card";

const Column = ({ children, boardId }) => {
  const [columnsData, setColumnsData] = useState([]);
  const [todos, setTodos] = useState([]);
  const [cardForm, setCardForm] = useState(false);

  const fetchTodoData = async () => {
    const response = await fetch("http://localhost:3000/todo/", {
      credentials: "include",
    });
    const data = await response.json();
    setTodos(data);
  };

  const fetchColumnData = async () => {
    const response = await fetch(
      `http://localhost:3000/board/${boardId}/column`,
      {
        credentials: "include",
      },
    );
    const data = await response.json();
    setColumnsData(data);
    console.log(data);
  };

  // const showCard = ()=>{

  // }

  useEffect(() => {
    if (!boardId) return;
    fetchColumnData();
    fetchTodoData();
  }, [boardId]);

  return (
    <div className="flex gap-2 items-start min-w-max">
      {columnsData.map((col) => (
        <div className="w-[280px] shrink-0">
          <Card className="flex flex-col max-h-[calc(100vh-170px)] p-3">
            {/* COLUMN HEADER */}
            <div className="border-b">
              <CardTitle>{col.name}</CardTitle>
              {/* <CardTitle>name</CardTitle> */}
            </div>

            {/* SCROLLABLE TASK AREA */}
            <div className="overflow-y-auto py-3">
              <Todos todos={todos} column={col} />
            </div>

            {/* FOOTER */}
            <div>
              <CardForm Form={cardForm} column={col}></CardForm>
            </div>

            <div>
              <Button onClick={() => setCardForm(true)}>create</Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Column;
