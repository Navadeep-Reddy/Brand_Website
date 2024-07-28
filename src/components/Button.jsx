const Button = ({ userheight, userwidth, marginX, children, userFont }) => {
  return (
    <button
      className=" bg-ctPur font-semibold text-ctYel rounded-md drop-shadow-2xl"
      style={{
        height: userheight,
        width: userwidth,
        marginRight: marginX,
        fontSize: userFont,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
