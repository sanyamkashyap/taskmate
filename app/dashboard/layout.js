import Sidebar from "../compenents/sidebar";
import ProjectProvider from "../context/useContex";

const layout = ({ children }) => {
  return (
    <ProjectProvider>
      <div className="flex">
        <Sidebar />
        <main className="ml-48">{children}</main>
      </div>
    </ProjectProvider>
  );
};

export default layout;
