import SingleProject from "./SingleProject";

const smallProjects = [
  {
    title: "Calculator App",
    link: "https://example.com/calculator-app",
  },
  {
    title: "Weather App",

    link: "https://example.com/weather-app",
  },
  {
    img: "translator",
    link: "https://example.com/text-translator",
  },
  {
    img: "todo",
    link: "https://example.com/todo-app",
  },
  {
    title: "Tip Calculator",

    link: "https://example.com/tip-calculator",
  },
  {
    title: "Stopwatch",

    link: "https://example.com/stopwatch",
  },
  {
    title: "Notes App",

    link: "https://example.com/notes-app",
  },
  {
    title: "Random Quote Generator",

    link: "https://example.com/quote-generator",
  },
  {
    title: "BMI Calculator",

    link: "https://example.com/bmi-calculator",
  },
  {
    title: "Unit Converter",

    link: "https://example.com/unit-converter",
  },
  {
    title: "Countdown Timer",

    link: "https://example.com/countdown-timer",
  },
  {
    title: "Currency Converter",

    link: "https://example.com/currency-converter",
  },
];

const SmallProjects = () => {
  return (
    <Wrapper id="small-projects" classes="bg-green-100 py-10 relative">
      <SectionTitle
        classes="text-center mb-5"
        title="Note Worthy Projects"
        icon={<FaCode className="text-4xl text-blue-700" />}
      />
      <div className="max-w-6xl w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 rounded-3xl h-3/4 lg:py-10">
        {smallProjects.map((project, index) => (
          <SingleProject key={index} projectInfo={project} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="none"
            stroke="purple"
            strokeWidth="2"
            d="M0,50 Q360,0 720,50 T1440,50"
          />
        </svg>
      </div>
    </Wrapper>
  );
};

export default SmallProjects;
