import React from "react";

const Sidebar = () => {
  return (
    <aside className="aside__container">
      Sidebar
      <div className="side_buttons">
        <ul>
          <li>dashboard</li>
          <li>todos</li>
          <li>home</li>
        </ul>
      </div>
      <div className="project__drop">
        <ul>
          <li>Projects</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
