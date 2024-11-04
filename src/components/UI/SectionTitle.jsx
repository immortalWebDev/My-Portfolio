const SectionTitle = (props) => {
  const { title, icon } = props;

  return (
    <div className={`flex}`}>
      <span>{icon}</span>
      <h2 className="capitalize text-4xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
