import Button from './Button';

const BurgerBuilderControls = ({ addIngredient, isVeggie, toggleVeggie }) => {
  return (
    <div style={styles.container}>
      <Button title='Add Tomatos 🍅' onClick={() => addIngredient('tomatos')} />
      <Button title='Add Patty 🍔' onClick={() => addIngredient('patty')} />
      <Button title='Add Cheese 🧀' onClick={() => addIngredient('cheese')} />
      <Button title='Add Pickles 🥒' onClick={() => addIngredient('pickles')} />
      <div style={styles.toggles}>
        <div>
          <input
            id='veggie'
            type='radio'
            checked={isVeggie}
            onChange={toggleVeggie}
          />
          <label htmlFor='veggie' style={{ paddingRight: 10, fontSize: 20 }}>
            Veggie 🥬
          </label>
        </div>
        <div>
          <input
            id='beef'
            type='radio'
            checked={!isVeggie}
            onChange={toggleVeggie}
          />
          <label htmlFor='beef' style={{ paddingRight: 10, fontSize: 20 }}>
            Beef 🍖
          </label>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    gap: 5,
  },
  toggles: {
    paddingTop: 10,
  },
};

export default BurgerBuilderControls;
