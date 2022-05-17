import BeefPatty from './BeefPatty';
import VeggiePatty from './VeggiePatty';

const Patty = ({ amount, isVeggie = true, onClick }) => {
  return Array.from({ length: amount }, (v, i) =>
    isVeggie ? (
      <VeggiePatty key={i} onClick={onClick} />
    ) : (
      <BeefPatty key={i} onClick={onClick} />
    )
  );
};

export default Patty;
