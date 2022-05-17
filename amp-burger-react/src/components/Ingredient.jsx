import Cheese from "./ingredients/Cheese";
import Patty from "./ingredients/Patty";
import Pickles from "./ingredients/Pickles";
import Tomatos from "./ingredients/Tomatos";

const Ingredient = ({ type, amount, isVeggie }) => {
  switch (type) {
    case "tomatos":
      return <Tomatos amount={amount} />;
    case "cheese":
      return <Cheese amount={amount} />;
    case "patty":
      return <Patty amount={amount} isVeggie={isVeggie} />;
    case "pickles":
      return <Pickles amount={amount} />;
    default:
      return null;
  }
};

export default Ingredient;
