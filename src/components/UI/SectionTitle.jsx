const SectionTitle = (props) => {
  const { title, classes, icon } = props;

  return (
    <div className={`flex justify-center gap-3 items-center ${classes}`}>
      <span>{icon}</span>
      <h2 className="capitalize text-4xl tracking-wider font-bold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
