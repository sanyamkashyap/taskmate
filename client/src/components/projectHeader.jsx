const ProjectHeader = ({ board }) => {
  return (
    <div className="px-4 pt-4  border-b-gray-400 border-1">
      <div className="flex flex-col gap-2">
        <div>project name</div>
        <div>
          <button>{board.map(({ title }) => title)}</button>
          {/* <div>hello</div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
