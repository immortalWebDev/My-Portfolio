import { projectImages } from "./projectData/projectImages";

const SingleProject = ({ projectInfo }) => {
  
  const img = projectImages[projectInfo.img] || projectImages["bg-changer"];

  return (
    <div className="group bg-gray-800 transition ease-in-out delay-400 duration-700 shadow-xl rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl">
      <div className="grid">
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden transition ease-in-out delay-400 duration-700">
          <img
            className="transition ease-in-out delay-400 duration-700 object-cover w-full h-full group-hover:opacity-50"
            src={img}
            alt="Project Image"
          />
          <div className="absolute grid grid-rows-2 gap-3 border-cyan-900 transition ease-in-out delay-400 duration-700 opacity-0 group-hover:opacity-100 z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center">
            <div>
              <a
                href={projectInfo.link}
                className="bg-blue-500 text-white px-3 py-1 text-lg rounded-md capitalize m-6 hover:bg-blue-600 transition"
              >
                See Live
              </a>
            </div>
            <div>
              <a
                href={projectInfo.sourceCode}
                className="bg-green-500 text-white px-3 py-1 text-lg rounded-md capitalize hover:bg-green-600 transition"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="p-3.5 h-full bg-slate-200">
          <h1 className="capitalize text-base text-gray-900 font-semibold">
            {projectInfo.title}
          </h1>
          <div className="mt-3">
            {projectInfo.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-slate-300 px-3 py-1 rounded-lg text-sm text-gray-900 me-2 border border-[#9d9dda]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
