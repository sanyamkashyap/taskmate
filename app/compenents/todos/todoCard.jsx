import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TodoCard = ({ children, title, description, id, todos, paramId }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {/* <TableCell>{title}</TableCell>
          <TableCell>
            <div className="line-clamp-1">
            {description}
            </div>
            </TableCell> */}

        {todos
          .filter((todo) => String(paramId) === String(todo.projectId))
          .map((t) => {
            return (
              <TableRow key={t.id}>
                <TableCell>{t.title}</TableCell>
                <TableCell className="truncate max-w-[300px]">{t.description}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
      {children}
    </Table>
  );
};

export default TodoCard;
