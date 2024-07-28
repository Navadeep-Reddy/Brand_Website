const Button = ({ userheight, userwidth, children }) => {
  return (
    <button
      className=" bg-ctPur font-semibold"
      style={{ height: userheight, width: userwidth }}
    >
      {children}
    </button>
  );
};

export default Button;
