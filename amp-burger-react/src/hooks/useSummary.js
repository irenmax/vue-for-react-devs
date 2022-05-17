import { useState, useEffect } from 'react';

const useSummary = (ingredients) => {
  const [summary, setSummary] = useState('Your burger is empty 😢');

  useEffect(() => {
    let totalAmount = 0;
    Object.values(ingredients).forEach((amount) => {
      totalAmount += amount;
    });
    if (totalAmount > 0) {
      setSummary(`Your burger has ${totalAmount} ingredients 🤤`);
    } else {
      setSummary('Your burger is empty 😢');
    }
  }, [ingredients]);

  return [summary];
};

export default useSummary;
