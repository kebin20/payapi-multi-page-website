function PrimaryButton(props) {
  return (
    <button
      className=" font-bold bg-dark-pink hover:bg-light-pink px-14 py-3.5 rounded-3xl"
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

function SecondaryButton(props) {
  return (
    <button
      className="font-bold px-14 py-3.5 rounded-3xl"
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

export { PrimaryButton, SecondaryButton };
