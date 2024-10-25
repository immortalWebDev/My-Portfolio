import eccomerceImg from "../assets/ecommere.png";
import buttongeneratorImg from "../assets/button-generator.png";
import mailboxImg from "../assets/mail-box.png";
import expenseTrackerImg from "../assets/expense-tracker.png";
import jobquestImg from "../assets/jobquest.png";

const SingleProject = (props) => {
  const { projectInfo } = props;
  const img =
    projectInfo.img === "button"
      ? buttongeneratorImg
      : projectInfo.img === "ecommerce"
      ? eccomerceImg
      : projectInfo.img === "expense"
      ? expenseTrackerImg
      : projectInfo.img === "mail"
      ? mailboxImg
      : jobquestImg;

  return (
    <div className="group bg-gray-800 ">
      <div className="grid">
        <div className="relative">
          <img
            className="transition ease-in-outgroup-hover:opacity-50"
            src={img}
            
          />
          <div className="absolute grid text-center">
            <div>
              <a
                href={projectInfo.link}
                className=" hover:bg-blue-600 transition"
              >
                Visit Website
              </a>
            </div>
            <div>
              <a
                href={projectInfo.sourceCode}
                className="bg-blue-300 text-white px-3 py-1 text-lg rounded-md capitalize"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 h-full bg-slate-100">
          <h1 className="capitalize text-xl text-gray-900 font-semibold">
            {projectInfo.title}
          </h1>
          <div className="mt-3">
            {projectInfo.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-slate-300 px-3 py-3 rounded-lg text-sm  text-gray-700 me-2 border border-[#9d9dda]"
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