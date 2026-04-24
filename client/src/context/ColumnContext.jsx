import { useEffect, useState } from "react";
import { createContext } from "react";

const ColumnContext = createContext();

const fetchData = async () => {
  const response = await fetch(`http://localhost:3000/column`);
  const data = await response.json();
  if (!data) {
    console.log("unable to fetch data");
  }
  console.log(data);
  setColumns(data);
};

export const columnProvider = ({ children }) => {
  const [columns, setColumns] = useState([]);

  const addColumn = (newColumn) => {
    setColumns((prev) => [...prev, newColumn]);
  };

  return (
    <ColumnContext.Provider value={{ columns, addColumn }}>
      {children}
    </ColumnContext.Provider>
  );
};
