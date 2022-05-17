const Button = ({ title, onClick }) => {
  return (
    <button
      style={{
        width: 180,
        height: 50,
        fontSize: 18,
        backgroundColor: "#98d7d6",
        borderRadius: 7,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
