function PrimaryButton(props) {
  return (
    <button
      className="bg-dark-pink hover:bg-light-pink p-4 rounded-2xl"
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
      className="p-4 rounded-2xl"
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}
