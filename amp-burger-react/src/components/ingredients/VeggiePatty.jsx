const VeggiePatty = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#923a56",
        width: 250,
        height: 50,
        borderRadius: 50,
      }}
    />
  );
};

export default VeggiePatty;
