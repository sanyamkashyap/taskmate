import Sidebar from "../compenents/sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default layout;
