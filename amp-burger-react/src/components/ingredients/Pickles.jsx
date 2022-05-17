const Pickles = ({ amount }) => {
  return Array.from({ length: amount }, (v, i) => (
    <div style={styles.container} key={i}>
      <div style={styles.pickle} />
      <div style={styles.pickle} />
      <div style={styles.pickle} />
    </div>
  ));
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  pickle: {
    width: 60,
    height: 7,
    backgroundColor: "#69995D",
  },
};

export default Pickles;
