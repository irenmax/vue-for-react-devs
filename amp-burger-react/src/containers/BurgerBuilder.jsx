import logo from './../logo.svg';
import { useState, useEffect } from 'react';
import BurgerBuilderControls from '../components/BurgerBuilderControls';
import EditableBurger from '../components/EditableBurger';
import useSummary from '../hooks/useSummary';

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    tomatos: 0,
    cheese: 0,
    patty: 0,
    pickles: 0,
  });

  const [isVeggie, setIsVeggie] = useState(true);

  const addIngredient = (key) => {
    setIngredients({
      ...ingredients,
      [key]: ingredients[key] + 1,
    });
  };

  const removeIngredient = (key) => {
    if (ingredients[key] > 0) {
      setIngredients({
        ...ingredients,
        [key]: ingredients[key] - 1,
      });
    }
  };

  const toggleVeggie = () => {
    setIsVeggie(!isVeggie);
  };

  // const [summary, setSummary] = useState('Your burger is empty 😢');

  // useEffect(() => {
  //   let totalAmount = 0;
  //   Object.values(ingredients).forEach((amount) => {
  //     totalAmount += amount;
  //   });
  //   if (totalAmount > 0) {
  //     setSummary(`Your burger has ${totalAmount} ingredients 🤤`);
  //   } else {
  //     setSummary('Your burger is empty 😢');
  //   }
  // }, [ingredients]);

  // const [summary] = useSummary(ingredients);

  return (
    <>
      <img src={logo} className='App-logo' alt='logo' />
      <div style={styles.builderContainer}>
        <h1>Welcome to amp burgerz 👋</h1>
        {/*<p>{summary}</p>*/}
        <BurgerBuilderControls
          addIngredient={addIngredient}
          isVeggie={isVeggie}
          toggleVeggie={toggleVeggie}
        />
        <EditableBurger
          ingredients={ingredients}
          isVeggie={isVeggie}
          removeIngredient={removeIngredient}
        />
      </div>
    </>
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
  builderContainer: {
    paddingTop: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
};

export default BurgerBuilder;
