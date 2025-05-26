import projectsdata from "./ProjectsData.json";

import Image from "next/image";

const ProjectTable = ({ showMembers = true, showStatus = false }) => {
  const getProgressBarColor = (completion) => {
    const value = parseInt(completion);
    if (value === 100) return "bg-green-500";
    if (value >= 10) return "bg-blue-500";
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Projects Table</h2>
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-b-gray-300">
            <th className="p-3 text-left">Company</th>
            {showMembers && <th className="p-3 text-left">Members</th>}
            <th className="p-3 text-left">Budget</th>
            <th className=" p-3 text-left">Completion</th>
            {showStatus && <th className="p-3 text-left">Status</th>}
          </tr>
        </thead>
        <tbody>
          {projectsdata.map((project) => (
            <tr key={project.id} className="border-b border-b-gray-300">
              <td className="p-3 flex gap-3 items-center">
                <Image src={project.image} alt={project.name} height={20} width={20} />
                <h1>{project.company}</h1>
              </td>
              {showMembers && (
                <td className=" p-3">
                  <div className="flex -space-x-2">
                    {project.members?.map((name, index) => {
                      return (
                        <Image src={name} key={index} alt="member" height={32} width={32} className="rounded-full border-2 border-white shadow" />
                      );
                    })}
                  </div>
                </td>
              )}
              <td className="p-3">{project.budget}</td>
              <td className="py-3">
                {project.completion === "cancel" ? (
                  <div>
                    <span className="text-red-500 font-medium">cancel</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                      <div className="h-2 w-full bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-sm font-medium">
                      {project.completion}
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                      <div
                        className={`h-2 rounded-full ${getProgressBarColor(
                          project.completion
                        )}`}
                        style={{ width: project.completion }}
                      ></div>
                    </div>
                  </div>
                )}
              </td>
              {showStatus && <td className=" p-3">{project.status}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
