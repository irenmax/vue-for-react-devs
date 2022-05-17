import BunBottom from "./ingredients/BunBottom";
import BunTop from "./ingredients/BunTop";
import Salad from "./ingredients/Salad";
import Ingredient from "./Ingredient";

const IterativeBurger = ({ ingredients, isVeggie }) => {
  return (
    <div style={styles.burgerContainer}>
      <BunTop />
      <Salad />
      {ingredients.map((ingredient, i) => (
        <Ingredient
          key={i}
          type={ingredient.type}
          amount={ingredient.amount}
          isVeggie={isVeggie}
        />
      ))}
      <BunBottom />
    </div>
  );
};

const styles = {
  burgerContainer: {
    paddingTop: 20,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 200,
  },
};
export default IterativeBurger;
