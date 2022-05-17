const BeefPatty = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#6e4420",
        width: 250,
        height: 50,
        borderRadius: 50,
      }}
    />
  );
};

export default BeefPatty;
