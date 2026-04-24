import React from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Column = ({ children, boardId }) => {
  const [columnsData, setColumnsData] = useState([]);

  useEffect(() => {
    if (!boardId) return;

    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/board/column`, {
        credentials: "include",
      });
      const data = await response.json();
      setColumnsData(data);
      console.log(data);
    };

    fetchData();
  }, [boardId]);

  return (
    <div className="flex">
      {columnsData.map(({ name }) => (
        <div className="w-[250px] h-full">
          <Card className="p-2  h-full">
            <div className="border-b">
              <CardTitle>{name}</CardTitle>
              {/* <CardTitle>name</CardTitle> */}
            </div>

            <div className="flex flex-col gap-2 ">{children}</div>

            <div>
              <Button>create</Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Column;
