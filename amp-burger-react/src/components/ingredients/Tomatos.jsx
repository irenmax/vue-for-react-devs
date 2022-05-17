const Tomatos = ({ amount }) => {
  return Array.from({ length: amount }, (v, i) => (
    <div style={styles.container} key={i}>
      <div style={styles.tomato} />
      <div style={styles.tomato} />
    </div>
  ));
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  tomato: {
    width: 100,
    height: 10,
    backgroundColor: '#E7574A',
  },
};

export default Tomatos;
