import React from "react";

const Layout = ({ childern, leftWidth, rightWidth }) => {
  const [left, right] = childern;
  const leftWidth = `${leftWidth}rem`;
  const rightWidth = `${rightWidth}rem`;
  return (
    <main>
      <div style={{ width: leftWidth }}>{left}</div>
      <div style={{ width: rightWidth }}>{right}</div>
    </main>
  );
};

export default Layout;
