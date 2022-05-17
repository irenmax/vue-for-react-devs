import logo from './../logo.svg';
import { useState } from 'react';
import BurgerBuilderControls from '../components/BurgerBuilderControls';
import IterativeBurger from '../components/IterativeBurger';

const BurgerBuilderIterative = () => {
  const [ingredients, setIngredients] = useState([]);

  const [isVeggie, setIsVeggie] = useState(true);

  const addIngredient = (key) => {
    setIngredients([{ type: key, amount: 1 }, ...ingredients]);
  };

  const toggleVeggie = () => {
    setIsVeggie(!isVeggie);
  };

  return (
    <>
      <img src={logo} className='App-logo' alt='logo' />
      <div style={styles.builderContainer}>
        <h1>Welcome to amp burgerz 👋</h1>
        <BurgerBuilderControls
          addIngredient={addIngredient}
          isVeggie={isVeggie}
          toggleVeggie={toggleVeggie}
        />
      </div>
      <IterativeBurger ingredients={ingredients} isVeggie={isVeggie} />
    </>
  );
};

const styles = {
  builderContainer: {
    paddingTop: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
};

export default BurgerBuilderIterative;
