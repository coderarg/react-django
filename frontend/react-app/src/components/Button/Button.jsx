import "./Button.css";
function Button(params) {
  const { text, type } = params;
  return (
    <button type={type} className="button">
      {text}
    </button>
  );
}

export default Button;
