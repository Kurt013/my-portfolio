import techStack from "@/data/techStack";

const ToolsPlatforms = () => {
  const { toolsAndPlatforms } = techStack;

  return (
    <>
      <h3>Frameworks & Libraries</h3>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
        {toolsAndPlatforms.map((toolAndPlatform, index) => {
          return (
            <li key={index}>
              <div className="flex flex-col items-center shadow-md border-1 border-gray rounded-md p-8">
                <svg
                  className="h-16 w-16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={toolAndPlatform.svg.viewBox}
                >
                  {toolAndPlatform.svg.path.map((icon, pathIndex) => {
                    return <path key={pathIndex} d={icon} />;
                  })}
                </svg>
                <p className="font-bold">{toolAndPlatform.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToolsPlatforms;
