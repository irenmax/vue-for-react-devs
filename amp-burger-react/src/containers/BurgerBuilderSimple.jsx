import logo from './../logo.svg';

import SimpleBurger from '../components/SimpleBurger';

const BurgerBuilderSimple = () => {
  return (
    <>
      <img src={logo} className='App-logo' alt='logo' />

      <div style={styles.container}>
        <h1>Welcome to amp burgerz 👋</h1>
        <SimpleBurger />
      </div>
    </>
  );
};

const styles = {
  container: {
    paddingTop: 30,
    textAlign: 'center',
  },
};

export default BurgerBuilderSimple;
