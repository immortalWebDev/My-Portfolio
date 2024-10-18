const Wrapper = (props) => {
  return (
    <section
      id={props.id}
      className={`${props.classes}`}
    >
      {props.children}
    </section>
  );
};

export default Wrapper;
