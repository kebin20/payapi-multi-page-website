function PrimaryButton(props) {
  return (
    <button
      className={`${props.className} font-bold bg-dark-pink hover:bg-light-pink px-14 py-3.5 rounded-full`}
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
      className={`${props.className} capitalize font-bold border px-10 py-4 rounded-full`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

export { PrimaryButton, SecondaryButton };
