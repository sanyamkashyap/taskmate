import Sidebar from "../compenents/sidebar";
import ProjectProvider from "../hooks/useContex";

const layout = ({ children }) => {
  return (
    <ProjectProvider>
      <div className="flex">
        <Sidebar />
        <main>{children}</main>
      </div>
    </ProjectProvider>
  );
};

export default layout;
