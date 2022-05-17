import BunBottom from './ingredients/BunBottom';
import BunTop from './ingredients/BunTop';
import Cheese from './ingredients/Cheese';
import Patty from './ingredients/Patty';
import Pickles from './ingredients/Pickles';
import Salad from './ingredients/Salad';
import Tomatos from './ingredients/Tomatos';

const SimpleBurger = () => {
  return (
    <div style={styles.burgerContainer}>
      <BunTop />
      <Tomatos amount={1} />
      <Salad />
      <Cheese amount={1} />
      <Patty amount={1} />
      <Pickles amount={1} />
      <BunBottom />
    </div>
  );
};

const styles = {
  burgerContainer: {
    paddingTop: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
};

export default SimpleBurger;
