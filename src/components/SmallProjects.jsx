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
    <div className="max-w-6xl w-11/12 mx-auto grid lg:grid-cols-3">
      {smallProjects.map((project, index) => (
        <SingleProject key={index} projectInfo={project} />
      ))}
    </div>
  );
};

export default SmallProjects;
