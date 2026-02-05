import techStack from "@/data/techStack";

const Languages = () => {
  const { languages } = techStack;

  return (
    <>
      <h3 className="text-xl md:text-2xl font-bold pb-2">Languages</h3>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 pb-4">
        {languages.map((language, index) => {
          return (
            <li key={index}>
              <div className="flex flex-col items-center shadow-md border-1 border-gray rounded-md p-8">
                <svg
                  className="h-16 w-16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={language.svg.viewBox}
                >
                  {language.svg.path.map((icon, pathIndex) => {
                    return <path key={pathIndex} d={icon} />;
                  })}
                </svg>
                <p className="font-bold">{language.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Languages;
