const Cheese = ({ amount }) => {
  // return (
  return Array.from({ length: amount }, (v, i) => (
    <div key={i} style={{ position: "relative", paddingBottom: 5 }}>
      <div
        style={{
          position: "absolute",
          left: -120,
          top: 0,
          borderLeft: "120px solid transparent",
          borderRight: "120px solid transparent",
          borderTop: "30px solid #E6A91B",
        }}
      />
    </div>
  ));
};

export default Cheese;
