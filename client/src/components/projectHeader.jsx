const ProjectHeader = ({ boardTitle, projectName }) => {
  return (
    <div className="px-4 pt-4  border-b-gray-400 border-1">
      <div className="flex flex-col gap-2">
        <div>{projectName}</div>
        <div>
          <button>{boardTitle}</button>
          {/* <div>hello</div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
