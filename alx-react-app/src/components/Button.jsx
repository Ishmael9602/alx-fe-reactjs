const Button = (props) => {
  return (
    <button onClick={props.onClick} style={{ padding: '10px 20px', margin: '10px' }}>
      {props.label}
    </button>
  );
};

export default Button;
