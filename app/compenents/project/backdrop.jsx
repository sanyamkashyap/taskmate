import React from "react";

const Backdrop = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      {children}
    </div>
  );
};

export default Backdrop;
