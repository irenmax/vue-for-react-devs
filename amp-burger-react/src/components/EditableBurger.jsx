import BunBottom from "./ingredients/BunBottom";
import BunTop from "./ingredients/BunTop";
import Cheese from "./ingredients/Cheese";
import Patty from "./ingredients/Patty";
import Salad from "./ingredients/Salad";
import Tomatos from "./ingredients/Tomatos";
import Pickles from "./ingredients/Pickles";

const EditableBurger = ({ ingredients, isVeggie, removeIngredient }) => {
  return (
    <div style={styles.burgerContainer}>
      <BunTop />
      <Tomatos amount={ingredients.tomatos} />
      <Salad />
      <Cheese amount={ingredients.cheese} />
      <Patty
        isVeggie={isVeggie}
        amount={ingredients.patty}
        onClick={() => removeIngredient("patty")}
      />
      <Pickles amount={ingredients.pickles} />
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

export default EditableBurger;
